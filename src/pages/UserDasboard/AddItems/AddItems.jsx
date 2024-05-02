import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.image[0].name);
  };
  return (
    <div className=" w-full min-h-screen">
      <SectionTitle
        sectionHeading={"Add An Item "}
        sectionText={"What's new ? "}
      ></SectionTitle>
      <div className=" max-w-screen-md mt-12 mx-auto p-12 bg-neutral-200 ">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3">
          <div className="form-control w-full ">
            <label>Recipe Name*</label>
            <input
              {...register("name")}
              type="text"
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
              >
                <option selected>Pizza</option>
                <option>Salad</option>
                <option>Drinks</option>
                <option>Desserts</option>
                <option>Soup</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control  w-full">
              <label>Price</label>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <label className="form-control">
            <div className="label">
              <span {...register("details")} className="label-text">
                Recipe Details*
              </span>
            </div>
            <textarea
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
              Add Item <FaUtensilSpoon></FaUtensilSpoon>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
