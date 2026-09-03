import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types/cartItem";

type CartState = {
  items: CartItem[];

  addItem: (product: Omit<CartItem, "quantity">) => void;

  removeItem: (id: string) => void;

  updateQuantity: (id: string, quantity: number) => void;

  clearCart: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
            return { items: updatedItems };
          } else {
            const newItem: CartItem = { ...product, quantity: 1 };
            return { items: [...state.items, newItem] };
          }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((item) => item.id !== id) };
          }
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item,
            ),
          };
        }),

      clearCart: () => set({ items: [] }),
    }),
    { name: "cart" },
  ),
);

export default useCartStore;
