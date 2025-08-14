"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


interface HoverExpandProps {
  images: {
src: string;
alt: string;
}[];
  initialSelectedIndex?: number;
  maxThumbnails?: number;
}

export function HoverExpand({
  images,
  initialSelectedIndex = 0,
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative">
      <div className=" flex w-fit h-[83vw] md:h-[24em] xl:h-[29em]  gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedIndex === i ? "w-[320px] md:w-[350px] xl:w-[500px]" : "w-4 sm:w-5 md:w-8 xl:w-[50px]"
            }`}
            style={{ height: '100%' }}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <img
                src={imageUrl.src}
                alt={imageUrl.alt}
                className="size-full object-cover transition-transform duration-300 brightness-[.88] contrast-[1.2] hue-rotate-[-2deg]"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/40 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className=" max-md:w-[87vw] max-md:h-[65vw] max-xl:w-[83vw] max-xl:h-[60vw] w-[73vw] h-[46vw] cursor-pointer overflow-hidden rounded-2xl pointer-events-none"
              // style={{ width: '50vw', height: '55vh' }}
            >
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative size-full"
              >
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="absolute left-1/2 top-1/2  size-full -translate-x-1/2 -translate-y-1/2 object-cover brightness-[.88] contrast-[1.2] hue-rotate-[-2deg]"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
