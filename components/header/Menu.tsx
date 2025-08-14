"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Variants } from "framer-motion";
import Button from "../effect/Button";
import LinkIcons from "../LinkIcons";
import { RxCross2 } from "react-icons/rx";

const blockAnim: Variants = {
  initial: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.02 * i, ease: "easeOut" },
  }),
  closed: (i: number) => ({
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, delay: 0.02 * i, ease: "easeIn" },
  }),
};

const menuDev: Variants = {
  initial: { opacity: 0, display: "none" },
  open: { opacity: 1, display: "flex", transition: { duration: 0.6, ease: "easeOut" } },
  closed: { opacity: 0, display: "none", transition: { duration: 0.6, ease: "easeIn" } },
};

const section2: Variants = {
  initial: { opacity: 0, scale: 0.85 },
  open: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  closed: { opacity: 0, scale: 0.85, transition: { duration: 0.6, ease: "easeIn" } },
};

const navLink: Variants = {
  initial: { opacity: 0, x: -30 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.1 * i + 0.8, ease: "easeOut" },
  }),
  closed: { opacity: 0, x: -30, transition: { duration: 0.1, ease: "easeIn" } },
};

export default function Menu({
  isClicked,
  setIsClicked,
}: {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isClicked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isClicked]);

  const shuffle = (arr: number[]): number[] => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const getColumnCount = () => {
    return dimensions.width < 768 ? 10 : 20;
  };

  const getBlocks = () => {
    const { width, height } = dimensions;
    if (!width || !height) return [];

    const columnCount = getColumnCount();
    const blockSize = width / columnCount; // height of each block = column width for square
    const amountOfBlocks = Math.ceil(height / blockSize);
    const delays = shuffle(Array.from({ length: amountOfBlocks }, (_, i) => i));

    return delays.map((randomDelay, i) => (
      <motion.div
        key={i}
        variants={blockAnim}
        initial="initial"
        custom={randomDelay}
        animate={isClicked ? "open" : "closed"}
        style={{
          height: `${100 / columnCount}vw`, // dynamically match height to column width
          width: "100%",
        }}
        className="bg-orange-700/80 backdrop-blur-lg"
      />
    ));
  };

  const navItems = [
  {"text": "Home", "link": "/"},
  {"text": "Projects", "link": "/projects"},
  {"text": "Services", "link": "/services"},
  {"text": "Blog", "link": "/coming-soon"}
  ]

  return (
    <motion.div
      variants={menuDev}
      initial="initial"
      animate={isClicked ? "open" : "closed"}
      className="fixed top-0 left-0 z-[999] w-full h-screen flex overflow-hidden"
    >
      {Array.from({ length: getColumnCount() }, (_, i) => (
        <div
          key={i}
          style={{
            width: `${100 / getColumnCount()}vw`,
            height: "100%",
          }}
        >
          {getBlocks()}
        </div>
      ))}

      <motion.div
        variants={section2}
        initial="initial"
        animate={isClicked ? "open" : "closed"}
        className="absolute top-0 left-0 w-full h-full px-5 md:px-16 lg:px-5 xl:px-16 py-10"
      >
        {/* TOP SECTION */}
        <div className="w-full flex items-center justify-center">
          <div
            className="cursor-pointer translate-y-1/2"
            onClick={() => setIsClicked(!isClicked)}
          >
            <RxCross2 className="text-[13vw] md:text-[3em] lg:text-[2.1em] xl:text-[2.5em] p-1 border border-dashed leading-[0] lg:leading-[1] rounded-full bg-orange-500 text-black hover:bg-orange-600 ease-in-out duration-200" />
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="w-full lg:bg-orange-700 pb-0 lg:pb-16 lg:border border-white border-dashed rounded-4xl">
          <div className="w-full lg:h-[70vh] flex max-lg:flex-col-reverse lg:justify-between pt-20 lg:pt-40">
            <div className="w-full lg:w-1/2 pt-10 lg:pr-10 lg:border-r-2 border-dashed">
              <div className="max-lg:hidden w-full flex justify-end">
                <h2 className="flex flex-row-reverse items-center gap-2 text-[3.8vw] md:text-[2vw] lg:text-[.9em] xl:text-[1em] text-zinc-900 font-semibold font-[f1] leading-[1.2] opacity-[.95]">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Collaborate with us
                </h2>
              </div>

              <div className="w-full flex flex-col items-end">
                <h1 className="xl:w-[85%] text-[6vw] md:text-[4.1vw] lg:text-[2.8em] xl:text-[4em] text-end font-[f2] leading-[1.2] max-lg:hidden">
                  Crafting Experiences That Make Your Vision Shine
                </h1>

                <div className="w-full flex max-lg:justify-center lg:w-fit h-fit pt-5 lg:pr-5 max-lg:scale-[1.1]">
                  <Button title="Get in Touch" link="/contact" anm2={true} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col items-center lg:border-l-2 border-dashed lg:items-start gap-7 max-lg:bg-orange-600 max-lg:!py-8 max-lg:border max-lg:border-zinc-800 max-lg:border-dashed max-lg:rounded-4xl">
              {navItems.map((item, index) => (
                <motion.a
                  href={item.link}
                  key={index}
                  variants={navLink}
                  initial="initial"
                  custom={index}
                  animate={isClicked ? "open" : "closed"}
                  className="flex items-center gap-4 text-[3.6em] xl:text-[5em] text-zinc-300/90 font-['f1'] leading-[1] max-lg:text-black cursor-pointer hover:text-zinc-100 transition-colors duration-300 group"
                >
                  <span className="block w-0 h-0 bg-orange-400 rounded-full group-hover:w-4 group-hover:h-4 ease-linear duration-200"></span>
                  {item.text}
                </motion.a>
              ))}
            </div>
          </div>

          {/* THIRD SECTION */}
          <div className="w-full flex flex-col items-center justify-center gap-8 max-lg:pt-14">
            <hr className="w-[30vw] md:w-[25%] lg:w-[8em] h-[1px] border-2 border-dashed outline-none" />
            <div className="max-lg:scale-[1.1]">
              <LinkIcons gap={4} effect2={true} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
