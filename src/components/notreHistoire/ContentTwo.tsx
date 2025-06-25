/* eslint-disable @next/next/no-img-element */
import React from "react";

const ContentTwo = () => {
  return (
    <div className="flex justify-between relative">
      <div className="flex flex-col gap-4">
        {" "}
        <div className="max-w-[458px]">
          <img
            src="/images/2023.webp"
            className="float-left w-20 mr-4 mb-1 pt-1"
            alt=""
          />
          <div className="relative">
            {/* <div className="absolute bg-primary w-7 h-7 rounded-full z-20 left-[-9.4%]"></div> */}
            <p className="text-sm">
              <span className="font-bold">Louis</span>, a constaté lors de ses
              interventions dans les classes post-bac que les étudiants et
              jeunes actifs étaient souvent accros aux sodas et boissons
              énergisantes chimiques pas toujours saines, mais omniprésentes.
            </p>
          </div>
        </div>
        <div className="max-w-[458px]">
          <div className="relative">
            {/* <div className="absolute bg-primary w-7 h-7 rounded-full z-20 left-[-9.4%]"></div> */}
            <p className="text-sm">
              Pour offrir une solution différente et plus respectueuse de la
              santé, <span className="font-bold">Louis</span> a imaginé MATEGO :
              une boisson énergisante 100% naturelle, à base de maté et
              aromatisé naturellement conçue pour soutenir l&apos;énergie et la
              concentration sans sacrifier la transparence ni la qualité.
            </p>
          </div>
        </div>
        <img
          src="/images/matego_big_logo.webp"
          className="w-[140px] h-[350px] mt-4 translate-x-[110%]"
          alt=""
        />
      </div>
      <img
        src="/images/louis.webp"
        className="w-[800px] absolute bottom-[-4%] right-[5%] z-10"
        alt=""
      />
    </div>
  );
};

export default ContentTwo;
