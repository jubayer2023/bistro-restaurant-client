import MenuItem from "./MenuItem";
import { useMenuHook } from "../../../hooks/useMenuHook";

const PopularItems = () => {
  const [menus] = useMenuHook();
  // console.log(menus, loading);

  const popularItems = menus.filter((item) => item.category === "popular");

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <button className="btn btn-sm btn-outline border-0 border-b-4 my-4 uppercase ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularItems;
