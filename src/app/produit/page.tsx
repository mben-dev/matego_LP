"use client";
import { motion } from "framer-motion";
import GingembrePaege from "@/components/produit/GingembrePaege";
import HibiscusPage from "@/components/produit/HibiscusPage";
import ManguePage from "@/components/produit/ManguePage";
import ProductImage1 from "@/components/produit/ProductImage1";
import ProductImage2 from "@/components/produit/ProductImage2";
import ProductImage3 from "@/components/produit/ProductImage3";
import React, { useState } from "react";

const ProduitPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <>
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>Nos Produits MATEGO - 3 Saveurs de Maté Naturel</h1>
        <p>
          Découvrez notre gamme complète de boissons énergisantes naturelles à
          base de yerba maté. Fabriquées artisanalement à Mulhouse, Alsace.
        </p>{" "}
        <h2>MATÉ Gingembre</h2>
        <p>
          L&apos;alliance parfaite entre la vitalité du maté et la fraîcheur
          piquante du gingembre naturel. Idéal pour booster votre énergie
          naturellement.
        </p>
        <h2>MATÉ Mangue Passion</h2>
        <p>
          Une explosion de saveurs tropicales avec la mangue et le fruit de la
          passion. L&apos;évasion gustative dans chaque gorgée.
        </p>
        <h2>MATÉ Hibiscus Fraise des Bois</h2>
        <p>
          La douceur des fraises des bois sublimée par les notes florales de
          l&apos;hibiscus. Une expérience sensorielle unique.
        </p>
        <h3>Made in Mulhouse</h3>
        <p>
          Toutes nos boissons sont fabriquées localement à Mulhouse, Alsace,
          avec des ingrédients naturels soigneusement sélectionnés.
        </p>
      </div>

      <div className="h-screen w-full relative overflow-hidden">
        {" "}
        <div className="max-w-[1330px] mx-auto pt-20 ">
          {" "}
          {selectedProduct === null && (
            <motion.h1
              className="text-4xl uppercase font-bold"
              key="main-title"
              initial={{ x: 80, y: 60, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              nos <br /> produits
            </motion.h1>
          )}
          {selectedProduct === "gingembre" && (
            <motion.h1
              className="text-4xl uppercase font-bold"
              key="gingembre-title"
              initial={{ x: 80, y: 60, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              MATÉ
              <br /> <span className="text-matego_green">Gingembre</span>
            </motion.h1>
          )}
          {selectedProduct === "mangue" && (
            <motion.h1
              className="text-4xl uppercase font-bold"
              key="mangue-title"
              initial={{ x: 80, y: 60, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              MATÉ
              <br /> <span className="text-matego_orange">Mangue Passion</span>
            </motion.h1>
          )}
          {selectedProduct === "hibiscus" && (
            <motion.h1
              className="text-4xl uppercase font-bold"
              key="hibiscus-title"
              initial={{ x: 80, y: 60, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              MATÉ
              <br />{" "}
              <span className="text-matego_red">Hibiscus Fraise Des Bois</span>
            </motion.h1>
          )}
          {!selectedProduct ? (
            <div className="flex w-full gap-10  px-4 pt-2">
              <ProductImage1 setSelectedProduct={setSelectedProduct} />
              <ProductImage2 setSelectedProduct={setSelectedProduct} />
              <ProductImage3 setSelectedProduct={setSelectedProduct} />
            </div>
          ) : (
            <div className="">
              <div className="relative w-full">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute left-[-4%]  mb-6 px-4 py-2 bg-gray-200 hover:bg-primary hover:text-white rounded transition-colors"
                >
                  ←
                </button>
              </div>

              {/* Your custom JSX content based on selected product */}
              {selectedProduct === "gingembre" && (
                <GingembrePaege onSetSelectedProduct={setSelectedProduct} />
              )}

              {selectedProduct === "mangue" && (
                <ManguePage onSetSelectedProduct={setSelectedProduct} />
              )}

              {selectedProduct === "hibiscus" && (
                <HibiscusPage onSetSelectedProduct={setSelectedProduct} />
              )}
            </div>
          )}
        </div>
        <div className="absolute top-0 left-[6.9%] h-screen w-[1px] bg-[#1D1D1B12] z-20"></div>
        <div className="absolute top-[19.7%] w-full h-[1px]  bg-[#1D1D1B12] z-20"></div>
        {!selectedProduct && (
          <p className="absolute bottom-[-5.2%] left-[-0.5%] right-[-20%] text-[100px] text-[#1D1D1B12] font-light tracking-[2.545rem]  uppercase ">
            made in mulhouse
          </p>
        )}
      </div>
    </>
  );
};

export default ProduitPage;
