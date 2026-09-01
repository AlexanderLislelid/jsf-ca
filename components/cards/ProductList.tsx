import ProductCard, { Product } from "@/components/cards/ProductCard";

interface ApiResponse {
  data: Product[];
}

async function ProductList() {
  const response = await fetch("https://v2.api.noroff.dev/online-shop/");

  if (!response.ok) {
    console.error("Failed to fetch products", response.statusText);
    return <p>Failed to load products</p>;
  }

  const result: ApiResponse = await response.json();
  const products = result.data;

  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
