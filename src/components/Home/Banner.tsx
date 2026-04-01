"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const images = [
    "/banner/All-prodcuts-16x9.jpg",
    "/banner/car-fb-cover-16x9.jpg",
    "/banner/Cng-fb-cover-16x9.jpg",
    "/banner/Diesel-FB-cover-16x9.jpg",
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect= {{    
          crossFade: true
        }}
        navigation={true}
        speed={2000}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images?.map((item, idx) => (
          <SwiperSlide>
            <img className="w-full h-screen" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
