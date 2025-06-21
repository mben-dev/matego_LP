"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type NavbarThemeContextType = {
  navbarTheme: string;
  setNavbarTheme: React.Dispatch<React.SetStateAction<string>>;
};

const NavbarThemeContext = createContext<NavbarThemeContextType | undefined>(
  undefined
);

function NavbarThemeProvider({ children }: React.PropsWithChildren<object>) {
  const [navbarTheme, setNavbarTheme] = useState("dark");
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/produit" ||
      pathname === "/contact"
    ) {
      setNavbarTheme("dark");
    } else {
      setNavbarTheme("light");
    }
  }, [pathname]);

  return (
    <NavbarThemeContext.Provider
      value={{
        navbarTheme,
        setNavbarTheme,
      }}
    >
      {children}
    </NavbarThemeContext.Provider>
  );
}

function useNavbarTheme() {
  const context = useContext(NavbarThemeContext);
  if (!context) {
    throw new Error("useNavbarTheme must be used within a NavbarThemeProvider");
  }
  return context;
}

export default NavbarThemeProvider;
export { useNavbarTheme };
