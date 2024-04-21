import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const slideArray = [
  {
    img: slide1,
    title: "Salads",
  },
  {
    img: slide2,
    title: "Soups",
  },
  {
    img: slide3,
    title: "Pizzas",
  },
  {
    img: slide4,
    title: "Desserts",
  },
  {
    img: slide5,
    title: "Sauces",
  },
];

const Category = () => {
  return (
    <div className="mb-20 mt-10 px-5 xl:px-0">
      <Swiper
        style={{
          height: "400px",
        }}
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {slideArray.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt="categoryImage" className="relative rounded-md" />
            <h3 className="text-sm md:text-xl uppercase text-neutral-100 text-center absolute bottom-20  bg-clip-text bg-slate-700 text-transparent left-14 md:left-10 lg:left-20">
              {slide.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
