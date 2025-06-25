/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProductImage2Props {
  setSelectedProduct: (product: string) => void;
}

const ProductImage2 = ({ setSelectedProduct }: ProductImage2Props) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src="/images/produit2.webp"
        className="w-[400px] cursor-pointer hover:opacity-80 transition-opacity"
        alt=""
        onClick={() => setSelectedProduct("mangue")}
      />
      <p className="text-3xl font-semibold ">
        MATÉ
        <br />
        <span className="text-matego_orange">Mangue Passion</span>
      </p>
    </div>
  );
};

export default ProductImage2;
