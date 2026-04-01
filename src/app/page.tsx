import AboutSection from "@/components/Home/AboutSection";
import Banner from "@/components/Home/Banner";
import Product from "@/components/Home/Product";
import WhyRedLube from "@/components/Home/WhyRedLube";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutSection />
      <WhyRedLube />
      <Product />
    </div>
  );
}
