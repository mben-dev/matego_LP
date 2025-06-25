import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nos Produits MATEGO | 3 Saveurs de Maté Naturel - Gingembre, Mangue, Hibiscus",
  description:
    "Découvrez nos 3 saveurs de maté MATEGO : Gingembre pour la vitalité, Mangue Passion exotique, Hibiscus Fraise des Bois. Boissons énergisantes 100% naturelles fabriquées à Mulhouse.",
  keywords:
    "produits matego, mate gingembre, mate mangue passion, mate hibiscus fraise, saveurs mate naturel, boisson energisante bio mulhouse",
  openGraph: {
    title: "Nos Produits MATEGO | 3 Saveurs de Maté Naturel",
    description:
      "3 saveurs authentiques de maté : Gingembre, Mangue Passion, Hibiscus Fraise des Bois. Made in Mulhouse.",
    url: "https://www.matego.fr/produit",
    images: [
      {
        url: "/images/matego_trio.webp",
        width: 1200,
        height: 630,
        alt: "Les trois saveurs MATEGO : Gingembre, Mangue Passion, Hibiscus Fraise",
      },
    ],
  },
};

export default function ProduitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
