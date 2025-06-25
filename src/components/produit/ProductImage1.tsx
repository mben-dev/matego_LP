/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProductImage1Props {
  setSelectedProduct: (product: string) => void;
}

const ProductImage1: React.FC<ProductImage1Props> = ({
  setSelectedProduct,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src="/images/produit1.webp"
        className="w-[400px] cursor-pointer hover:opacity-80 transition-opacity"
        alt=""
        onClick={() => setSelectedProduct("gingembre")}
      />
      <p className="text-3xl font-semibold ">
        MATÉ
        <br />
        <span className="text-matego_green">Gingembre</span>
      </p>
    </div>
  );
};

export default ProductImage1;
