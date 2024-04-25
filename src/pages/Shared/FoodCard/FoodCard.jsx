const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

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
        <button className="text-gray-600 btn btn-sm btn-outline border-0 border-b-4 hover:text-amber-500 border-slate-700 hover:">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
