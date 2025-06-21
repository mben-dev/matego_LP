"use client"; // Add this directive for client-side rendering
import Bienfait from "@/components/accueil/Bienfait";
import Instagram from "@/components/accueil/Instagram";
import PourquoiMate from "@/components/accueil/PourquoiMate";
import React, { useState } from "react";
import BgAcceuil from "@/components/accueil/BgAcceuil";

const AcceuilPage = () => {
  // Now you can use useState
  const [selectedItem, setSelectedItem] = useState(0);

  console.log(selectedItem);

  const acceuilMenu = [
    { href: "/", label: "Acceuil" },
    { href: "/produit", label: "Pourquoi le Mate ?" },
    { href: "/bienfaits", label: "Les bienfaits du produit" },
    { href: "/instagram", label: "Retrouvez-nous sur Instagram" },
  ];

  // Function to render different content based on selected item
  const renderContent = () => {
    switch (selectedItem) {
      case 0: // Acceuil
        return <BgAcceuil />;

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
    <div className="h-screen w-full relative ">
      <div className=" h-screen w-full overflow-hidden relative ">
        {renderContent()}
      </div>

      <div className="absolute bottom-20 left-16 z-30">
        <ul className="">
          {acceuilMenu.map((item, index) => (
            <li
              key={`${item.href}-${index}`}
              className={`flex items-center space-x-2 cursor-pointer transition-colors ${
                selectedItem === index
                  ? "text-primary font-semibold"
                  : "text-secondary hover:text-primary hover:font-semibold"
              }`}
              onClick={() => setSelectedItem(index)}
            >
              <p className="text-secondary text-xl">
                {selectedItem == index ? "—" : "•"}
              </p>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcceuilPage;
