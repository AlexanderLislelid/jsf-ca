"use client";
import useCartStore from "@/stores/cartStore";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearAll = useCartStore((state) => state.clearCart);

  return (
    <div>
      <h2>Shopping cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
