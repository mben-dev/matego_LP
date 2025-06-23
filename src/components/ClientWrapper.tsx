"use client";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

interface ClientWrapperProps {
  children: React.ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent any flashing by setting a minimum loading time
    const minLoadTime = setTimeout(() => {
      // Animation will complete and call handleLoadingComplete
    }, 1000);

    return () => clearTimeout(minLoadTime);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default ClientWrapper;
