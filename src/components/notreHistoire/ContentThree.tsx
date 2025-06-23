/* eslint-disable @next/next/no-img-element */
import React from "react";

const ContentThree = () => {
  return (
    <div className="flex justify-between relative">
      <div className="flex flex-col gap-4">
        {" "}
        <div className="max-w-[458px]">
          <img
            src="/images/2023.png"
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
        <div className="max-w-[440px]">
          <img
            src="/images/2025.png"
            className="float-left w-20 mr-4 mb-1 pt-1"
            alt=""
          />
          <div className="relative">
            {/* <div className="absolute bg-primary w-7 h-7 rounded-full z-20 left-[-9.95%]"></div> */}
            <p className="text-sm">
              Le chemin n&apos;a pas été sans embûches. Mais la résilience fait
              partie intégrante de l&apos;ADN de MATEGO. Pour aller au bout de
              sa vision, il a pu compter sur le soutien fort de Mehdi, un ami et
              collaborateur de choix. Avec son agence de production
              audiovisuelle One Com, Mehdi apporte sa touche créative et
              audacieuse pour casser les codes et donner une identité forte à
              MATEGO.
            </p>
          </div>
        </div>
        <img
          src="/images/mehdi_notre_histoire.png"
          className=" h-[221px] mt-2"
          alt=""
        />
      </div>
      <img
        src="/images/mehdi.png"
        className="w-[680px] absolute bottom-[-4%] right-[-7.2%] z-10"
        alt=""
      />
    </div>
  );
};

export default ContentThree;
