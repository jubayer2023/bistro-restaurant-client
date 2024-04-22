import { useEffect, useState } from "react";

const PopularItems = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenus(popularItems);
      });
  }, []);

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menus.map((item) => (
          <>
            <div
              key={item._id}
              className="flex justify-between items-center gap-5"
            >
              <div className="w-1/3 ">
                <img
                  className="rounded-full rounded-tl-none"
                  src={item.image}
                  alt="menuImage"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="uppercase ">{item.name}-----------------</h4>
                  <p className="text-amber-400">${item.price}</p>
                </div>
                <p className="text-sm">{item.recipe}</p>
              </div>
            </div>
          </>
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
