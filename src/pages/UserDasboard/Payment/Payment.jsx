import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_API_KEY);

const Payment = () => {
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
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
