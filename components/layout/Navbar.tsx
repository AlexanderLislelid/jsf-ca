"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 text-white justify-between">
      <Link href="/" className="group flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-bold tracking-tight text-black">
            Next<span className="text-blue-600">Aisle</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Webshop
          </span>
        </div>
      </Link>
      <div className="flex gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive
                  ? "text-blue-500 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
