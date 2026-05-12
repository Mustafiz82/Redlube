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
    "/banner/banner-image-1.webp",
    "/banner/banner-image-2.jpeg",
    "/banner/banner-image-3.webp",
    "/banner/banner-image-4.webp",
    // "/banner/banner-image-5.jpeg",
    // "/banner/car-fb-cover-16x9.jpg",
    // "/banner/Cng-fb-cover-16x9.jpg",
    // "/banner/Diesel-FB-cover-16x9.jpg",
  ];

  // #4F070A -black-red
  // #r -black

  return (
    <div className="relative">
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
      <img
        className="mx-auto w-screen object-top-left object-cover h-screen  "
        src={item}
      />
      {/* <div className="absolute px-20 text-white top-1/2 left-0 -translate-y-1/2 ">
        <h2 className="text-white font-orbitron text-5xl font-bold leading-tight">
          ENGINEERED FOR
          <br />
          EXTREME PERFORMANCE
        </h2>
        <p className="text-white/80 text-lg mt-4 max-w-lg">
          Econite keanto sontipre kenly estutefine su affasrubert on the ter
          time uneer ootectel coling
        </p>


        <button className="bg-primary text-white px-5 py-2 my-10 "> Learn More</button>
      </div> */}
      </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
