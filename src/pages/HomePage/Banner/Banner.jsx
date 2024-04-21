import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Bnnner.css";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const banners = [img1, img2, img3, img4, img5, img6];

const Banner = () => {
  return (
    <Carousel
      thumbWidth={100}
      infiniteLoop={true}
      useKeyboardArrows={true}
      width={"full"}
      showStatus={false}
      stopOnHover={true}
      transitionTime={700}
      interval={2000}
    >
      {banners.map((banner, index) => (
        <div key={index}>
          <img src={banner} alt="banner-img" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
