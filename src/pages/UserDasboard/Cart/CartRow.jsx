import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CartRow = ({ item, index, refetch }) => {
  const { image, name, price, _id } = item;
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your CartItem has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td> $ {price}</td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-warning"
          >
            <FaTrash></FaTrash>
          </button>
        </th>
      </tr>
    </>
  );
};

export default CartRow;
