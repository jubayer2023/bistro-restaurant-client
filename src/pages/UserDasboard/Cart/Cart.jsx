import useCarts from "../../../hooks/useCarts";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CartRow from "./CartRow";

const Cart = () => {
  const [carts, refetch] = useCarts();

  const totalPrice = carts.reduce((total, item) => {
    return total + item.price;
  }, 0);
  console.log(totalPrice);
  return (
    <div className="p-10 ">
      <SectionTitle
        sectionHeading={"My Cart"}
        sectionText={"Wellecome to cart "}
      ></SectionTitle>
      <div className=" w-full ">
        <div className="flex justify-evenly items-center w-full my-12">
          <h3 className="text-3xl font-semibold ">Items: {carts.length}</h3>
          <h3 className="text-3xl font-semibold ">
            Total Price: $ {totalPrice}
          </h3>
          <button className="btn btn-sm btn-secondary">Pay</button>
        </div>
        {/* Table here */}
        <div className="overflow-x-auto my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {carts.map((item, index) => (
                <CartRow
                  key={item._id}
                  item={item}
                  index={index}
                  refetch={refetch}
                ></CartRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
