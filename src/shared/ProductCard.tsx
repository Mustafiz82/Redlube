import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex items-center justify-center ">
      {/* Added 'group' class to trigger child animations and transition effects */}
      <div className="group w-[320px] rounded-2xl bg-white shadow-xl p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
        {/* Product Image Container */}
        <div className="flex justify-center my-6">
          <div className="w-40 h-40 bg-gray-100 rounded-full relative ">
            <Image
              src="/product-image.png"
              alt="Redlube Octane Booster"
              fill
              className="object-contain  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
            />
          </div>
        </div>

        {/* Title - Added transition and group-hover color change */}
        <h2 className="text-xl font-orbitron font-bold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-primary">
          Redlube Octane Booster
        </h2>

        {/* Button - Added scale and shadow glow on hover */}
        <button className="mt-6 cursor-pointer w-full text-sm bg-primary text-white font-semibold py-3 rounded-full transition-all duration-300  hover:shadow-lg hover:shadow-primary/30 active:scale-95">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
