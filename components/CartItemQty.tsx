"use client";

import useCartStore from "@/stores/cartStore";

export default function CartItemQty() {
  const numberOfitems = useCartStore((state) => state.items).length;

  return (
    <span className="relative right-3 bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
      {numberOfitems}
    </span>
  );
}
