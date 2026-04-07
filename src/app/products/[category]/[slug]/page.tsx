 // Adjust this path to your component

import ProductDetail from "@/components/Product/ProductDetails";
import { productData } from "@/Data/product";

// 1. Define the type for the params (it's now a Promise)
interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// 2. Make the function 'async'
export default async function Page({ params }: PageProps) {
  
  // 3. Await the params before using them
  const resolvedParams = await params;
  const { slug, category } = resolvedParams;

  // 4. Find the product using the unwrapped slug
  const product = productData.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen font-orbitron">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  // 5. Pass the found product to your Design component
  return <ProductDetail product={product} />;
}