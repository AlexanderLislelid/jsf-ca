"use client";
import useCartStore from "@/stores/cartStore";
import Link from "next/link";
import { Plus, Minus, Trash } from "lucide-react";

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
    <div className="mt-40 px-4">
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-xl font-bold text-center">
            Your shopping cart is empty
          </h2>
          <Link
            className="py-2 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black"
            href={"/"}
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex justify-end">
            <button
              className="px-3 py-1.5 my-3 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => clearAll()}
            >
              Clear Cart
            </button>
          </div>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 border-2 rounded-xl px-4 py-3 w-70 sm:w-100 bg-white"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-gray-500 hover:text-red-700"
                  >
                    <Trash
                      size={"18px"}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <img
                    src={item.image}
                    alt={item.name}
                    height={75}
                    width={75}
                    className="rounded-lg w-30 h-20 object-cover "
                  />
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gray-600 p-1 rounded hover:bg-gray-700"
                      >
                        <Minus size={"14px"} className="text-white" />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-green-600 p-1 rounded hover:bg-green-700"
                      >
                        <Plus size={"14px"} className="text-white" />
                      </button>
                    </div>
                    <div>{(item.price * item.quantity).toFixed(2)} kr</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="px-4 py-2 border-b text-end font-medium flex justify-between">
              Total:{" "}
              <span className="font-semibold">{total.toFixed(2)} kr</span>
            </p>
            <div className="flex flex-col gap-2 mt-6 items-center font-semibold">
              <Link
                className="bg-gray-900 p-2 rounded-md hover:bg-black text-white w-full text-center"
                href={"cart/checkout"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
