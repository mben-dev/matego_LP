"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
/* eslint-disable @next/next/no-img-element */

const BgAccueil = () => {
  const [theme, setTheme] = useState("orange");

  return (
    <>
      {" "}
      {/* Left Annexe - Animated from left with bounce */}
      <motion.div
        key={`left-${theme}`}
        initial={{
          x: -400,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          delay: 0.2,
        }}
        className="absolute z-30"
        style={{
          top: "0px",
          left: "-208px",
          width: "700px",
          height: "600px",
        }}
      >
        <img
          src={`/images/annexe_g_${theme == "orange" ? "orange" : "vert"}.webp`}
          className="w-full h-full object-contain drop-shadow-lg"
          alt="Annexe gauche Matego Drinks"
        />
      </motion.div>{" "}
      {/* Center Canette - Sudden appearance animation */}
      <motion.div
        key={`center-${theme}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 0.8,
        }}
        className="absolute top-[42%] left-1/2 transform -translate-x-1/2  -translate-y-1/2  transition-transform  z-10"
      >
        <img
          src={`/images/canette_${theme == "orange" ? "orange" : "vert"}.webp`}
          className="object-contain"
          style={{
            width: "700px",
            height: "600px",
          }}
          alt="Canette Matego Drinks"
        />
      </motion.div>
      <ThemeSwitch myTheme={theme} onSetMyTheme={setTheme} />{" "}
      {/* Right Annexe - Animated from right with bounce */}
      <motion.div
        key={`right-${theme}`}
        initial={{
          x: 400,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          delay: 0.4,
        }}
        className="absolute transform  transition-transform duration-300 "
        style={{
          top: "170px",
          right: "-220px",
          width: "700px",
          height: "600px",
        }}
      >
        <img
          src={`/images/annexe_d_${theme == "orange" ? "orange" : "vert"}.webp`}
          className="w-full h-full object-contain drop-shadow-lg"
          alt="Annexe droite Matego Drinks"
        />
      </motion.div>
    </>
  );
};

export default BgAccueil;
