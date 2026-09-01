"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Cart", href: "/cart" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 text-white justify-between">
      <div>
        <h1 className="text-black">LOGO</h1>
      </div>
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
