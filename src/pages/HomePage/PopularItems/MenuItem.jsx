const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  
  return (
    <div>
      <div className="flex justify-between items-center gap-5">
        <div className="w-1/3 ">
          <img
            className="rounded-full rounded-tl-none"
            src={image}
            alt="menuImage"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="uppercase ">{name}-----------------</h4>
            <p className="text-amber-400">${price}</p>
          </div>
          <p className="text-sm">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
