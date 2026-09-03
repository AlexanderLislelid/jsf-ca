import type { Product } from "@/types/product";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export function productToCartItem(
  product: Product,
): Omit<CartItem, "quantity"> {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image.url,
  };
}
