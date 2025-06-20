"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Acceuil" },
    { href: "/notre-histoire", label: "Notre Histoire" },
    { href: "/produit", label: "Produit" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-transparent absolute z-40 top-3 px-4 lg:px-8 py-2 ">
      <div className="flex items-end justify-end space-x-8 w-full  px-9">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-3 py-2  text-sm font-medium transition-colors",
              pathname === item.href
                ? " text-primary"
                : "text-secondary hover:text-primary "
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
