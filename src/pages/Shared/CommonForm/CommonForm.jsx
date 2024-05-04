import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMenuHook } from "../../../hooks/useMenuHook";
import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

// set images extra setting usin imgbb api
const img_hosting_api_Key = import.meta.env.VITE_IMGBB_HOST_KEY;

const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_api_Key}`;

const CommonForm = ({ heading, item, method }) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useMenuHook();
  console.log(method);
  const { name, recipe, price, category, _id } = item;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      // console.log(data.image[0]);
      console.log(data);
      // post image to get imgbb live link
      const imgFile = { image: data.image[0] };
      const response = await axiosPublic.post(img_hosting_api, imgFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log(response.data.data);
      if (response.data.success) {
        const menuInfo = {
          name: data.name,
          price: parseFloat(data.price),
          category: data.category,
          recipe: data.recipe,
          image: response.data.data.display_url,
        };

        // post postMenu
        if (method === "post") {
          const postItem = await axiosSecure.post("/menu", menuInfo);
          console.log(postItem);
          if (postItem.data?.insertedId) {
            refetch();
            Swal.fire({
              title: `${data.name} added successfully!!`,
              showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
              },
              hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
              },
            });
          }
        }
        if (method === "patch") {
          const patchItem = await axiosSecure.patch(`/menu/${_id}`, menuInfo);
          console.log(patchItem);
          if (patchItem.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: `${data.name} updated successfully!!`,
              showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
              },
              hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
              },
            });
          }
        }

        // ////
      }
    } catch (error) {
      console.log("error from response: ", error);
    }
  };

  return (
    <div className=" w-full min-h-screen">
      <SectionTitle
        sectionHeading={heading}
        sectionText={"What's new ? "}
      ></SectionTitle>
      <div className=" max-w-screen-md mt-12 mx-auto p-12 bg-neutral-200 ">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3">
          <div className="form-control w-full ">
            <label>Recipe Name*</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={item ? name : ""}
              placeholder="Recipe Name"
              required
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex md:flex-row items-center justify-between">
            {/* category */}
            <div className="form-control  w-full">
              <label>Category</label>
              <select
                required
                {...register("category")}
                className="select select-secondary w-full max-w-xs"
                defaultValue={item ? category : ""}
              >
                <option>pizza</option>
                <option>salad</option>
                <option>drinks</option>
                <option>desserts</option>
                <option>soup</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control  w-full">
              <label>Price</label>
              <input
                {...register("price")}
                type="number"
                defaultValue={item ? price : ""}
                placeholder="Price"
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe")}
              defaultValue={item ? recipe : ""}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </label>
          <div>
            <input
              {...register("image")}
              type="file"
              required
              className="file-input w-full max-w-xs"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-md btn-secondary text-white"
            >
              {heading === "Add An Item" ? (
                <>
                  Add Item <FaUtensils></FaUtensils>
                </>
              ) : (
                <>Update Item</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommonForm;
