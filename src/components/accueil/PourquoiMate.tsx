/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const PourquoiMate = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleImageClick = (index: number) => {
    setSelectedItem(index);
  };

  const carrouselItems = [
    {
      src: "/images/matte_s1.webp",
      alt: "Image 1",
    },
    {
      src: "/images/matte_s2.webp",
      alt: "Image 2",
    },
    {
      src: "/images/matte_s3.webp",
      alt: "Image 3",
    },
  ];

  return (
    <div className="absolute inset-0 z-10 max-w-[1400px] mx-auto pt-20">
      <div className="w-full flex space-x-32 h-screen relative">
        <div className="text-primary">
          <h2 className="text-[60px] font-bold  uppercase tracking-tight leading-tight">
            Pourquoi
            <br /> le Mate ?
          </h2>
          <p className=" text-[20px] font-medium uppercase ">
            Riche en antioxydants, vitamines (A, C, B1, B2) <br /> et minéraux
            (magnésium, calcium, fer)
          </p>
          <p className="text-sm text-secondary mt-4">
            La yerba maté est bien plus qu&apos;une boisson <br /> énergisante :
            c&apos;est un concentré de vitalité 100 % <br /> naturel. Grâce à sa
            teneur en caféine naturelle et <br /> en théobromine, elle booste
            l&apos;énergie de manière <br /> progressive, sans les coups de
            fatigue du café.
            <br /> Elle améliore la concentration, soutient les
            <br /> performances physiques et aide à brûler les
            <br /> graisses, tout en favorisant la digestion et la
            <br /> détoxification de l&apos;organisme.
          </p>
        </div>
        <div className="max-w-[900px] mt-24 flex space-x-2 z-20">
          {carrouselItems.map((item, index) => {
            const isSelected = selectedItem === index;
            return (
              <motion.img
                key={index}
                src={item.src}
                alt={item.alt}
                className={`${
                  isSelected ? "w-[600px]" : "w-[150px] object-contain"
                } h-[400px] object-cover rounded-lg shadow-lg transition-all duration-300 cursor-pointer`}
                onClick={() => handleImageClick(index)}
                animate={{
                  width: isSelected ? 600 : 150,
                }}
                transition={{
                  delay: isSelected ? 0.038 : 0,
                }}
              />
            );
          })}
        </div>
        <img
          className="absolute bottom-[80px] right-[-20px] z-0 w-[500px] "
          src="/images/robot.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default PourquoiMate;
