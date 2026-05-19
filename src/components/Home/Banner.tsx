"use client";
import { Swiper, SwiperSlide } from "swiper/react";


// @ts-ignore
import 'swiper/css/bundle';

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const images = [
    "/banner/banner-image-all.webp",
    "/banner/banner-image-bike.webp",
    "/banner/banner-image-car.webp",
    "/banner/banner-image-cng.webp",
    "/banner/banner-image-truck.webp",
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
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
        {images?.map((item , idx) => (
          <SwiperSlide key={idx}>
            <Image
              alt={"banner-image"}
              // layout="fill"
              width={1000}
              height={1000}
              className="mx-auto  w-screen object-top-left object-cover  lg:h-screen  "
              src={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
