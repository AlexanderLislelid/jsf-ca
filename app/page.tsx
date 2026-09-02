import ProductCard from "@/components/cards/ProductCard";
import ProductSearch from "@/components/Search";
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
      <ProductSearch />
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
