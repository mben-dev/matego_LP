/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const QuiSommeNous = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  console.log(hoveredPoint);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/louis_matego.png"
        className={`absolute inset-0 w-[100%] h-[100%] transition-all duration-500 ease-in-out ${
          hoveredPoint === 1
            ? "scale-[2] origin-[18%_40%]"
            : hoveredPoint === 2
            ? "scale-[2.7] origin-[68%_30%]"
            : "scale-100"
        }`}
        alt=""
      />{" "}
      {/* First point */}
      {hoveredPoint === null && (
        <div
          className="absolute top-[27%] right-[62%] bg-white w-4 h-4 rounded-full cursor-pointer z-10 hover:scale-125 transition-transform"
          onMouseEnter={() => setHoveredPoint(1)}
        ></div>
      )}
      {/* first point content */}
      {hoveredPoint === 1 && (
        <div
          className="flex flex-col text-white"
          onMouseLeave={() => setHoveredPoint(null)}
        >
          <div className="absolute top-[30%] right-[40%] z-20">
            <div className="relative min-w-[400px]">
              <img
                src="/images/mehdi_name.png"
                className="w-24 float-right absolute right-[43%] top-[-20%]"
                alt=""
              />
              <p>Le co-fondateur</p>
            </div>
          </div>
          <div className="absolute top-[46%] right-[55%] z-20 w-[400px] text-sm text-center">
            <p>
              Mehdi incarne la simplicité, l&apos;authenticité et
              l&apos;honnêteté, des valeurs que MATEGO porte également.
              S&apos;associer est devenu une évidence. Louis savait qu&apos;il
              avait besoin des meilleurs, et pour lui, Mehdi est le meilleur
              dans son domaine. Leur amitié s&apos;est ainsi transformée en une
              collaboration naturelle, alliant compétences professionnelles et
              liens personnels.
            </p>
          </div>
        </div>
      )}
      {/* Second point */}
      {hoveredPoint === null && (
        <div
          className="absolute top-[30%] right-[32%] bg-white w-4 h-4 rounded-full cursor-pointer z-10 hover:scale-125 transition-transform"
          onMouseEnter={() => setHoveredPoint(2)}
        ></div>
      )}
      {/* second point content */}
      {hoveredPoint === 2 && (
        <div
          className="flex flex-col text-white"
          onMouseLeave={() => setHoveredPoint(null)}
        >
          <div className="absolute top-[45%] right-[30%] z-20">
            <div className="relative ">
              <img
                src="/images/louis_name.png"
                className="w-24 float-right absolute right-[60%] top-[-20%]"
                alt=""
              />
              <p>le fondateur</p>
              <p className="w-[500px]">Conseiller en alimentation passionné</p>
            </div>
          </div>
          <div className="absolute top-[60%] right-[60%] z-20 w-[400px] text-sm text-center">
            <p>
              Tout a commencé par un message sur LinkedIn. À l&apos;époque,
              Louis lançait sa première activité et, impressionné par le travail
              de Mehdi, il lui a écrit : &quot;C&apos;est trop fort ce que tu
              fais, quand j&apos;ai de l&apos;argent je bosse avec toi&quot;. La
              réponse de Mehdi ? Simple et authentique : &quot;Pas de souci,
              passe au bureau boire un café on en discute&quot;. Et depuis, un
              café, un deuxième, un troisième... Une amitié est née. Au fil des
              rencontres, Louis a réalisé qu&apos;être bien entouré est
              essentiel.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuiSommeNous;
