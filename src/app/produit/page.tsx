/* eslint-disable @next/next/no-img-element */
"use client";
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
  );
};

export default ProduitPage;
