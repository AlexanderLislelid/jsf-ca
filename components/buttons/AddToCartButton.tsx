"use client";
import useCartStore from "@/stores/cartStore";
import { productToCartItem } from "@/types/cartItem";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => {
        console.log(product.title, "added to cart");
        addItem(productToCartItem(product));
      }}
    >
      Add to shopping cart
    </button>
  );
}
