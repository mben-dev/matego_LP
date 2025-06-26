"use client"; // Add this directive for client-side rendering
import BgAccueil from "@/components/accueil/BgAccueil";
import Bienfait from "@/components/accueil/Bienfait";
import Instagram from "@/components/accueil/Instagram";
import PourquoiMate from "@/components/accueil/PourquoiMate";
import { useState } from "react";

const AccueilPage = () => {
  // Now you can use useState
  const [selectedItem, setSelectedItem] = useState(0);

  console.log(selectedItem);

  const accueilMenu = [
    { href: "/", label: "Accueil" },
    { href: "/produit", label: "Pourquoi le Mate ?" },
    { href: "/bienfaits", label: "Les bienfaits du produit" },
    { href: "/instagram", label: "Retrouvez-nous sur Instagram" },
  ];

  // Function to render different content based on selected item
  const renderContent = () => {
    switch (selectedItem) {
      case 0: // Accueil
        return <BgAccueil />;

      case 1: // Pourquoi le Mate ?
        return <PourquoiMate />;

      case 2: // Les bienfaits du produit
        return <Bienfait />;

      case 3: // Instagram
        return <Instagram />;

      default:
        return null;
    }
  };

  return (
    <>
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>MATEGO - Boisson Énergisante Naturelle au Maté</h1>
        <p>
          Découvrez MATEGO, la première boisson énergisante française 100%
          naturelle à base de yerba maté. Alternative saine aux sodas, fabriquée
          à Mulhouse, Alsace. Fondée par Louis et Mehdi.
        </p>
        <h2>Nos Saveurs</h2>
        <ul>
          <li>MATÉ Gingembre - Vitalité et fraîcheur naturelle</li>
          <li>MATÉ Mangue Passion - Explosion de saveurs tropicales</li>
          <li>MATÉ Hibiscus Fraise des Bois - Douceur florale authentique</li>
        </ul>
        <h2>Pourquoi choisir MATEGO ?</h2>
        <p>
          Riche en antioxydants, vitamines (A, C, B1, B2) et minéraux
          (magnésium, calcium, fer). Énergie progressive sans crash, améliore la
          concentration et soutient les performances physiques.
        </p>
      </div>

      <article className="h-screen w-full relative ">
        <section className=" h-screen w-full overflow-hidden relative ">
          {renderContent()}
        </section>

        <nav
          className="absolute bottom-20 left-16 z-30"
          aria-label="Navigation des sections"
        >
          <ul className="">
            {accueilMenu.map((item, index) => (
              <li
                key={`${item.href}-${index}`}
                className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                  selectedItem === index
                    ? "text-primary font-semibold"
                    : "text-secondary hover:text-primary hover:font-semibold"
                }`}
                onClick={() => setSelectedItem(index)}
              >
                <p className="text-secondary text-xl" aria-hidden="true">
                  {selectedItem == index ? "—" : "•"}
                </p>
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </>
  );
};

export default AccueilPage;
