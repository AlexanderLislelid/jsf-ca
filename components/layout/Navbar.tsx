"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import CartItemQty from "../CartItemQty";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: <ShoppingCart />, href: "/cart" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log("menu is", !open);
  };

  return (
    <nav className="flex gap-4 p-4 text-white justify-between max-w-300 w-full mx-auto items-center">
      <Logo />
      {/* mobile nav */}
      <div className="flex sm:hidden">
        <button onClick={handleClick}>
          {open ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </button>
      </div>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-50 shadow-lg p-4 sm:hidden z-50 flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center transition-colors ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  {item.href === "/cart" && <CartItemQty />}
                </span>
              </Link>
            );
          })}
        </div>
      )}
      {/* //desktop nav */}
      <div className="sm:flex gap-6 hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center transition-colors ${
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                {item.name}
                {item.href === "/cart" && <CartItemQty />}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
