"use client";
import useCartStore from "@/stores/cartStore";
import { productToCartItem } from "@/types/cartItem";
import { Product } from "@/types/product";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const [justAdded, setJustAdded] = useState(false);

  const handleClick = () => {
    addItem(productToCartItem(product));
    setJustAdded(true);

    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  return (
    <button
      className="bg-gray-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-950 transition-colors"
      onClick={handleClick}
    >
      {justAdded ? "Added!" : "Add to shopping cart"}
    </button>
  );
}
