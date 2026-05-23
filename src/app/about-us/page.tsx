import AboutSection from '@/components/Home/AboutSection';
import WhyRedLube from '@/components/Home/WhyRedLube';
import React from 'react';
import type { Metadata } from 'next';

// About page static SEO metadata
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about RED LUBE, a leading high-performance lubricants brand. Discover our commitment to world-class engine protection, synthetic gear oil, and advanced lubrication technology designed to extend machinery life.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Red Lube",
    description: "Discover our vision, commitment to quality, and why professionals across the globe choose RED LUBE to protect their engines and industrial machinery.",
    url: "https://redlube.net/about",
  }
};

const page = () => {
    return (
        <div className=' xl:mt-28'>
            <AboutSection/>

            {/* <WhyRedLube/> */}
        </div>
    );
};

export default page;