"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Load the animation data
    fetch("/animations/flow1.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  const handleAnimationComplete = () => {
    // Add a small delay before hiding the loading screen
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Additional delay for fade out
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={true}
            onComplete={handleAnimationComplete}
            style={{
              width: 600,
              height: 400,
            }}
          />
        )}
        {/* <div className="mt-8">
          <div className="animate-pulse flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LoadingScreen;
