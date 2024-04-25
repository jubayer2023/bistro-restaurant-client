import { Helmet } from "react-helmet";
import menuCoverImage from "../../../src/assets/menu/banner3.jpg";
import desertImage from "../../../src/assets/menu/dessert-bg.jpeg";
import saladImage from "../../../src/assets/menu/salad-bg.jpg";
import pizzaImage from "../../../src/assets/menu/pizza-bg.jpg";
import soupImage from "../../../src/assets/menu/soup-bg.jpg";

import { useMenuHook } from "../../hooks/useMenuHook";
import Cover from "../Shared/PageCover/PageCover";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menus] = useMenuHook();

  const dessertItems = menus.filter((item) => item.category === "dessert");
  const saladItems = menus.filter((item) => item.category === "salad");
  const pizzaItems = menus.filter((item) => item.category === "pizza");
  const soupItems = menus.filter((item) => item.category === "soup");
  const offeredItems = menus.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/*main cover */}
      <Cover
        menuCover={menuCoverImage}
        title={"Our Menu"}
        text={"Would you like to try a dish ?"}
      ></Cover>

      {/* offerd items */}
      <div className="my-16">
        <SectionTitle
          sectionHeading={"Todays Offer"}
          sectionText={"Don't miss"}
        ></SectionTitle>
        <MenuCategory items={offeredItems}></MenuCategory>
      </div>

      {/* dessert items */}
      <div className="my-16">
        <MenuCategory
          items={dessertItems}
          title={"Dessersts"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, consequuntur, consectetur adipisicing elit. Quisquam, consequuntur,"
          }
          categoryImg={desertImage}
        ></MenuCategory>
      </div>

      {/* salads items */}
      <div className="my-16">
        <MenuCategory
          items={saladItems}
          title={"Salads"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, consequuntur, consectetur adipisicing elit. Quisquam, consequuntur,"
          }
          categoryImg={saladImage}
        ></MenuCategory>
      </div>

      {/* pizza items */}
      <div className="my-16">
        <MenuCategory
          items={pizzaItems}
          title={"Pizza"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, consequuntur, consectetur adipisicing elit. Quisquam, consequuntur,"
          }
          categoryImg={pizzaImage}
        ></MenuCategory>
      </div>

      {/* soup items */}
      <div className="my-16">
        <MenuCategory
          items={soupItems}
          title={"Soup"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, consequuntur, consectetur adipisicing elit. Quisquam, consequuntur,"
          }
          categoryImg={soupImage}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
