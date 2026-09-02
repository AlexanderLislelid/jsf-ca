import ProductCard from "@/components/cards/ProductCard";
import ProductSearch from "@/components/ProductSearch";
import { Product } from "@/types/product";

interface ApiResponse {
  data: Product[];
}

async function Home() {
  const response = await fetch("https://v2.api.noroff.dev/online-shop/");

  if (!response.ok) {
    console.error("Failed to fetch products", response.statusText);
    return <p>Failed to load products</p>;
  }

  const result: ApiResponse = await response.json();
  const products = result.data;

  return (
    <div className="p-6 mx-auto">
      <ProductSearch products={products} />
    </div>
  );
}

export default Home;
