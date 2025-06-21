"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useNavbarTheme } from "@/context/NavbarContext";

const Navbar = () => {
  const pathname = usePathname();

  const { navbarTheme } = useNavbarTheme();

  const navItems = [
    { href: "/", label: "Acceuil" },
    { href: "/notre-histoire", label: "Notre Histoire" },
    { href: "/produit", label: "Produit" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full bg-transparent fixed z-40 ${
        navbarTheme === "light" ? "top-6" : "top-3"
      }  px-4 lg:px-8 py-2 `}
    >
      <div className="flex items-end justify-end space-x-3 w-full  px-9">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-3 py-2  text-sm font-medium transition-colors",
              pathname === item.href
                ? navbarTheme === "dark"
                  ? "text-primary"
                  : "text-white underline underline-offset-2 font-bold"
                : navbarTheme === "dark"
                ? "text-secondary hover:text-primary"
                : "text-white opacity-80 hover:font-bold hover:underline hover:underline-offset-2 hover:opacity-100"
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
