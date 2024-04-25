import FoodCard from "../Shared/FoodCard/FoodCard";

const OrderPanel = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 lg:px-0 ">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderPanel;
