'use client'

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface PageLoadingProps {
  isLoading: boolean;
}

const blockAnim: Variants = {
  initial: { opacity: 0 },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.01 * i, ease: "easeOut"},
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.01 * i, ease: "easeIn" },
  }),
};

const textAnim: Variants = {
  initial: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  closed: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export default function PageLoading({ isLoading }: PageLoadingProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  const shuffle = (arr: number[]): number[] => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const getColumnCount = () => (dimensions.width < 768 ? 10 : 20);

  const getBlocks = (): ReactNode[] => {
    if (!isMounted) return [];

    const blockSize = dimensions.width / getColumnCount();
    const amountOfBlocks = Math.ceil(dimensions.height / blockSize);
    const delays = shuffle(Array.from({ length: amountOfBlocks }, (_, i) => i));

    return delays.map((randomDelay, i) => (
      <motion.div
        key={i}
        variants={blockAnim}
        initial="initial"
        custom={randomDelay}
        animate={isLoading ? "open" : "closed"}
        style={{ height: `${blockSize}px` }}
        className="w-full bg-orange-700"
      />
    ));
  };

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 z-[999] w-full h-screen flex overflow-hidden pointer-events-none cursor-none">
      {/* Responsive column count */}
      {Array.from({ length: getColumnCount() }, (_, i) => (
        <div
          key={i}
          style={{ width: `${100 / getColumnCount()}vw` }}
          className="h-full"
        >
          {getBlocks()}
        </div>
      ))}

      {/* Loading text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        variants={textAnim}
        initial="initial"
        animate={isLoading ? "open" : "closed"}
      >
        <h1 className="flex text-[16vw] md:text-9xl font-[f2] font-bold text-white leading-[1] animate-pulse">
          {["N", "D", "S"].map((letter, idx) => (
            <motion.span
              key={letter}
              animate={{
                fontVariationSettings: ['"wght" 100', '"wght" 1000'],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: idx * 0.2,
              }}
              className="block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </div>
  );
}
