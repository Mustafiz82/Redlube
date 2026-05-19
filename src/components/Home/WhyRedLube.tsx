import React from "react";

const WhyRedLube = () => {
  return (
    <div>
      <section className=" relative bg-[#0D0101]  px-6 md:px-10 xl:px-24">

        <div className="absolute w-[200px] h-[400px] lg:w-[800px] top-0 lg:h-[700px] left-0 gradient"></div>
  
           
        <div className="max-w-7xl  relative py-20 lg:  mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="xl:pl-20 space-y-6 items-start ">
            {/* Vertical Line */}
            <div className="flex items-center gap-5">
              <div className="w-[5px] h-[30px] lg:h-[40px] bg-primary mt-2"></div>

              {/* Heading */}
              <h2 className="font-paladin text-white font-extralight text-xl 2xl:text-3xl lg:text-[32px] xl:text-[40px]  text-primary leading-tight">
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
                src="/banner/3ltr-bottle-square.webp" // put your image in public folder
                alt="pattern"
                className="object-contain mr-10 w-[80%] lg:mr-20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyRedLube;
