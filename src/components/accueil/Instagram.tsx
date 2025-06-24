/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
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
          </h1>{" "}
          <p className="mt-4 mb-2 text-secondary ">
            Visiter notre compte instagram
          </p>
          <Button
            className="bg-primary text-white font-extralight rounded-none relative overflow-hidden"
            onClick={() =>
              window.open("https://www.instagram.com/mategodrinks/", "_blank")
            }
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0 }}
            >
              {"Découvrez-nous sur Instagram ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.2 + index * 0.05,
                    duration: 0.1,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              <img src="/images/arrow-up-right.png" className="w-4" alt="" />
            </motion.span>
          </Button>{" "}
          <motion.img
            src="/images/woman_basket.png"
            className="rounded-br-lg w-[200px] absolute top-[-350px] left-[-70px]"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          />
          <motion.img
            src="/images/corner_duo_canette.png"
            className=" w-[80px] absolute bottom-[42.5%] left-[-4.78%]"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />
          <motion.img
            src="/images/instagram.png"
            className="rounded-xl w-[450px] absolute top-[-280px] left-[182px]"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          />{" "}
          <motion.img
            src="/images/iphone.png"
            className="rounded-xl w-[450px] absolute top-[-120px] left-[33%]"
            alt=""
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          />{" "}
          <motion.img
            src="/images/man_alone.png"
            className="rounded-xl w-[250px] absolute top-[70px] left-[60%]"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          />
          <motion.img
            src="/images/matego_trio.png"
            className="rounded-xl w-[150px] absolute top-[-150px] right-[10%]"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          />
          <motion.img
            src="/images/man_n_woman.png"
            className="rounded-xl w-[100px] absolute top-[-10px] right-[-69px]"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
