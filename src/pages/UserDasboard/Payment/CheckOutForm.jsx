import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuthContext from "../../../hooks/useAuthContext";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CheckOutForm = () => {
  const [err, setErr] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTranactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  console.log(user?.email);
  // const axiosPublic = useAxiosPublic();
  const [carts] = useCarts();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((response) => {
        console.log(response.data);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // stripe and element checking
    if (!stripe || !elements) {
      return;
    }

    // check card element
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // now check stripe api
    if (error) {
      console.log("Error from stripe : ", error);
      setErr(error);
    } else {
      console.log("PaymentMethod From Stripe : ", paymentMethod);
      setErr({});
    }

    // confirm card payment intent
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    // show the destuctured value from confirm paymentIntent
    if (confirmError) {
      console.log("Payment confirm error", confirmError);
    } else {
      console.log("PaymentIntent : ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTranactionId(paymentIntent.id);
        console.log("TransactionId: ", paymentIntent.id);
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
      />
      {/* button */}
      <button
        className="btn btn-secondary btn-sm my-12"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600 text-sm font-semibold ">{err.message}</p>
      <p className="text-green-600 text-sm font-semibold ">
        Your transactionId : {transactionId}
      </p>
    </form>
  );
};

export default CheckOutForm;
