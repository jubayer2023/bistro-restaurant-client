import Swal from "sweetalert2";
import useAuthContext from "../../../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosBaseURL from "../../../hooks/useAxiosBaseURL";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosBaseURL = useAxiosBaseURL();

  const handleAddToCart = () => {
    // console.log(item);
    if (user && user.email) {
      // send data to dtatbase
      const menuItem = {
        oldId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      // console.log(menuItem);
      axiosBaseURL
        .post("/carts", menuItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            alert("Added susccessfully !");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "You are not logged in !!!",
        text: "Do you want to login ? !",
        showCancelButton: true,
        confirmButtonText: "yes",
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col justify-between flex-shrink shadow-sm shadow-slate-600 bg-neutral-50 p-5 rounded-sm">
      <div className="relative">
        <img className="rounded-sm" src={image} alt="cardImage" />
        <p className="absolute top-2 right-2 bg-slate-700 text-white px-3 ">
          ${price}
        </p>
      </div>
      <div className="text-sm normal-case text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 mt-3">{name}</h3>
        <p>{recipe}</p>
      </div>
      <div className=" text-center pt-3">
        <button
          onClick={handleAddToCart}
          className="text-gray-600 btn btn-sm btn-outline border-0 border-b-4 hover:text-amber-500 border-slate-700 hover:"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
