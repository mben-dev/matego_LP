"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
/* eslint-disable @next/next/no-img-element */

const BgAcceuil = () => {
  const [theme, setTheme] = useState("orange");
  return (
    <>
      {/* Left Annexe - Positioned absolutely */}
      <div
        className="absolute z-30"
        style={{
          top: "0px",
          left: "-208px",
          width: "700px",
          height: "600px",
        }}
      >
        <img
          src={`/images/annexe_g_${theme == "orange" ? "orange" : "vert"}.png`}
          className="w-full h-full object-contain drop-shadow-lg"
          alt="Annexe gauche Matego Drinks"
        />
      </div>

      {/* Center Canette - Centered */}
      <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2  -translate-y-1/2  transition-transform  z-10">
        <img
          src={`/images/canette_${theme == "orange" ? "orange" : "vert"}.png`}
          className="object-contain"
          style={{
            width: "700px",
            height: "600px",
          }}
          alt="Canette Matego Drinks"
        />
      </div>
      <ThemeSwitch myTheme={theme} onSetMyTheme={setTheme} />
      {/* Right Annexe - Positioned absolutely */}
      <div
        className="absolute transform  transition-transform duration-300 "
        style={{
          top: "170px",
          right: "-220px",
          width: "700px",
          height: "600px",
        }}
      >
        <img
          src={`/images/annexe_d_${theme == "orange" ? "orange" : "vert"}.png`}
          className="w-full h-full object-contain drop-shadow-lg"
          alt="Annexe droite Matego Drinks"
        />
      </div>
    </>
  );
};

export default BgAcceuil;
