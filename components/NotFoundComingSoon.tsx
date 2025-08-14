'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./effect/Button";
import { useEffect, useState } from "react";


export default function NotFoundComingSoon({title, size, size2}:{title:string, size: string, size2: string}) {

  const [fsize, setFsize] = useState('')

  useEffect(() => {
  const handleResize = () => {
    setFsize(window.innerWidth < 768 ? `${size2}vw` : `${size}em`);
  };
  handleResize(); // Initial call
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [size, size2]);

  return (
    <section>
      <div className="relative w-[97%] max-md:mx-auto md:w-full h-fit flex flex-col items-center justify-center gap-2 md:px-5 lg:px-10 py-20 mt-10 bg-white text-black shadow-inner shadow-zinc-600 rounded-4xl">
    
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <h1
          className="flex flex-col pt-10  text-zinc-300 font-[f2] font-bold max-md:text-center md:text-nowrap leading-[.9] md:leading-[1] text-shadow-2xs text-shadow-zinc-400/80 blur-[0.5px] max-md:scale-[1]  max-xl:!scale-[.8]"
          style={{ fontSize: fsize }}>
            {title}
          </h1>
      </div>
      
      <div className="w-full md:w-[80%] lg:w-1/2 pointer-events-none">
        <div className=" w-full h-[60vw] md:h-[19em] lg:h-[18em] xl:h-[27rem] bg-orange-700/0 rounded-4xl ">
        <div className="w-full h-full relative scale-[1.1]">
          <Image src={'https://res.cloudinary.com/dbbpe98lt/image/upload/v1754669868/m1_s8ymgf.png'} alt="m1" fill className="object-contain brightness-[.85] contrast-[1.5] hue-rotate-[-5deg]" />

          <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{
          x: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
          y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
        }}
        className="absolute top-1/6 xl:top-1/5 left-[23%] xl:left-[28%] max-xl:scale-[.6]"
      >
        <Image
          src={'https://res.cloudinary.com/dbbpe98lt/image/upload/v1754746065/ic3_jkkix5.png'}
          alt="google search"
          width={100}
          height={100}
          className="object-cover brightness-[.95] contrast-[1.15] hue-rotate-[-5deg]"
        />
          </motion.div>
    
          <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          x: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
          y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
        }}
        className="absolute top-1/2 left-[13%] xl:left-[20%] max-xl:scale-[.6]"
      >
        <Image
          src={'https://res.cloudinary.com/dbbpe98lt/image/upload/v1754746066/ic2_fhoa6y.png'}
          alt="google search"
          width={130}
          height={130}
          className="object-cover brightness-[.95] contrast-[1.15] hue-rotate-[-5deg]"
        />
          </motion.div>
    
          <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -25, 25, 0],
        }}
        transition={{
          x: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
          y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
        }}
        className="absolute top-1/7 xl:top-1/6 right-[20%] xl:right-[28%] max-xl:scale-[.7]"
      >
        <Image
          src={'https://res.cloudinary.com/dbbpe98lt/image/upload/v1754746064/ic1_plzlow.png'}
          alt="google search"
          width={100}
          height={100}
          className="object-cover brightness-[.95] contrast-[1.15] hue-rotate-[-5deg]"
        />
          </motion.div>
    
          <motion.div
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          x: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
          y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
        }}
        className="absolute top-1/2 right-[17%] xl:right-[25%] max-xl:scale-[.7]"
      >
        <Image
          src={'https://i.pinimg.com/originals/60/65/4b/60654be978b2c3c653333e205859c69f.gif'}
          alt="google search"
          width={70}
          height={70}
          className="object-cover brightness-[.95] contrast-[1.15] hue-rotate-[-5deg] rounded-full"
        />
          </motion.div>
        </div>
        </div>
      </div>

      <div>
        <div 
        className="mt-2 cursor-pointer mix-blend-difference max-lg:scale-[.6] scale-[.85]"> 
        <Button link="/"  title="Back to Home"  />
        </div>
      </div>
      </div>
    </section>
  )
}
