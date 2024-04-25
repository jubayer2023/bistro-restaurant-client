import { Link } from "react-router-dom";
import MenuItem from "../HomePage/PopularItems/MenuItem";
import Cover from "../Shared/PageCover/PageCover";

const MenuCategory = ({ items, categoryImg, title, text }) => {
  return (
    <div className="my-16">
      {title && (
        <Cover coverImage={categoryImg} title={title} text={text}></Cover>
      )}
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 xl:px-0 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link to={`/order/${title}`}>
          <button className="btn btn-sm btn-outline border-0 border-b-4 my-4 uppercase ">
            Order your favourite food !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
