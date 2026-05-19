import { productData } from "@/Data/product";
import ProductCard from "@/components/Product/ProductCard";
import React from "react";

const Product = () => {
  return (
    <div className="w-full relative bg-linear-to-tl from-primary via-black to-black    overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-7xl px-5 lg:px-0 lg:pl-20 py-20 mx-auto">
        <div className="flex items-start gap-6">
          <div className="w-[6px] h-[30px] lg:h-[40px] bg-primary mt-2"></div>

          <h2 className="font-paladin font-extralight text-3xl lg:text-[40px] text-primary leading-tight">
            Our Product
          </h2>
        </div>

        <p className="mt-5 text-neutral-600 dark:text-neutral-400">
          Our wide range of lubrication solutions that improve vehicle
          performance, longevity and reliability.
        </p>
        <div className="flex flex-wrap justify-center z-[50] relative py-16 gap-5">
          {productData.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.25rem)]"
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-linear-to-tr from-primary via-black to-black w-120 h-120 absolute bottom-0 left-0  "></div> */}
    </div>
  );
};

export default Product;
