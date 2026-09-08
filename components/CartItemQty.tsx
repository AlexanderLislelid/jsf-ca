"use client";

import useCartStore from "@/stores/cartStore";

export default function CartItemQty() {
  const numberOfItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[11px] font-bold text-white">
      {numberOfItems}
    </span>
  );
}
