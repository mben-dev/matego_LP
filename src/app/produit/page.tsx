/* eslint-disable @next/next/no-img-element */
"use client";
import ProductImage1 from "@/components/produit/ProductImage1";
import ProductImage2 from "@/components/produit/ProductImage2";
import ProductImage3 from "@/components/produit/ProductImage3";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ProduitPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="max-w-[1330px] mx-auto pt-20 ">
        {selectedProduct === null && (
          <h1 className="text-4xl uppercase font-bold">
            nos <br /> produits
          </h1>
        )}
        {selectedProduct === "gingembre" && (
          <h1 className="text-4xl uppercase font-bold">
            MATÉ
            <br /> <span className="text-matego_green">Gingembre</span>
          </h1>
        )}
        {selectedProduct === "mangue" && (
          <h1 className="text-4xl uppercase font-bold">
            MATÉ
            <br /> <span className="text-matego_orange">Mangue Passion</span>
          </h1>
        )}
        {selectedProduct === "hibiscus" && (
          <h1 className="text-4xl uppercase font-bold">
            MATÉ
            <br />{" "}
            <span className="text-matego_red">Hibiscus Fraise Des Bois</span>
          </h1>
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
              <div className="w-full h-screen">
                <div className="flex gap-4 px-4 pt-2">
                  <img
                    src="/images/matego_big_green.png"
                    className="w-[650px]"
                    alt=""
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex relative">
                      <p className="max-w-[500px]">
                        La poudre de gingembre, avec sa chaleur épicée, aide à
                        renforcer le métabolisme et à combattre la fatigue, tout
                        en réchauffant vos sens de manière subtile et puissante.
                        L’arôme vif et acidulé du yuzu apporte une touche
                        rafraîchissante, rappelant un mélange entre citron et
                        pamplemousse, qui dynamise vos papilles et équilibre
                        parfaitement ce mélange unique. Enfin, le sirop de fleur
                        de sureau adoucit l’ensemble avec ses notes florales
                        délicates, tout en offrant des bienfaits purifiants et
                        apaisants
                      </p>
                      <h2 className="absolute right-[-40%] font-semibold text-primary text-4xl">
                        7,99 €
                      </h2>
                    </div>
                    <div className="max-w-[500px] flex flex-col gap-1">
                      <p className="font-bold text-lg">Ingredients</p>
                      <p className="text-[##1D1D1B87] opacity-50 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce nec lobortis metus. Aenean aliquet sem at ipsum
                        cursus luctus. Praesent aliquam sagittis odio, at
                        vulputate leo varius.
                      </p>
                    </div>
                    <Button className="text-white rounded-none">
                      Contactez nous
                    </Button>
                    <p className="font-bold">Vous aimerez peut-être aussi…</p>
                    <div className="flex gap-4 mt-[-2%]">
                      <div className="space-y-2">
                        <img
                          src="/images/mate_mangue_sm.png"
                          className="w-[150px] h-[150px] "
                          alt=""
                        />
                        <p className="text-xs">
                          MATÉ <br />
                          Mangue Passion
                        </p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/images/mate_hib_sm.png"
                          className="w-[150px] h-[150px] "
                          alt=""
                        />
                        <p className="text-xs">
                          MATÉ <br />
                          Hibiscus Fraise Des Bois
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/images/gingembre.png"
                  className="absolute left-[-1%] top-[24%] p-0 m-0"
                  alt=""
                />
                <img
                  src="/images/yuzu.png"
                  className="absolute right-[-1%] bottom-[0.3%] p-0 m-0"
                  alt=""
                />
              </div>
            )}

            {selectedProduct === "mangue" && (
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  MATÉ{" "}
                  <span className="text-matego_orange">Mangue Passion</span>
                </h2>
                <p className="text-lg mb-6">
                  Votre contenu personnalisé pour le Maté Mangue Passion
                </p>
                {/* Add your custom JSX here */}
              </div>
            )}

            {selectedProduct === "hibiscus" && (
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  MATÉ{" "}
                  <span className="text-matego_red">
                    Hibiscus Fraise Des Bois
                  </span>
                </h2>
                <p className="text-lg mb-6">
                  Votre contenu personnalisé pour le Maté Hibiscus Fraise Des
                  Bois
                </p>
                {/* Add your custom JSX here */}
              </div>
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
  );
};

export default ProduitPage;
