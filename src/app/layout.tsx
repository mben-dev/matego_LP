import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarThemeProvider from "@/context/NavbarContext";
import ClientWrapper from "@/components/ClientWrapper";
import { NavigationProvider } from "@/context/NavigationContext";
import PageTransitionLoader from "@/components/PageTransitionLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matego - Maté Premium",
  description: "Découvrez notre gamme de maté premium artisanal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full h-screen relative font-exo   ${geistSans.variable} ${geistMono.variable} ${exo.variable}`}
      >
        <ClientWrapper>
          <NavigationProvider>
            <NavbarThemeProvider>
              <Navbar />
              <main className="">{children}</main>
              <PageTransitionLoader />
            </NavbarThemeProvider>
          </NavigationProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
