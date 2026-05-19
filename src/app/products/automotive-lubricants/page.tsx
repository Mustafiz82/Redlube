"use client";
import { categories } from "@/Data/category";
import { productData } from "@/Data/product";
import ProductCard from "@/components/Product/ProductCard";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [products, setProducts] = useState(productData || []);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (selectedCat === "ALL") {
      return setProducts(productData);
    }
    const filteredProducts = productData.filter(
      (item) => item.subCategory === selectedCat,
    );
    setProducts(filteredProducts);
  }, [selectedCat]);

  return (
    <div className="bg-black   text-white">
      <img
        className=" w-screen object-cover object-center"
        src="/banner/banner-image-all.webp"
        alt="Banner"
      />

      <div className="bg-linear-to-br from-primary via-black to-black">
        <div className="py-20 ">
          <h2 className="text-3xl lg:text-4xl uppercase font-orbitron font-black text-center">
            AUTOMOTIVE Lubricants
          </h2>
          <p className="max-w-6xl text-white/70 my-4 mx-auto text-center text-[15px] px-4">
            A complete range of high performance automotive lubricants
            engineered to deliver smooth rides, lasting engine protection, and
            superior fuel efficiency. Powered by advanced formulations like
            Ester Fluid Technology, our products are designed to meet the
            demands of modern engines across every terrain and temperature.
          </p>
        </div>

        {/* CATEGORIES WRAPPER */}
        <div
          className={`flex  w-full overflow-x-auto flex-wrap md:w-[80%] lg:w-full justify-center gap-4 lg:gap-6 items-center px-4 mb-20 lg:mb-5 xl:mb-20 max-w-7xl mx-auto transition-all duration-300 ${
            isSticky ? "sticky top-0 z-999 py-4  rounded-b-xl" : ""
          }`}
        >
          {categories?.map((cat) => {
            const isActive = selectedCat === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat?.id)}
                className={`cursor-pointer ${
                  isActive ? "bg-primary" : "bg-white"
                } transition-colors duration-300 w-28 h-32 sm:w-46 sm:h-44  lg:w-40 xl:w-46 lg:h-40 xl:h-44  p-4 flex flex-col justify-center items-center rounded-xl shadow-md hover:shadow-lg`}
              >
                <div className="relative h-12 lg:h-16 w-full flex items-center justify-center mb-4">
                  {/* Default Image: Fades OUT when active */}
                  <img
                    className={`${
                      cat.width
                    } absolute  lg:inset-0 m-auto transition-opacity duration-300 ease-in-out object-contain ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                    src={cat.icon}
                    alt={cat.label}
                  />

                  {/* Active Image: Fades IN when active */}
                  <img
                    className={`${
                      cat.width
                    } absolute lg:inset-0 m-auto transition-opacity duration-300 ease-in-out object-contain ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    src={cat.iconActive}
                    alt={cat.label}
                  />
                </div>

                <span
                  className={`text-xs transition-colors duration-300 mt-2  sm:text-sm font-bold text-center leading-tight tracking-wider uppercase ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div
        ref={sectionRef}
        className="relative bg-linear-to-t  from-primary/70 via-black to-black"
      >
        {/* PRODUCTS WRAPPER */}
        <div className="flex max-w-7xl  mx-auto flex-wrap justify-center z-[50] relative px-10 py-16 gap-5 ">
          {products?.map((item, index) => (
            <div
              key={index}
              className="w-full  md:w-[calc(33.333%-1.25rem)] xl:w-[calc(25%-1.25rem)]"
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
};

export default Page;
