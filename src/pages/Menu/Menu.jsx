import { Helmet } from "react-helmet";
import PageCover from "../Shared/PageCover/PageCover";
import menuCoverImage from "../../../src/assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* page cover */}
      <PageCover menuCover={menuCoverImage} title={"Our Menu"}></PageCover>

      
    </div>
  );
};

export default Menu;
