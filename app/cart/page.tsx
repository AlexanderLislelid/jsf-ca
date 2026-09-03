"use client";
import useCartStore from "@/stores/cartStore";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearAll = useCartStore((state) => state.clearCart);

  return (
    <div>
      {items.length === 0 ? (
        <div>
          <h2>Your shopping cart is empty</h2>
          <Link href={"/"}>Browse Products</Link>
        </div>
      ) : (
        <div>
          <h2>Shopping cart</h2>
          <ul className="flex flex-col gap-6">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center border-2 rounded-2xl px-4 py-2"
              >
                <h3>{item.name}</h3>
                <img
                  src={item.image}
                  alt={item.name}
                  height={75}
                  width={75}
                  className="rounded-lg"
                />
                <div className="flex gap-2 items-center p-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-500 p-1 border border-gray-500 rounded hover:bg-blue-600"
                  >
                    <Plus size={"16px"} className="text-white" />
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-blue-500 p-1 border border-gray-500 rounded hover:bg-blue-600"
                  >
                    <Minus size={"16px"} className="text-white" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
