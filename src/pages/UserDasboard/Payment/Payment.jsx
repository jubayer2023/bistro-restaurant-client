import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckoutForm from "./ChekoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useCarts from "../../../hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_API_KEY);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const [carts] = useCarts();

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, totalPrice]);

  return (
    <div className=" w-full min-h-screen">
      <SectionTitle
        sectionHeading={"Payment System"}
        sectionText={"Pay here !!! "}
      ></SectionTitle>
      {/* fcheckout form */}
      <div className=" max-w-screen-md mt-12 mx-auto p-12 bg-neutral-200 ">
        {/* checkout form here */}
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
