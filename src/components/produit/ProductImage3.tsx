/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProductImage3Props {
  setSelectedProduct: (product: string) => void;
}

const ProductImage3: React.FC<ProductImage3Props> = ({
  setSelectedProduct,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src="/images/produit3.webp"
        className="w-[400px] h-[240px] cursor-pointer hover:opacity-80 transition-opacity"
        alt=""
        onClick={() => setSelectedProduct("hibiscus")}
      />
      <p className="text-[#1D1D1B87]">Viendra plus tard</p>
      <p className="text-3xl font-semibold ">
        MATÉ
        <br />
        <span className="text-matego_red">Hibiscus Fraise Des Bois</span>
      </p>
    </div>
  );
};

export default ProductImage3;
