import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAuthContext from "../../../hooks/useAuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa6";

const PaymentHistory = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(payments);

  return (
    <div className="p-10 ">
      <SectionTitle
        sectionHeading={"Payment History"}
        sectionText={"At a glance "}
      ></SectionTitle>
      <div className=" w-full ">
        <div className="flex justify-evenly items-center w-full my-12">
          <h3 className="text-3xl font-semibold ">Items:{payments.length} </h3>
          <h3 className="text-3xl font-semibold ">Total Price: $</h3>
        </div>
        {/* Table here */}
        <div className="overflow-x-auto my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-amber-400 text-white">
                <th>#</th>
                <th>Email</th>
                <th>Price</th>
                <th>transactionId</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {payments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>{item.email}</td>
                  <td> $ {item.price}</td>
                  <td> {item.transactionId}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
