import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { useMenuHook } from "../../../hooks/useMenuHook";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menus, , refetch] = useMenuHook();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.delete(`/menu/${item._id}`);
        console.log("response from delete menu item : ", response.data);
        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted !`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    });
  };

  ///////////////////

  return (
    <div className=" w-full min-h-screen">
      <SectionTitle
        sectionHeading={"Manage All Items"}
        sectionText={"Hurry up ! "}
      ></SectionTitle>
      <div className=" max-w-screen-md mt-12 mx-auto p-12 bg-neutral-200 ">
        {/* Table here */}
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-amber-500 text-white">
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {menus.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td> $ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-sm btn-warning">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-sm btn-warning"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
