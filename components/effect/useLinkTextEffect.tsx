"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LinkTextEffectProps {
  text: string;
  scrollOn?: boolean;
}

export const LinkTextEffect: React.FC<LinkTextEffectProps> = ({ text, scrollOn = false }) => {
  const [chars, setChars] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const HaddingScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: HaddingScroll,
    offset: ["-1 0.9", "-0.5 0.9"],
  });
  const yTransform = useTransform(scrollYProgress, [0, 0.6], [ "0%", "-105%"]);

  useEffect(() => {
    setChars(text.split(""));
  }, [text]);

  return (
    <div
      ref={HaddingScroll}
      className="flex h-[1.05em] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {chars.map((char, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col"
          initial={{ y: 0 }}
          animate={{ y: isHovered && !scrollOn ? "-1.05em" : 0 }}
          transition={{ duration: 0.2, delay: index * 0.02, ease: "easeOut" }}
          style={{
            y: scrollOn ? yTransform : 0,
            transition: scrollOn
              ? `transform 0.4s ease-in-out ${index * 0.03}s`
              : "none",
          }}
        >
          <span>{char === " " ? "\u00A0" : char}</span>
          <span>{char === " " ? "\u00A0" : char}</span>
        </motion.div>
      ))}
    </div>
  );
};