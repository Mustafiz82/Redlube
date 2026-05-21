import AutomotiveClient from "@/components/automative/AutomotiveClient";
import type { Metadata } from "next";

// Server-side SEO Metadata
export const metadata: Metadata = {
  title: "Automotive Lubricants | High-Performance Engine Oils",
  description: "Explore Red Lube's premium range of automotive lubricants. Engineered with advanced Easy Spread Technology (EST) to deliver wear protection, fuel efficiency, and performance for cars, bikes, and heavy diesel engines.",
  alternates: {
    canonical: "/products/automotive-lubricants",
  },
  openGraph: {
    title: "Automotive Lubricants | Red Lube",
    description: "High-performance motor oils, passenger car oils, 4T motorcycle fluids, and diesel engine protection solutions.",
    url: "https://redlube.net/products/automotive-lubricants",
    images: [
      {
        url: "/banner/banner-image-all.webp",
        width: 1200,
        height: 630,
        alt: "Red Lube Automotive Lubricants Range",
      }
    ],
  }
};

export default function Page() {
  return <AutomotiveClient />;
}