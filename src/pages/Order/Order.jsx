import Cover from "../Shared/PageCover/PageCover";
import orderCoverImage from "../../assets/shop/order.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { useMenuHook } from "../../hooks/useMenuHook";
import OrderPanel from "./OrderPanel";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const categories = ["Salad", "Pizza", "Soup", "Desserts", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(initialIndex);

  const [menus] = useMenuHook();
  console.log(category);

  const dessertItems = menus.filter((item) => item.category === "dessert");
  const saladItems = menus.filter((item) => item.category === "salad");
  const pizzaItems = menus.filter((item) => item.category === "pizza");
  const soupItems = menus.filter((item) => item.category === "soup");
  const drinkItems = menus.filter((item) => item.category === "drinks");

  return (
    <div>
      {/* Order Cover */}
      <Cover
        coverImage={orderCoverImage}
        title={"Order Food"}
        text={"Order you favourite foods ,,, Hurry up !!!"}
      ></Cover>
      {/* tabs  */}
      <div className=" my-16 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className={"uppercase font-semibold"}
        >
          <TabList className={"flex justify-center items-center mb-8"}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderPanel items={saladItems}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={pizzaItems}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={soupItems}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={dessertItems}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={drinkItems}></OrderPanel>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
