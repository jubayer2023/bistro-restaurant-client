import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuthContext from "../../../hooks/useAuthContext";

const CheckoutForm = ({ clientSecret }) => {
  const [payMethodError, setPayMethodError] = useState({});
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("PaymentMethodError : ", error);
      setPayMethodError(error);
    } else {
      console.log("PaymentMethod create : ", paymentMethod);
      setPayMethodError({});
    }

    // confirm payment intent card
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "blank",
            name: user?.displayName || "anonymous",
          },
        },
      });
    // now check status
    if (error) {
      console.log("[ConfirmPaymentIntent Error : ]", confirmError);
    } else {
      console.log("[ConfirmPaymentIntent  : ]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("succedded", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>

      {/* card button */}
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="text-sm text-white btn btn-sm mt-8 btn-warning"
      >
        Pay
      </button>

      {payMethodError && (
        <p className="text-red-600 text-sm font-semibold ">
          {payMethodError.message}
        </p>
      )}
      {transactionId && (
        <p className="text-green-600 text-sm font-semibold ">Your transactionId : {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
