import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white relative  px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mt-16 lg:mt-28 mx-auto grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="flex md:pl-20 items-start gap-6">
          {/* Vertical Line */}
          <div className="w-[6px] h-[80px] lg:h-[120px] bg-primary mt-2"></div>

          {/* Heading */}
          <h2 className="font-paladin font-extralight text-4xl md:text-5xl  text-primary leading-tight">
            ABOUT <br /> US
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className=" space-y-5 lg:space-y-10  relative">
          {/* Top Image */}
          {/* <div className="flex absolute  -top-16  -right-20 justify-end">
            <img
              src="/shapes/red-star.png" // put your image in public folder
              alt="pattern"
              className=" object-contain"
            />
          </div> */}

          {/* Description */}
          <div className=" relative  z-10 ">
            <p className="text-gray-700 bg-white leading-relaxed shadow-custom p-0 lg:p-10 text-[15px] ">
              REDLUBE develops and implements next-generation technologies to
              safely and ethically meet the world's expanding demand for energy
              and high-quality chemical products. RED LUBE is one of the leading
              energy providers and chemical producers in India. With the vision
              of being a pioneer in providing safe, innovative and efficient
              energy to consumers in an affordable price range, REDLUBE is
              constantly innovating and evolving at the pace of the market.
            </p>

            {/* Commitment */}
            <div className="lg:p-10 bg-white shadow-custom  mt-8 ">
              <h3 className="font-orbitron text-xl font-bold mb-4">
                OUR COMMITMENT
              </h3>

              <p className="text-gray-700 leading-relaxed text-[15px] ">
                To improve global prosperity, affordable and sustainable energy
                alternatives are needed. Our mission is to provide the world
                with better and more affordable energy and we are constantly
                striving to do so.
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
