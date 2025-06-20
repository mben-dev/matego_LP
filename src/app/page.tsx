/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import React from "react";

const AcceuilPage = () => {
  return (
    <div className="h-screen w-full relative ">
      <div className=" h-screen w-full overflow-hidden relative ">
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
            src="/images/annexe_g_orange.png"
            className="w-full h-full object-contain drop-shadow-lg"
            alt="Annexe gauche Matego Drinks"
          />
        </div>

        {/* Center Canette - Centered */}
        <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2  -translate-y-1/2  transition-transform  z-10">
          <img
            src="/images/canette_orange.png"
            className="object-contain "
            style={{
              width: "700px",
              height: "600px",
            }}
            alt="Canette Matego Drinks"
          />
        </div>

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
            src="/images/annexe_d_orange.png"
            className="w-full h-full object-contain drop-shadow-lg"
            alt="Annexe droite Matego Drinks"
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-10 z-30"></div>
    </div>
  );
};

export default AcceuilPage;
