import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaFileDownload, FaCheckCircle, FaWarehouse, FaShieldAlt, FaTools } from "react-icons/fa";
import { Product } from "@/Data/product";
// Assuming you import your types

interface ProductPageProps {
  product: Product;
}

const ProductDetail: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.productName} | Red Lube</title>
      </Head>

      <div className="max-w-7xl py-12 px-4 md:px-6 w-full mx-auto">
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full md:h-[400px] lg:h-auto lg:w-2/5 bg-gray-100 p-8 lg:p-16 rounded-3xl  flex justify-center border border-neutral-200">
            {/* Using a placeholder - in dynamic version, slug matches image name */}
            <Image
              src={`/products/${product.slug}.png`} 
              alt={product.productName}
              width={500}
              height={600}
              className="object-contain hover:scale-105 duration-500"
              priority
            />
          </div>

          <div className="w-full lg:w-3/5">
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase bg-primary text-white px-3 py-1 rounded">
                {product.category}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase bg-neutral-200 text-neutral-700 px-3 py-1 rounded">
                {product.subCategory}
              </span>
            </div>

            <h1 className="text-4xl md:text-[40px] font-orbitron font-bold text-neutral-900 leading-tight">
              {product.productName}
            </h1>
            
            <p className="text-lg font-semibold text-primary mt-2 font-orbitron italic">
              {product.tagline}
            </p>

            <p className="text-base mt-6 text-black/70 leading-relaxed">
              {product.productDescription}
            </p>

            {/* Quick Specs Highlight */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-neutral-500 uppercase font-bold">Viscosity</p>
                <p className="text-xl font-orbitron font-semibold">{product.specification.saeViscosityGrade}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-neutral-500 uppercase font-bold">Standard</p>
                <p className="text-xl font-orbitron font-semibold">{product.specification.performanceStandard}</p>
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
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Key Advantages (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-8">

              {/* Spec Table */}
            <div className="bg-neutral-900 lg:hidden text-white rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 bg-primary">
                <h3 className="text-xl font-bold font-orbitron uppercase tracking-wider">Technical Specs</h3>
              </div>
              <div className="p-6">
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Type</dt>
                    <dd className="font-bold">{product.specification.productType}</dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Viscosity Grade</dt>
                    <dd className="font-bold">{product.specification.saeViscosityGrade}</dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Performance</dt>
                    <dd className="font-bold">{product.specification.performanceStandard}</dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Packaging</dt>
                    <dd className="font-bold">{product.specification.availableVolume}</dd>
                  </div>
                </dl>
              </div>
            </div>


            <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 px-4 p-8 md:p-10">
              <h3 className="text-3xl font-bold font-orbitron text-primary mb-8 flex items-center gap-3">
                <FaShieldAlt /> Key Advantages
              </h3>
              <div className="grid gap-6">
                {product.advantages.map((adv, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1">
                      <FaCheckCircle className="text-primary group-hover:scale-110 duration-200" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-neutral-900">{adv.title}</h4>
                      <p className="text-neutral-600 leading-relaxed mt-1">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Section */}
            <div className="bg-neutral-50 rounded-3xl px-4 p-8 md:p-10 border border-neutral-200">
              <h3 className="text-3xl font-bold font-orbitron text-neutral-900 mb-8 flex items-center gap-3">
                <FaTools className="text-primary" /> Recommended Application
              </h3>
              <ul className="space-y-4">
                {product.application.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg text-neutral-700">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications & Storage (Right 1 Column) */}
          <div className="space-y-8">
            {/* Spec Table */}
            <div className="bg-neutral-900 hidden lg:block text-white rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 bg-primary">
                <h3 className="text-xl font-bold font-orbitron uppercase tracking-wider">Technical Specs</h3>
              </div>
              <div className="p-6">
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Type</dt>
                    <dd className="font-bold">{product.specification.productType}</dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Viscosity Grade</dt>
                    <dd className="font-bold">{product.specification.saeViscosityGrade}</dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Performance</dt>
                    <dd className="font-bold">{product.specification.performanceStandard}</dd>
                  </div>
                  <div className="flex justify-between border-b border-neutral-700 pb-2">
                    <dt className="text-neutral-400">Packaging</dt>
                    <dd className="font-bold">{product.specification.availableVolume}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Storage and Handling */}
            <div className="bg-white rounded-3xl shadow-sm border border-neutral-200 p-8">
              <h3 className="text-2xl font-bold font-orbitron text-neutral-900 mb-6 flex items-center gap-3">
                <FaWarehouse className="text-primary" size={24} /> Handling
              </h3>
              <div className="space-y-6 text-sm">
                <div>
                  <h5 className="font-bold text-primary uppercase text-xs mb-1">Environment</h5>
                  <p className="text-neutral-600">{product.storageAndHandling.environment}</p>
                </div>
                <div>
                  <h5 className="font-bold text-primary uppercase text-xs mb-1">Temperature</h5>
                  <p className="text-neutral-600">{product.storageAndHandling.temperature}</p>
                </div>
                <div>
                  <h5 className="font-bold text-primary uppercase text-xs mb-1">Sealing</h5>
                  <p className="text-neutral-600">{product.storageAndHandling.sealing}</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                  <h5 className="font-bold text-red-700 uppercase text-xs mb-1">Safety Notice</h5>
                  <p className="text-red-900 font-medium">{product.storageAndHandling.safety}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetail;