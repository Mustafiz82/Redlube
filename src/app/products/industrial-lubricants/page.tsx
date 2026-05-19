import React from "react";

const page = () => {
  return (
    <div className="bg-black  text-white">
      <img
        className=" w-screen object-cover object-center"
        src="/banner/industrial-banner.jpeg"
        alt="Banner"
      />

           <div className="pt-20 ">
        <h2 className="text-3xl lg:text-4xl uppercase font-orbitron font-black text-center">
          Industrial Lubricants
        </h2>
       <div className="bg-linear-to-t from-[#ec1c00ab]  to-black  pb-20">
         <p className="max-w-6xl  text-white/80 my-4 mx-auto text-center px-4">
          A complete range of high performance industrial lubricants engineered
          to deliver smooth rides, lasting engine protection, and superior fuel
          efficiency. Powered by advanced formulations like Ester Fluid
          Technology, our products are designed to meet the demands of modern
          engines across every terrain and temperature.
        </p>
       </div>
      </div>
    </div>
  );
};

export default page;
