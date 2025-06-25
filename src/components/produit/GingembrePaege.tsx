/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface GingembrePaegeProps {
  onSetSelectedProduct: (product: string) => void;
}

const GingembrePaege: React.FC<GingembrePaegeProps> = ({
  onSetSelectedProduct,
}) => {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-4 px-4 pt-2">
        {" "}
        <motion.img
          src="/images/matego_big_green.webp"
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
              La poudre de gingembre, avec sa chaleur épicée, aide à renforcer
              le métabolisme et à combattre la fatigue, tout en réchauffant vos
              sens de manière subtile et puissante. L’arôme vif et acidulé du
              yuzu apporte une touche rafraîchissante, rappelant un mélange
              entre citron et pamplemousse, qui dynamise vos papilles et
              équilibre parfaitement ce mélange unique. Enfin, le sirop de fleur
              de sureau adoucit l’ensemble avec ses notes florales délicates,
              tout en offrant des bienfaits purifiants et apaisants
            </p>
            <h2 className="absolute right-[-40%] font-semibold text-primary text-4xl">
              7,99 €
            </h2>
          </div>{" "}
          <div className="max-w-[500px] flex flex-col gap-1">
            {" "}
            <motion.p
              className="font-bold text-lg"
              initial={{ y: 20, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.6,
              }}>
              Ingredients
            </motion.p>
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
              onClick={() => onSetSelectedProduct("mangue")}>
              <img
                src="/images/mate_mangue_sm.webp"
                className="w-[150px] h-[150px] cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
              />
              <p className="text-xs">
                MATÉ <br />
                Mangue Passion
              </p>
            </div>
            <div
              className="space-y-2"
              onClick={() => onSetSelectedProduct("hibiscus")}>
              <img
                src="/images/mate_hib_sm.webp"
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
        src="/images/gingembre.webp"
        className="absolute left-[-1%] top-[24%] p-0 m-0"
        alt=""
      />
      <img
        src="/images/yuzu.webp"
        className="absolute right-[-1%] bottom-[0.3%] p-0 m-0"
        alt=""
      />
    </div>
  );
};

export default GingembrePaege;
