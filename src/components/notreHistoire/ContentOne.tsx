/* eslint-disable @next/next/no-img-element */
import React from "react";

const ContentOne = () => {
  return (
    <div className="flex justify-between relative">
      <div className="flex flex-col">
        {" "}
        <div className="max-w-[458px]">
          <img
            src="/images/2023.webp"
            className="float-left w-20 ml-2 mr-3 mt-2.5 mb-1 pt-1 relative z-30"
            alt=""
          />
          <div className="relative">
            {/* <div className="absolute bg-primary w-7 h-7 rounded-full z-20 left-[-9.4%]"></div> */}
            <div className="bg-white p-6 shadow-lg border border-gray-100 relative transform rotate-1">
              <p className="text-sm leading-relaxed">
                <span className="font-bold">Louis</span>, a constaté lors de ses
                interventions dans les classes post-bac que les étudiants et
                jeunes actifs étaient souvent accros aux sodas et boissons
                énergisantes chimiques pas toujours saines, mais omniprésentes.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/coca_trio.webp"
          className="w-[458px] h-[482px] mt-4"
          alt=""
        />
      </div>
      <img
        src="/images/three_drinks.webp"
        className="w-[475px] absolute top-[-40%] right-[-6.3%] z-10"
        alt=""
      />
    </div>
  );
};

export default ContentOne;
