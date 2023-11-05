// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ReviewStyle.css";

// import required modules
import { Autoplay } from "swiper/modules";

const MembersReview = () => {
  const carosels = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className="">
      <div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-Secondary mb-2">
          Members Review
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {carosels.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col justify-center items-center space-y-2 py-5">
              <div className="w-20">
                <img
                  className="rounded-full ring-1"
                  src="https://i.ibb.co/gvL3BK2/Untitled-1.jpg"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold">Asmaul Hossain</h1>
              <p className="max-w-xs md:max-w-xl px-4 text-Slate/70 text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                beatae consequatur accusantium eius exercitationem provident?
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MembersReview;
