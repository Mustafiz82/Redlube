import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

const page: NextPage = () => {
  const advantages = [
    "Better engine protection for essential engine components.",
    "Outstanding cleaning, even at prolonged drain interval times.",
    "Superior engine protection.",
    "Excellent engine performance and decreased deposits.",
    "Effectively neutralizes the corrosive combustion acids while safeguarding the engine components.",
    "Its highly efficient and durable synthetic formulation minimizes friction and improves engine performance.",
    "Prolonged Drain Period.",
  ];

  const approvals = ["API CI-4 Plus", "API CI-4 Plus/CI-4/ CH-4"];

  const techSpecs = [
    { property: "Appearance", method: "Visual", value: "Clear & Bright" },
    { property: "Colour ASTM", method: "D1500", value: "L 2.5" },
    { property: "Density @ 15 C, g/ml, ASTM", method: "D1298", value: "0.866" },
    {
      property: "Kinematic Viscosity @ 40ºC, cSt",
      method: "D445",
      value: "69.00",
    },
    {
      property: "Kinematic Viscosity @ 100ºC, cSt",
      method: "D445",
      value: "10.5",
    },
    { property: "Viscosity Index", method: "D2270", value: "140" },
    { property: "Flash Point, ºC", method: "D92", value: "230" },
    { property: "Pour Point, ºC", method: "D97", value: "-33" },
    { property: "Total Base Number, mg KOH/gm", method: "D2896", value: "5.8" },
    { property: "CCS Viscosity @ -25ºC, cP", method: "D5293", value: "6163" },
  ];

  return (
    <>
      <Head>
        <title>
          REDLUBE PREMIUM HD 15W-40 - Product Page | Heavy Duty Diesel Engine
          Oil
        </title>
      </Head>

      <div className="max-w-7xl py-20  w-full mx-auto">
        <div className="flex   gap-20 ">
          <Image
            src={"/product-image.png"}
            alt="product"
            width={500}
            height={500}
            className="w-100  bg-gray-100 p-16"
          />

          <div>
            <div className="text-lg bg-primary/20 p-1 px-5 mt-3 rounded-full w-fit">
              Automative Lubricants / Car Engine Oil
            </div>

            <h2 className="text-5xl mt-5 font-orbitron font-semibold">
              Redlube Octane Booster
            </h2>

            <p className="text-lg  mt-5 text-black/70">
              The high-quality, multigrade engine oil REDLUBE PREMIUM HD 15W-40
              is perfect for diesel engines running constantly in difficult
              circumstances. It is appropriate for turbocharged and
              direct-injected engines in environments with high levels of engine
              stress.
            </p>

            <p className="text-lg  mt-5 text-black/70">
              REDLUBE PREMIUM 4T 20W-40 satisfies or surpasses the following
              performance criteria:
            </p>

            <ul className="font-semibold mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-redlube flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-800">API SL/SJ/SG</span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-redlube flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-800">JASO MA2</span>
              </li>
            </ul>

            <button className="px-6 py-3 mt-5 bg-primary flex gap-2 items-center text-white rounded-full hover:scale-105 duration-300 cursor-pointer">
              <FaFileDownload /> Download Data Sheet
            </button>
          </div>
        </div>

        <h3 className="text-3xl font-bold font-orbitron text-redlube text-center my-20  gap-3">
          Key Advantages & Technial Specefication
        </h3>

        <div className="flex  mt-20 gap-5">
          <div className="bg-white flex-1  rounded-2xl shadow-md p-8 md:p-10 border-t-4 border-primary border-redlube space-y-6">
            <h3 className="text-3xl font-bold font-orbitron text-redlube flex items-center gap-3">
              Key Advantages
            </h3>
            <ul className="space-y-1  pl-5 text-gray-700 text-lg leading-relaxed pl-1">
              {advantages.map((advantage, index) => (
                <li key={index} className=" list-disc pl-2 items-start gap-3">
                  {advantage}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden  flex-1 bg-white rounded-2xl shadow-md border border-neutral-200">
            <table className="w-full text-sm text-left table-auto">
              <thead className="bg-primary text-xs text-white uppercase tracking-wider text-center">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-semibold border-r border-red-950/20"
                  >
                    PROPERTIES
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold border-r border-red-950/20"
                  >
                    ASTM TEST METHOD
                  </th>

                  <th scope="col" className="px-6 py-4 font-semibold">
                    TYPICAL VALUES
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                {techSpecs.map((row, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <td className="px-6 py-3 font-medium text-neutral-900 border-r border-neutral-200">
                      {row.property}
                    </td>

                    <td className="px-6 py-3 text-center border-r border-neutral-200">
                      {row.method}
                    </td>

                    <td className="px-6 py-3 text-center font-medium">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
