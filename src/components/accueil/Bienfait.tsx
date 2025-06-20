/* eslint-disable @next/next/no-img-element */
import React from "react";

const Bienfait = () => {
  const caracteristiques = [
    { imgUrl: "/images/cara1.png", label: "énergisante" },
    { imgUrl: "/images/cara2.png", label: "Naturelle" },
    { imgUrl: "/images/cara3.png", label: "aromatisé naturellement " },
  ];

  return (
    <div className="w-full h-screen absolute">
      <div className="relative w-full h-full ">
        <div className=" max-w-[1400px] pt-24 mx-auto z-50 bg-transparent w-full h-screen ">
          <h1 className="text-4xl uppercase font-bold">
            Les bienfaits du produit
          </h1>
          <p className="mt-4 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            lobortis metus. Aenean <br /> aliquet sem at ipsum cursus luctus.
            Praesent aliquam sagittis odio, at vulputate leo varius.
          </p>
          <div className="mt-20 w-full flex justify-around items-center">
            {caracteristiques.map((item, index) => (
              <div
                className="flex flex-col items-center gap-3"
                key={`${item.label}-${index}`}
              >
                <img src={item.imgUrl} alt={item.label} className="w-[150px]" />
                <p className="text-primary text-lg font-semibold mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-screen  z-10">
          <img
            src="/images/bienfait_g.png"
            className="w-[400px] absolute top-0 left-0"
            alt=""
          />
          <img
            src="/images/bienfait_d.png"
            className="w-[450px] h-[360px] absolute bottom-0 right-7"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Bienfait;
