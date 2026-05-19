"use client";
import { Product } from "@/Data/product";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    // <Link href={`/products/${item.category}/${item?.slug}`} className="flex items-center justify-center ">
    //   {/* Added 'group' class to trigger child animations and transition effects */}
    //   <div className="group w-[320px]  rounded-2xl bg-white shadow-xl p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
    //     {/* Product Image Container */}
    //     <div className="flex justify-center my-6">
    //       <div className="w-40 h-40 bg-gray-100 rounded-full relative ">
    //         <Image
    //           src={("/products/" + item?.slug+".png")}
    //           alt="Redlube Octane Booster"
    //           fill
    //           className="object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
    //         />
    //       </div>
    //     </div>

    //     {/* Title - Added transition and group-hover color change */}
    //     <h2 className="text-xl font-orbitron font-bold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-primary">
    //     {item.productName.split("(")[0]}
    //     </h2>

    //     {/* Button - Added scale and shadow glow on hover */}
    //     <button className="mt-6 cursor-pointer w-full text-sm bg-primary text-white font-semibold py-3 rounded-full transition-all duration-300  hover:shadow-lg hover:shadow-primary/30 active:scale-95">
    //       LEARN MORE
    //     </button>
    //   </div>
    // </Link>

  <Link
      href={`/products/${item.category}/${item?.slug}`}
      className="flex  border border-[#bd202da8] rounded-xl  items-center justify-center"
    >
      {/* Updated bg: white -> white (light), neutral-900 (dark) */}
      <div className="group w-full sm:w-[320px] rounded-2xl bg-white dark:bg-neutral-900 shadow-xl dark:shadow-black/20 p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-transparent dark:border-neutral-800">
        {/* Product Image Container */}
        <div className="flex justify-center my-6">
          {/* Updated bg: gray-100 -> neutral-800 */}
          <div className="w-40 h-40 bg-gray-100 dark:bg-neutral-800 rounded-full relative transition-colors duration-300">
            <Image
              src={"/products/" + item?.slug + ".png"}
              alt={item.productName}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
        </div>

        {/* Title - Updated text-gray-900 -> text-gray-900 (light), white (dark) */}
        <h2 className="text-lg  font-orbitron font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300 group-hover:text-primary">
          {item.productName.split("(")[0]}
        </h2>

        {/* Button - Colors remain the same for the primary 'pop', but text-white is explicit */}
        <button className="mt-6 cursor-pointer w-full text-sm bg-primary text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-95">
          LEARN MORE
        </button>
      </div>
    </Link>
  );
}
