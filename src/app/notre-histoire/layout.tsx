import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Notre Histoire MATEGO | Louis & Mehdi, Fondateurs de la Révolution Maté",
  description:
    "Découvrez l'histoire de MATEGO, née de la vision de Louis et Mehdi pour offrir une alternative naturelle aux sodas. De l'idée révolutionnaire à la réalité Mulhousienne.",
  keywords:
    "histoire matego, louis fondateur, mehdi cofondateur, creation matego mulhouse, origine boisson mate naturelle, alternative soda saine",
  openGraph: {
    title: "Notre Histoire MATEGO | Louis & Mehdi, Fondateurs",
    description:
      "L'histoire de MATEGO : comment Louis et Mehdi ont révolutionné les boissons énergisantes naturelles.",
    url: "https://www.matego.fr/notre-histoire",
    images: [
      {
        url: "/images/louis_matego.webp",
        width: 1200,
        height: 630,
        alt: "Louis et Mehdi, fondateurs de MATEGO",
      },
    ],
  },
};

export default function NotreHistoireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
