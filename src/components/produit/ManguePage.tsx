/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface ManguePageProps {
  onSetSelectedProduct: (product: string) => void;
}

const ManguePage: React.FC<ManguePageProps> = ({ onSetSelectedProduct }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-4 px-4 pt-2">
        <motion.img
          src="/images/matego_big_orange.png"
          className="w-[650px]"
          alt=""
          initial={{ x: 80, y: 60, scale: 0.5, opacity: 0 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        />
        <div className="flex flex-col gap-4">
          <div className="flex relative">
            <p className="max-w-[500px]">
              L’arôme doux et sucré de la mangue apporte une touche tropicale
              irrésistible, tandis que le jus de fruit de la passion, offre une
              explosion de saveurs exotiques et acidulées, éveillant vos sens à
              chaque gorgée Le fruit de la passion est également un puissant
              antioxydant, contribuant à renforcer votre système immunitaire
              tout en soutenant une digestion saine. Ce mariage parfait
              d’ingrédients naturels vous procure à la fois plaisir et vitalité,
              parfait si vous souhaitez vous booster tout en douceur.
            </p>
            <h2 className="absolute right-[-40%] font-semibold text-primary text-4xl">
              7,99 €
            </h2>
          </div>
          <div className="max-w-[500px] flex flex-col gap-1">
            <p className="font-bold text-lg">Ingredients</p>
            <p className="text-[##1D1D1B87] opacity-50 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              lobortis metus. Aenean aliquet sem at ipsum cursus luctus.
              Praesent aliquam sagittis odio, at vulputate leo varius.
            </p>
          </div>
          <Button className="text-white rounded-none">Contactez nous</Button>
          <p className="font-bold">Vous aimerez peut-être aussi…</p>
          <div className="flex gap-4 mt-[-2%]">
            <div
              className="space-y-2"
              onClick={() => onSetSelectedProduct("gingembre")}
            >
              <img
                src="/images/mate_gingembre_sm.png"
                className="w-[150px] h-[150px] cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
              />
              <p className="text-xs">
                MATÉ <br />
                Gingembre
              </p>
            </div>
            <div
              className="space-y-2"
              onClick={() => onSetSelectedProduct("hibiscus")}
            >
              <img
                src="/images/mate_hib_sm.png"
                className="w-[150px] h-[150px] cursor-pointer hover:opacity-80 transition-opacity"
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
        src="/images/mangue_emo.png"
        className="absolute left-[-1%] top-[24%] p-0 m-0"
        alt=""
      />
      <img
        src="/images/orange_emo.png"
        className="absolute right-[-1%] bottom-[0.3%] p-0 m-0"
        alt=""
      />
    </div>
  );
};

export default ManguePage;
