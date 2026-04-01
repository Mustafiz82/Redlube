import React from "react";

const WhyRedLube = () => {
  return (
    <div>
      <section className="bg-[url('/shapes/2208_w018_n002_1259b_p15_1259.jpg')] bg-cover bg-fixed bg-black/50 bg-blend-color-burn  px-6 md:px-16 lg:px-24">
        {/* <div
          className="absolute inset-0 bg-[url('/shapes/why_us_bg_image.jpg')] bg-cover bg-center"
          aria-hidden="true"
        /> */}

        <div className="max-w-7xl relative py-36 mt-28 mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div className=" pl-20 space-y-6 items-start ">
            {/* Vertical Line */}
            <div className="flex gap-5">
              <div className="w-[5px] h-[40px] bg-primary mt-2"></div>

              {/* Heading */}
              <h2 className="font-paladin text-white font-extralight text-[40px]  text-primary leading-tight">
                Why RedLube
              </h2>
            </div>

            <p className=" leading-relaxed text-white text-[15px] ">
              Our dedication to research and development allows us to provide
              the best products in the best prices. We are a forward-thinking
              company with a focus on continuous innovation to keep up with the
              evolving needs of international roadways.
            </p>
            <p className=" leading-relaxed text-white text-[15px] ">
              In its most recent initiative, REDLUBE is introducing a wide range
              of lubrication solutions that improve vehicle performance,
              longevity and reliability.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="  space-y-10  ">
            {/* Top Image */}
            <div className="flex relative justify-end">
             

              <img
                src="/REDLUBE_PREMIUM_HD_20W-50-removebg-preview.png" // put your image in public folder
                alt="pattern"
                className="object-contain mr-20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyRedLube;
