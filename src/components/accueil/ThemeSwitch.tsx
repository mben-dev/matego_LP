/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

type ThemeSwitchProps = {
  onSetMyTheme: (theme: "orange" | "green") => void;
  myTheme: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ onSetMyTheme, myTheme }) => {
  return (
    <div className="absolute  top-[50%] left-[62%] transform -translate-x-1/2  -translate-y-1/2    z-10 ">
      <div className="flex items-start space-x-4 ">
        <div
          className={`${
            myTheme == "orange" ? "bg-matego_orange" : "bg-matego_green"
          } w-20 h-20 `}
        ></div>
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          <p
            className={`${
              myTheme == "orange" ? "text-matego_orange" : "text-matego_green"
            } text-xl`}
          >
            {myTheme == "orange" ? "Mangue, Passion" : "Gingembre"}
          </p>
          <img
            src={`/images/arrow_${
              myTheme == "orange" ? "mangue" : "gingembre"
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div
        className="ml-24 flex space-x-4 hover:cursor-pointer"
        onClick={() => onSetMyTheme(myTheme == "orange" ? "green" : "orange")}
      >
        <div
          className={`${
            myTheme == "orange" ? "bg-matego_green" : "bg-matego_orange"
          } w-10 h-10 `}
        ></div>
        <p
          className={`${
            myTheme == "orange" ? "text-matego_green" : "text-matego_orange"
          } text-xl`}
        >
          {myTheme == "orange" ? "Gingembre" : "Mangue, Passion"}
        </p>
      </div>
    </div>
  );
};

export default ThemeSwitch;
