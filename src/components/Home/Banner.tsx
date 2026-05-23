"use client";
import { Swiper, SwiperSlide } from "swiper/react";


// @ts-ignore
import 'swiper/css/bundle';

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const images = [
    "/banner/banner-image-all",
    "/banner/banner-image-bike",
    "/banner/banner-image-car",
    "/banner/banner-image-cng",
    "/banner/banner-image-truck",
  ];

  return (
    <div className="relative">

      <h1 className="sr-only">Red Lube | Premium Automotive & Industrial Lubricants</h1>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={true}
        speed={1000}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <picture>
              {/* Mobile: 0 - 640px */}
              <source
                media="(max-width: 640px)"
                srcSet={item + "-mobile.webp"}
              />

              {/* Tablet + iPad: 641 - 1024px */}
              <source
                media="(max-width: 1024px)"
                srcSet={item + "-tab.webp"}
              />

              {/* Desktop + large screens */}
              <img
                src={item + "-lg.webp"}
                alt="banner-image"
                className="w-screen object-cover"
              />
            </picture>
            {/* <div className="relative w-screen h-screen">
  <Image
    src={item}
    alt="banner-image"
    fill
    priority
    quality={90}
    sizes="100vw"
    className="object-cover"
  />
</div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
