import { productData } from "@/Data/product";
import ProductCard from "@/components/Product/ProductCard";
import React from "react";

const Product = () => {
  return (
    // <div className="w-full relative overflow-hidden">
    //   <div className="max-w-7xl px-5 lg:px-0 lg:pl-20  py-20 mx-auto">
    //     <div className="absolute hidden lg:block  -right-24">
    //       <img src="/shapes/red-shade.png" alt="" />
    //     </div>

    //     <div className=" -scale-100 hidden lg:block absolute -left-24 -scale-x-125 ">
    //       <img src="/shapes/red-shade.png" alt="" />
    //     </div>

    //     <div className="flex items-start gap-6">
    //       {/* Vertical Line */}
    //       <div className="w-[6px] h-[30px] lg:h-[40px] bg-primary mt-2"></div>

    //       {/* Heading */}
    //       <h2 className="font-paladin  font-extralight text-3xl lg:text-[40px]  text-primary leading-tight">
    //         Our Product
    //       </h2>
    //     </div>
    //     <p className="mt-5">
    //       Our wide range of lubrication solutions that improve vehicle
    //       performance, longevity and reliability.
    //     </p>

    //     <div className="grid relative py-16 gap-5 grid-cols-1 lg:grid-cols-4">
    //       {productData.map((item, index) => (
    //         <ProductCard key={index} item={item} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="w-full relative bg-linear-to-bl from-primary via-black to-black   relative overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-7xl px-5 lg:px-0 lg:pl-20 py-20 mx-auto">
        {/* ... existing shapes ... */}

        <div className="flex items-start gap-6">
          <div className="w-[6px] h-[30px] lg:h-[40px] bg-primary mt-2"></div>
          {/* Added dark:text-white */}
          <h2 className="font-paladin font-extralight text-3xl lg:text-[40px] text-primary leading-tight">
            Our Product
          </h2>
        </div>
        {/* Added dark:text-neutral-400 */}
        <p className="mt-5 text-neutral-600 dark:text-neutral-400">
          Our wide range of lubrication solutions that improve vehicle
          performance, longevity and reliability.
        </p>

        <div className="grid z-[50] relative py-16 gap-5 grid-cols-1 lg:grid-cols-4">
          {productData.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>


      <div className="bg-linear-to-tr from-primary via-black to-black w-120 h-120 absolute bottom-0 left-0  "></div>
    </div>
  );
};

export default Product;
