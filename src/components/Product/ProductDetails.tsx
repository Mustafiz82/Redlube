import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaFileDownload,
  FaCheckCircle,
  FaWarehouse,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { Product } from "@/Data/product";
// Assuming you import your types

interface ProductPageProps {
  product: Product;
}

const ProductDetail: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="bg-black pt-28 text-white">
      <Head>
        <title>{product.productName} | Red Lube</title>
      </Head>

      <div className="max-w-7xl py-12 px-4 md:px-6 w-full mx-auto">
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 xl:gap-20 items-start">
          <div className="w-full md:h-[400px] relative lg:h-auto lg:w-2/5 bg-white/[0.03] border order order border-white/10 hover:border-primary/50 transition-colors duration-500 hover:border-primary/50 transition-colors duration-500 backdrop-blur-md p-8 lg:p-16 rounded-3xl  flex justify-center border border-black">
            {/* Using a placeholder - in dynamic version, slug matches image name */}
            <Image
              src={`/products/${product.slug}.png`}
              alt={product.productName}
              width={500}
              height={600}
              className="object-contain z-[999] hover:scale-105 duration-500"
              priority
            />
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
          </div>

          <div className="w-full lg:w-3/5">
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase bg-primary text-white px-3 py-1 rounded">
                {product.category}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase bg-neutral-700 text-white/70 px-3 py-1 rounded">
                {product.subCategory}
              </span>
            </div>

            <h1 className="text-2xl md:text-[40px] lg:text-[32px] font-orbitron font-bold text-white/90 leading-tight">
              {product.productName}
            </h1>

            <p className="text-md md:text-lg font-semibold text-primary mt-2 font-orbitron italic">
              {product.tagline}
            </p>

            <p className="text-base mt-6 text-white/80 leading-relaxed">
              {product.productDescription}
            </p>

            {/* Quick Specs Highlight */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-neutral-300 uppercase font-bold">
                  Viscosity
                </p>
                <p className="text-xl font-orbitron font-semibold">
                  {product.specification.saeViscosityGrade}
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-neutral-300 uppercase font-bold">
                  Standard
                </p>
                <p className="text-xl font-orbitron font-semibold">
                  {product.specification.performanceStandard}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              {/* <button className="px-8 py-4 bg-primary flex gap-3 items-center text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                <FaFileDownload size={20} /> Download TDS
              </button> */}
              {product.specification.specialTechnology && (
                <div className="px-6 py-4 bg-neutral-900 text-white  text-sm flex items-center rounded-xl">
                  {product.specification.specialTechnology} ENABLED
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- DETAILED INFO SECTION --- */}
        <div className="mt-20 grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Key Advantages (Left 2 Columns) */}
          <div className="xl:col-span-2 space-y-8">
            {/* Spec Table */}
            <div className="bg-neutral-900 lg:hidden text-white rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 bg-primary">
                <h3 className="text-xl font-bold font-orbitron uppercase tracking-wider">
                  Technical Specs
                </h3>
              </div>
              <div className="p-6">
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Type</dt>
                    <dd className="font-bold">
                      {product.specification.productType}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Viscosity Grade</dt>
                    <dd className="font-bold">
                      {product.specification.saeViscosityGrade}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Performance</dt>
                    <dd className="font-bold">
                      {product.specification.performanceStandard}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Packaging</dt>
                    <dd className="font-bold">
                      {product.specification.availableVolume}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="bg-white/[0.03] border order border-white/10 hover:border-primary/50 transition-colors duration-500 backdrop-blur-md rounded-3xl shadow-sm  px-4 p-8 md:p-10">
              <h3 className="text-3xl font-bold font-orbitron text-primary mb-8 flex items-center gap-3">
                <FaShieldAlt /> Key Advantages
              </h3>
              <div className="grid gap-6">
                {product.advantages.map((adv, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1">
                      <FaCheckCircle
                        className="text-primary group-hover:scale-110 duration-200"
                        size={22}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white/90">
                        {adv.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed mt-1">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Section */}
            <div className="bg-white/[0.03] border order border-white/10 hover:border-primary/50 transition-colors duration-500 backdrop-blur-md rounded-3xl px-4 p-8 md:p-10">
              <h3 className="text-3xl font-bold font-orbitron text-white/90 mb-8 flex items-center gap-3">
                <FaTools className="text-primary" /> Recommended Application
              </h3>
              <ul className="space-y-4">
                {product.application.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-white/70"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications & Storage (Right 1 Column) */}
          <div className="space-y-8 flex flex-col lg:flex-row gap-5  xl:flex-col">
            {/* Spec Table */}
            <div className="bg-neutral-900 flex-1 hidden lg:block text-white rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 bg-primary">
                <h3 className="text-xl font-bold font-orbitron uppercase tracking-wider">
                  Technical Specs
                </h3>
              </div>
              <div className="p-6">
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Type</dt>
                    <dd className="font-bold">
                      {product.specification.productType}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Viscosity Grade</dt>
                    <dd className="font-bold">
                      {product.specification.saeViscosityGrade}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Performance</dt>
                    <dd className="font-bold">
                      {product.specification.performanceStandard}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Packaging</dt>
                    <dd className="font-bold">
                      {product.specification.availableVolume}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Storage and Handling */}
            <div className="bg-white/[0.03] flex-1 border order border-white/10 hover:border-primary/50 transition-colors duration-500 backdrop-blur-md rounded-3xl shadow-sm p-8">
              <h3 className="text-2xl font-bold font-orbitron text-white/90 mb-6 flex items-center gap-3">
                <FaWarehouse className="text-primary" size={24} /> Handling
              </h3>
              <div className="space-y-6 text-sm">
                <div>
                  <h5 className="font-bold text-primary uppercase text-xs mb-1">
                    Environment
                  </h5>
                  <p className="text-white/70">
                    {product.storageAndHandling.environment}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-primary uppercase text-xs mb-1">
                    Temperature
                  </h5>
                  <p className="text-white/70">
                    {product.storageAndHandling.temperature}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-primary uppercase text-xs mb-1">
                    Sealing
                  </h5>
                  <p className="text-white/70">
                    {product.storageAndHandling.sealing}
                  </p>
                </div>
                <div className="p-4 bg-red-950/20 rounded-xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                  <h5 className="font-bold text-red-500 uppercase text-xs mb-2 tracking-wider">
                    Safety Notice
                  </h5>
                  <p className="text-red-100/90 font-medium leading-relaxed">
                    {product.storageAndHandling.safety}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="bg-linear-to-t from-primary/70  to-black h-[300px] w-full">

      </div> */}
    </div>
  );
};

export default ProductDetail;
