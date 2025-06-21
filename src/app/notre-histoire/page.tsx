/* eslint-disable @next/next/no-img-element */
"use client";
import ContentOne from "@/components/notreHistoire/ContentOne";
import ContentThree from "@/components/notreHistoire/ContentThree";
import ContentTwo from "@/components/notreHistoire/ContentTwo";
import HistoireMenu from "@/components/notreHistoire/HistoireMenu";
import ScrollingIndicator from "@/components/notreHistoire/ScrollingIndicator";
import { useNavbarTheme } from "@/context/NavbarContext";
import { useState, useEffect } from "react";
import React from "react";

const NotreHistoirePage = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentContent, setCurrentContent] = useState(0); // For tracking scroll-based content

  const { setNavbarTheme } = useNavbarTheme();

  useEffect(() => {
    if ((selectedItem === 0 && currentContent === 0) || selectedItem === 1) {
      setNavbarTheme("light");
    } else {
      setNavbarTheme("dark");
    }
  }, [selectedItem, currentContent, setNavbarTheme]);

  console.log(selectedItem, currentContent);

  const notreHistoireMenu = [
    { href: "/", label: "Notre histoire" },
    { href: "/produit", label: "Qui sommes nous ? Deux potes." },
  ];

  // Content for the first menu item (Notre histoire) - 3 different contents
  const notreHistoireContents = [
    {
      id: 0,
      title: "Le Début de l'Aventure",
      content: "Tout a commencé par une passion commune pour le maté...",
    },
    {
      id: 1,
      title: "La Découverte",
      content: "Nous avons découvert les bienfaits extraordinaires du maté...",
    },
    {
      id: 2,
      title: "Notre Mission",
      content: "Aujourd'hui, nous partageons cette boisson énergisante...",
    },
  ];

  // Handle scroll to change content for the first menu item
  useEffect(() => {
    if (selectedItem !== 0) return; // Only apply scroll logic to first menu item

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which content to show based on scroll position
      const contentIndex = Math.floor(scrollY / (windowHeight * 0.3));
      const clampedIndex = Math.min(
        Math.max(contentIndex, 0),
        notreHistoireContents.length - 1
      );

      setCurrentContent(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedItem, notreHistoireContents.length]);

  // Reset content index when switching menu items
  useEffect(() => {
    setCurrentContent(0);
  }, [selectedItem]);

  return (
    <div className="h-screen w-full relative">
      <div className="fixed inset-0 z-10 flex ">
        {/* Dynamic content that changes based on menu selection and scroll */}
        {selectedItem === 0 ? (
          // First menu item content (changes with scroll)
          <div className="min-w-[1330px] mx-auto pt-[13%] ">
            {currentContent === 0 && <ContentOne />}
            {currentContent === 1 && <ContentTwo />}
            {currentContent === 2 && <ContentThree />}

            {/* Scroll indicator */}
            <ScrollingIndicator
              notreHistoireContents={notreHistoireContents}
              currentContent={currentContent}
            />
          </div>
        ) : (
          // Second menu item content
          <div className="relative w-full h-screen">
            <img
              src="/images/louis_matego.png"
              className="absolute inset-0 w-[100%] h-[100%]"
              alt=""
            />
          </div>
        )}
      </div>

      {/* Fixed UI elements */}
      {selectedItem === 0 && (
        <div className="fixed left-16 bottom-0 h-[72%] w-1 bg-primary z-20"></div>
      )}
      <HistoireMenu
        notreHistoireMenu={notreHistoireMenu}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      {/* Add some height to enable scrolling for the first menu item */}
      {selectedItem === 0 && <div className="h-[300vh] pointer-events-none" />}
    </div>
  );
};

export default NotreHistoirePage;
