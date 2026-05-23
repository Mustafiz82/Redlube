import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Nav from "@/shared/Nav";
import Footer from "@/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const paladinsstraight = localFont({
  src: "../../public/fonts/paladinsstraight.ttf",
  display: "swap",
  variable: "--font-paladin",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redlube.net"),
  title: {
    default: "Red Lube | Premium Automotive & Industrial Lubricants",
    template: "%s | Red Lube",
  },
  description:
    "Explore Red Lube's wide range of high-performance engine oils, industrial lubricants, and automotive fluid solutions engineered to improve vehicle performance, longevity, and reliability.",
  keywords: [
    "Red Lube",
    "RedLube lubricants",
    "automotive lubricants",
    "industrial lubricants",
    "motorcycle engine oil 4T",
    "diesel engine oil 15W-40",
    "CNG engine oil 20W-50",
    "passenger car motor oil",
    "lubrication solutions",
    "high performance engine oil",
  ],
  authors: [{ name: "Red Lube" }],
  creator: "Red Lube",
  publisher: "Red Lube",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Red Lube | Premium Automotive & Industrial Lubricants",
    description:
      "Explore Red Lube's wide range of high-performance engine oils, industrial lubricants, and automotive fluid solutions designed for maximum engine protection.",
    url: "https://redlube.net",
    siteName: "Red Lube",
    images: [
      {
        url: "/banner/banner-image-all.webp",
        width: 1200,
        height: 630,
        alt: "Red Lube Lubrication Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lube | Premium Automotive & Industrial Lubricants",
    description:
      "Explore Red Lube's wide range of high-performance engine oils and automotive fluid solutions.",
    images: ["/banner/banner-image-all.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Red Lube",
    "alternateName": "RedLube",
    "url": "https://redlube.net",//
    "logo": "https://redlube.net/logos/logo-white.webp", //
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "", // Add if you have one
      "contactType": "customer service",
      "email": "info@redlube.net",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/redlubebangladesh", // Add your social links
      "https://www.instagram.com/redlubeofficial"
    ]
  };


  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${paladinsstraight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black   flex flex-col">
        <Nav />
        <div className="mt-17.5 lg:mt-26 xl:mt-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
