import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Industrial Lubricants | High-Performance Solutions",
  description: "A complete range of high-performance industrial lubricants engineered by Red Lube to deliver lasting engine protection, smooth operations, and superior fuel efficiency.",
  alternates: {
    canonical: "/industrial-lubricants",
  },
  openGraph: {
    title: "Industrial Lubricants | Red Lube",
    description: "Discover our advanced formulation industrial lubricants built to meet modern engine demands across every terrain and temperature.",
    url: "https://redlube.net/industrial-lubricants",
    images: [
      {
        url: "/banner/industrial-banner.jpeg", // Using the page banner as the social sharing image
        width: 1200,
        height: 630,
        alt: "Red Lube Industrial Lubricants",
      }
    ],
  }
};

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
          efficiency. Powered by advanced formulations Technology, our products are designed to meet the demands of modern
          engines across every terrain and temperature.
        </p>
       </div>
      </div>
    </div>
  );
};

export default page;
