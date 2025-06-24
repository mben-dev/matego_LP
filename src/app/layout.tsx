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
  title:
    "MATEGO - Boisson Énergisante Naturelle au Maté | Alternative Saine aux Sodas",
  description:
    "Découvrez MATEGO, la boisson énergisante 100% naturelle à base de yerba maté. 3 saveurs délicieuses : Gingembre, Mangue Passion, Hibiscus Fraise. Fabriqué à Mulhouse, Alsace.",
  keywords:
    "mate, boisson énergisante naturelle, alternative soda, yerba mate, énergie naturelle, Mulhouse, Alsace, France, gingembre, mangue passion, hibiscus fraise, Louis, Mehdi",
  authors: [{ name: "Louis" }, { name: "Mehdi" }],
  creator: "MATEGO",
  publisher: "MATEGO",
  openGraph: {
    title: "MATEGO - Boisson Énergisante Naturelle au Maté",
    description:
      "L'alternative 100% naturelle aux sodas et energy drinks chimiques. Riche en antioxydants, vitamines et minéraux.",
    url: "https://www.matego.fr",
    siteName: "MATEGO",
    images: [
      {
        url: "/images/matego_big_logo.png",
        width: 1200,
        height: 630,
        alt: "MATEGO - Boisson énergisante naturelle au maté",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MATEGO - Boisson Énergisante Naturelle au Maté",
    description:
      "L'alternative 100% naturelle aux sodas et energy drinks chimiques.",
    images: ["/images/matego_big_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "MATEGO",
              description:
                "Boisson énergisante 100% naturelle à base de yerba maté",
              url: "https://www.matego.fr",
              logo: "https://www.matego.fr/images/matego_big_logo.png",
              image: "https://www.matego.fr/images/matego_trio.png",
              founder: [
                {
                  "@type": "Person",
                  name: "Louis",
                },
                {
                  "@type": "Person",
                  name: "Mehdi",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mulhouse",
                addressRegion: "Alsace",
                addressCountry: "FR",
              },
              hasMenu: {
                "@type": "Menu",
                hasMenuSection: [
                  {
                    "@type": "MenuSection",
                    name: "Saveurs MATEGO",
                    hasMenuItem: [
                      {
                        "@type": "MenuItem",
                        name: "MATÉ Gingembre",
                        description: "Boisson mate au gingembre naturel",
                      },
                      {
                        "@type": "MenuItem",
                        name: "MATÉ Mangue Passion",
                        description: "Boisson mate mangue passion",
                      },
                      {
                        "@type": "MenuItem",
                        name: "MATÉ Hibiscus Fraise des Bois",
                        description: "Boisson mate hibiscus fraise des bois",
                      },
                    ],
                  },
                ],
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.matego.fr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
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
