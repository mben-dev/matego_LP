/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

type ThemeSwitchProps = {
  onSetMyTheme: (theme: "orange" | "green") => void;
  myTheme: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ onSetMyTheme, myTheme }) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleThemeSwitch = () => {
    setIsAnimating(true);
    // Change theme after a short delay to sync with animation
    setTimeout(() => {
      onSetMyTheme(myTheme == "orange" ? "green" : "orange");
      setIsAnimating(false);
    }, 400);
  };
  return (
    <div className="absolute top-[50%] left-[62%] transform -translate-x-1/2 -translate-y-1/2 z-10">
      {" "}
      <div className="flex items-start space-x-4">
        {/* Main Rectangle Animation */}
        <motion.div
          initial={{
            width: "2.5rem",
            height: "2.5rem",
            x: -60,
          }}
          animate={{
            width: isAnimating ? "2.5rem" : "5rem",
            height: isAnimating ? "2.5rem" : "5rem",
            x: isAnimating ? 80 : 0,
            scale: isAnimating ? 0.9 : 1,
          }}
          transition={{
            duration: isAnimating ? 0.4 : 0.8,
            ease: "easeInOut",
            delay: isAnimating ? 0 : 0.2,
          }}
          className={`${
            myTheme == "orange" ? "bg-matego_orange " : "bg-matego_green"
          }`}
        ></motion.div>
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          {" "}
          {/* Main Text Animation */}
          <motion.p
            initial={{
              opacity: 0,
              x: -20,
              scale: 0.8,
            }}
            animate={{
              opacity: isAnimating ? 0.7 : 1,
              x: isAnimating ? -30 : 0,
              scale: isAnimating ? 0.85 : 1,
              fontSize: isAnimating ? "1rem" : "1.25rem",
            }}
            transition={{
              duration: isAnimating ? 0.4 : 0.6,
              ease: "easeOut",
              delay: isAnimating ? 0 : 0.8,
            }}
            className={`${
              myTheme == "orange" ? "text-matego_orange" : "text-matego_green"
            } text-xl max-lg:text-lg`}
          >
            {myTheme == "orange" ? "Mangue, Passion" : "Gingembre"}
          </motion.p>{" "}
          {/* Arrow Animation */}
          <motion.img
            initial={{
              opacity: 0,
              rotate: -90,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.0,
            }}
            src={`/images/arrow_${
              myTheme == "orange" ? "mangue" : "gingembre"
            }.png`}
            alt=""
          />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 1.2,
        }}
        className="ml-24 flex space-x-4 hover:cursor-pointer"
        onClick={handleThemeSwitch}
      >
        {" "}
        {/* Secondary Rectangle Animation */}
        <motion.div
          initial={{
            width: "1.5rem",
            height: "1.5rem",
            x: -40,
          }}
          animate={{
            width: isAnimating ? "5rem" : "2.5rem",
            height: isAnimating ? "5rem" : "2.5rem",
            x: isAnimating ? -120 : 0,
            scale: isAnimating ? 1.1 : 1,
          }}
          transition={{
            duration: isAnimating ? 0.4 : 0.6,
            ease: "easeInOut",
            delay: isAnimating ? 0 : 1.4,
          }}
          className={`${
            myTheme == "orange" ? "bg-matego_green" : "bg-matego_orange"
          }`}
        ></motion.div>
        {/* Secondary Text Animation */}
        <motion.p
          initial={{
            opacity: 0,
            x: -15,
            scale: 0.9,
          }}
          animate={{
            opacity: isAnimating ? 1 : 1,
            x: isAnimating ? -100 : 0,
            scale: isAnimating ? 1.2 : 1,
            fontSize: isAnimating ? "1.25rem" : "1.25rem",
          }}
          transition={{
            duration: isAnimating ? 0.4 : 0.5,
            ease: "easeOut",
            delay: isAnimating ? 0 : 1.6,
          }}
          className={`${
            myTheme == "orange" ? "text-matego_green" : "text-matego_orange"
          } text-xl `}
        >
          {myTheme == "orange" ? "Gingembre" : "Mangue, Passion"}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThemeSwitch;
