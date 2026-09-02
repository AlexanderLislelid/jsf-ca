"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 text-white justify-between">
      <Logo />
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
