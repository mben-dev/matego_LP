"use client";
import React from "react";
import { motion } from "framer-motion";

type ThemeSwitchProps = {
  onSetMyTheme: (theme: "orange" | "green") => void;
  myTheme: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ onSetMyTheme, myTheme }) => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    // Trigger the initial animation after component mounts
    setHasMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    setIsAnimating(true);
    // Change theme after a short delay to sync with animation
    setTimeout(() => {
      onSetMyTheme(myTheme == "orange" ? "green" : "orange");
      setIsAnimating(false);
    }, 800);
  };
  return (
    <div className="absolute top-[50%] left-[62%] transform -translate-x-1/2 -translate-y-1/2 z-10">
      {" "}
      <div className="flex items-start space-x-4">
        {/* Main Rectangle Animation */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: hasMounted ? 1 : 0,
            width: isAnimating ? "2.5rem" : "5rem",
            height: isAnimating ? "2.5rem" : "5rem",
            x: isAnimating ? 48 : 0, // Move to small rectangle position when animating
            y: isAnimating ? 40 : 0,
            scale: isAnimating ? 0.9 : 1,
          }}
          transition={{
            opacity: { duration: 0.3, delay: 0.2 },
            width: { duration: isAnimating ? 0.8 : 0 },
            height: { duration: isAnimating ? 0.8 : 0 },
            x: { duration: isAnimating ? 0.8 : 0 },
            y: { duration: isAnimating ? 0.8 : 0 },
            scale: { duration: isAnimating ? 0.8 : 0 },
          }}
          className={`w-20 h-20 ${
            myTheme == "orange" ? "bg-matego_orange " : "bg-matego_green"
          }`}></motion.div>
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          {" "}
          {/* Main Text Animation */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isAnimating ? 0.3 : hasMounted ? 1 : 0,
              x: isAnimating ? 30 : 0, // Move with the rectangle
              y: isAnimating ? 40 : 0, // Move down diagonally
              scale: isAnimating ? 0.7 : 1,
              fontSize: isAnimating ? "0.9rem" : "1.25rem",
            }}
            transition={{
              opacity: { duration: 0.3, delay: 0.4 },
              x: { duration: isAnimating ? 0.8 : 0 },
              y: { duration: isAnimating ? 0.8 : 0 },
              scale: { duration: isAnimating ? 0.8 : 0 },
              fontSize: { duration: isAnimating ? 0.8 : 0 },
            }}
            className={`${
              myTheme == "orange" ? "text-matego_orange" : "text-matego_green"
            } text-xl max-lg:text-lg`}>
            {myTheme == "orange" ? "Mangue, Passion" : "Gingembre"}
          </motion.p>{" "}
          {/* Arrow Animation */}
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isAnimating ? 0.3 : hasMounted ? 1 : 0,
              x: isAnimating ? 30 : 0, // Move with the text
              y: isAnimating ? 40 : 0, // Move down diagonally
              scale: isAnimating ? 0.7 : 1,
            }}
            transition={{
              opacity: { duration: 0.3, delay: 0.6 },
              x: { duration: isAnimating ? 0.8 : 0 },
              y: { duration: isAnimating ? 0.8 : 0 },
              scale: { duration: isAnimating ? 0.8 : 0 },
            }}
            src={`/images/arrow_${
              myTheme == "orange" ? "mangue" : "gingembre"
            }.webp`}
            alt=""
          />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: hasMounted ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.3, delay: 0.8 },
        }}
        className="ml-24 flex space-x-4 hover:cursor-pointer"
        onClick={handleThemeSwitch}>
        {" "}
        {/* Secondary Rectangle Animation */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: hasMounted ? 1 : 0,
            width: isAnimating ? "5rem" : "2.5rem",
            height: isAnimating ? "5rem" : "2.5rem",
            x: isAnimating ? -68 : 0, // Move diagonally towards main rectangle position
            y: isAnimating ? -40 : 0, // Move up diagonally
            scale: isAnimating ? 1.1 : 1,
          }}
          transition={{
            opacity: { duration: 0.3, delay: 1.0 },
            width: { duration: isAnimating ? 0.8 : 0 },
            height: { duration: isAnimating ? 0.8 : 0 },
            x: { duration: isAnimating ? 0.8 : 0 },
            y: { duration: isAnimating ? 0.8 : 0 },
            scale: { duration: isAnimating ? 0.8 : 0 },
          }}
          className={`w-10 h-10 ${
            myTheme == "orange" ? "bg-matego_green" : "bg-matego_orange"
          }`}></motion.div>
        {/* Secondary Text Animation */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isAnimating ? 1 : hasMounted ? 1 : 0,
            x: isAnimating ? -68 : 0, // Move with the rectangle diagonally
            y: isAnimating ? -40 : 0, // Move up diagonally
            scale: isAnimating ? 1.3 : 1,
            fontSize: isAnimating ? "1.4rem" : "1.25rem",
          }}
          transition={{
            opacity: { duration: 0.3, delay: 1.2 },
            x: { duration: isAnimating ? 0.8 : 0 },
            y: { duration: isAnimating ? 0.8 : 0 },
            scale: { duration: isAnimating ? 0.8 : 0 },
            fontSize: { duration: isAnimating ? 0.8 : 0 },
          }}
          className={`${
            myTheme == "orange" ? "text-matego_green" : "text-matego_orange"
          } text-xl `}>
          {myTheme == "orange" ? "Gingembre" : "Mangue, Passion"}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThemeSwitch;
