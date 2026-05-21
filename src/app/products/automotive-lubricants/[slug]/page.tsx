import type { Metadata } from "next";
// Adjust this path to your component
import ProductDetail from "@/components/Product/ProductDetails";
import { productData } from "@/Data/product";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// 1. Generate static paths at build time
export async function generateStaticParams() {
  return productData.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

// 2. Generate dynamic metadata for search engines on the server
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  // Cuts off description nicely if it's too long for search card previews
  const shortDescription = product.productDescription.length > 155 
    ? `${product.productDescription.substring(0, 155)}...` 
    : product.productDescription;

  return {
    title: product.productName.split("(")[0].trim(), // Inherits template: "ProductName | Red Lube"
    description: shortDescription,
    alternates: {
      canonical: `/products/${product.category}/${product.slug}`,
    },
    openGraph: {
      title: `${product.productName} | Premium Lubricants`,
      description: shortDescription,
      url: `https://redlube.net/products/${product.category}/${product.slug}`,
      images: [
        {
          url: `/products/${product.slug}.png`,
          width: 500,
          height: 600,
          alt: product.productName,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug, category } = resolvedParams;

  const product = productData.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen font-orbitron">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}