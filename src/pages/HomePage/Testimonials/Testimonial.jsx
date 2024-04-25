import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-full h-full flex justify-center items-center ">
              <div className="max-w-screen-sm lg:max-w-screen-md mx-auto text-center space-y-5">
                <div className="flex justify-center items-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  ></Rating>
                </div>
                <div className="text-7xl flex justify-center items-center">
                  <FaQuoteLeft></FaQuoteLeft>
                </div>
                <p className="">{review.details}</p>
                <h3 className="text-amber-400 text-xl capitalize font-bold">
                  {review.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
