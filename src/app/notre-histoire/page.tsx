"use client";
import { motion } from "framer-motion";
import ContentOne from "@/components/notreHistoire/ContentOne";
import ContentThree from "@/components/notreHistoire/ContentThree";
import ContentTwo from "@/components/notreHistoire/ContentTwo";
import HistoireMenu from "@/components/notreHistoire/HistoireMenu";
import QuiSommeNous from "@/components/notreHistoire/QuiSommeNous";
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
    <>
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>
          Notre Histoire MATEGO - Louis & Mehdi, Fondateurs de la Révolution
          Maté
        </h1>
        <p>
          Découvrez l&apos;histoire passionnante de MATEGO, née de la vision de
          deux amis déterminés à révolutionner le monde des boissons
          énergisantes.
        </p>

        <h2>Le Début de l&apos;Aventure</h2>
        <p>
          Louis, lors de ses interventions dans les classes post-bac, a constaté
          que les étudiants et jeunes actifs étaient souvent accros aux sodas et
          boissons énergisantes chimiques.
        </p>

        <h2>La Vision MATEGO</h2>
        <p>
          Pour offrir une solution différente et plus respectueuse de la santé,
          Louis a imaginé MATEGO : une boisson énergisante 100% naturelle, à
          base de maté.
        </p>

        <h2>L&apos;Équipe Fondatrice</h2>
        <p>
          Mehdi, ami et collaborateur de choix, apporte sa touche créative avec
          son agence One Com pour donner une identité forte à MATEGO.
        </p>

        <h2>Qui Sommes-Nous ?</h2>
        <p>
          Deux potes passionnés, Louis et Mehdi, unis par une mission commune :
          proposer une alternative saine et naturelle aux boissons énergisantes
          traditionnelles.
        </p>

        <h3>Valeurs MATEGO</h3>
        <p>
          Transparence, qualité, naturalité et respect de la santé sont au cœur
          de notre démarche. Fabriqué avec amour à Mulhouse, Alsace.
        </p>
      </div>

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
            <QuiSommeNous />
          )}
        </div>{" "}
        {/* Fixed UI elements */}
        {selectedItem === 0 && (
          <>
            {" "}
            <motion.div
              key={`vertical-line-${currentContent === 0 ? "fall" : "stand"}`}
              className="fixed left-16 bottom-0 h-[72%] w-1 bg-primary z-20"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 1.0,
              }}
            />
            {currentContent >= 0 && (
              <motion.div
                className="fixed left-[3.4%] top-[25.6%] bg-primary w-7 h-7 rounded-full z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.6,
                }}
              />
            )}
            {currentContent >= 1 && (
              <motion.div
                className="fixed left-[3.4%] top-[37.9%] bg-primary w-7 h-7 rounded-full z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.6,
                  delay: 0.2,
                }}
              />
            )}
            {currentContent >= 2 && (
              <motion.div
                className="fixed left-[3.4%] top-[50.2%] bg-primary w-7 h-7 rounded-full z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.6,
                  delay: 0.4,
                }}
              />
            )}
          </>
        )}
        <HistoireMenu
          notreHistoireMenu={notreHistoireMenu}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        {/* Add some height to enable scrolling for the first menu item */}
        {selectedItem === 0 && (
          <div className="h-[300vh] pointer-events-none" />
        )}
      </div>
    </>
  );
};

export default NotreHistoirePage;
