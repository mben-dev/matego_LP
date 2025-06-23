/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface HibiscusPageProps {
  onSetSelectedProduct: (product: string) => void;
}

const HibiscusPage: React.FC<HibiscusPageProps> = ({
  onSetSelectedProduct,
}) => {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-4 px-4 pt-2">
        <motion.img
          src="/images/matego_big_hib.png"
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
              Riche en antioxydants, la poudre d’hibiscus aide à soutenir votre
              vitalité tout en offrant une touche acidulée rafraîchissante qui
              équilibre parfaitement ce mélange unique. L’arôme naturel de
              fraise des bois vous enveloppera d’une douceur fruitée et
              délicate, éveillant vos sens tout en sublimant la vitalité
              apportée par la poudre de maté. Ce boost différent est une
              expérience unique et vous accompagnera dans la vie de tous les
              jours pour réaliser vos projets.
            </p>
            <h2 className="absolute right-[-40%] font-semibold text-primary text-4xl">
              7,99 €
            </h2>
          </div>{" "}
          <div className="max-w-[500px] flex flex-col gap-1">
            <motion.p
              className="font-bold text-lg"
              initial={{ y: 20, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.6,
              }}
            >
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
              onClick={() => onSetSelectedProduct("mangue")}
            >
              <img
                src="/images/mate_mangue_sm.png"
                className="w-[150px] h-[150px] cursor-pointer hover:opacity-80 transition-opacity"
                alt=""
              />
              <p className="text-xs">
                MATÉ <br />
                Mangue Passion
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/fraise_emo.png"
        className="absolute left-[-1%] top-[22%] p-0 m-0"
        alt=""
      />
      <img
        src="/images/hibiscus_emo1.png"
        className="absolute right-[-0.9%] bottom-[-0.9%] p-0 m-0"
        alt=""
      />
      <img
        src="/images/hibiscus_emo2.png"
        className="absolute right-[-1%] bottom-[1%] p-0 m-0"
        alt=""
      />
    </div>
  );
};

export default HibiscusPage;
