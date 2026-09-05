"use client";

import ProductCard from "@/components/cards/ProductCard";
import { useState } from "react";
import { Product } from "@/types/product";

export default function ProductSearch({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search for products"
        className="px-4 py-2 rounded-md border my-4 bg-white"
      />
      {filteredProducts.length === 0 ? (
        <p>No available products named {search}</p>
      ) : (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
