"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface PageLoaderProps {
  isVisible: boolean;
}

const PageLoader = ({ isVisible }: PageLoaderProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Pulsing Logo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center">
        {" "}
        <Image
          src="/images/matego_big_logo.webp"
          alt="Matego Logo"
          width={128}
          height={128}
          className="object-contain"
        />
      </motion.div>

      {/* Optional loading text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-1/3 text-lg font-medium text-gray-600">
        Chargement...
      </motion.p>

      {/* Optional spinning circle around the logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-40 h-40 border-2 border-transparent border-t-matego_green rounded-full"
      />
    </motion.div>
  );
};

export default PageLoader;
