import React from "react";

const page = () => {
  return (
    <div className="bg-black text-white">
      <img
        className=" w-screen object-cover object-center"
        src="/banner/industrial-banner.jpeg"
        alt="Banner"
      />

           <div className="py-20 bg-linear-to-t from-primary via-black to-black">
        <h2 className="text-3xl lg:text-4xl uppercase font-orbitron font-black text-center">
          I ndustrial Lubricants
        </h2>
        <p className="max-w-6xl text-white/70 my-4 mx-auto text-center px-4">
          A complete range of high performance industrial lubricants engineered
          to deliver smooth rides, lasting engine protection, and superior fuel
          efficiency. Powered by advanced formulations like Ester Fluid
          Technology, our products are designed to meet the demands of modern
          engines across every terrain and temperature.
        </p>
      </div>
    </div>
  );
};

export default page;
