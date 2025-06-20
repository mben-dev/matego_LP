/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui/button";

const Instagram = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="max-w-[1400px] pt-[330px] mx-auto z-50 bg-transparent w-full h-screen">
        <div className="w-full h-screen relative">
          <h1 className="uppercase text-5xl font-bold ">
            Retrouvez-
            <br />
            nous sur <br /> Instagram
          </h1>
          <p className="mt-4 mb-2 text-secondary ">
            Visiter notre compte instagram
          </p>
          <Button className="bg-primary text-white font-extralight rounded-none ">
            Découvrez-nous sur Instagram{" "}
            <span>
              <img src="/images/arrow-up-right.png" className="w-4" alt="" />
            </span>
          </Button>
          <img
            src="/images/woman_basket.png"
            className="rounded-br-lg w-[200px] absolute top-[-350px] left-[-70px]"
            alt=""
          />
          <img
            src="/images/instagram.png"
            className="rounded-xl w-[450px] absolute top-[-280px] left-[182px]"
            alt=""
          />
          <img
            src="/images/iphone.png"
            className="rounded-xl w-[450px] absolute top-[-120px] left-[33%]"
            alt=""
          />
          <img
            src="/images/man_alone.png"
            className="rounded-xl w-[250px] absolute top-[70px] left-[60%]"
            alt=""
          />
          <img
            src="/images/matego_trio.png"
            className="rounded-xl w-[150px] absolute top-[-150px] right-[10%]"
            alt=""
          />
          <img
            src="/images/man_n_woman.png"
            className="rounded-xl w-[100px] absolute top-[-10px] right-[-69px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
