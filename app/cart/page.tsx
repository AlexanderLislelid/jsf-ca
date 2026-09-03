"use client";
import useCartStore from "@/stores/cartStore";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearAll = useCartStore((state) => state.clearCart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

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
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 border-2 rounded-xl px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-gray-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    height={75}
                    width={75}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-blue-500 p-1 border border-gray-500 rounded hover:bg-blue-600"
                      >
                        <Plus size={"16px"} className="text-white" />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-blue-500 p-1 border border-gray-500 rounded hover:bg-blue-600"
                      >
                        <Minus size={"16px"} className="text-white" />
                      </button>
                    </div>
                    <div>{(item.price * item.quantity).toFixed(2)} kr</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 items-center">
            <p>Total: {total.toFixed(2)} kr</p>
            <Link href={"cart/checkout"}>checkout</Link>
            <button onClick={() => clearAll()}>Clear cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
