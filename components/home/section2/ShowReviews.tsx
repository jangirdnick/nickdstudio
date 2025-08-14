'use client'

import { SiSpringsecurity } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ShowReviews() {

  const ReviewsRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ReviewsRef,
    offset: ['start 70%', 'end start']
  })

  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is mobile (adjust breakpoint as needed)
    function checkMobile() {
      setIsMobile(window.innerWidth <= 768); // 768px is a common mobile breakpoint
    }

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Conditionally set transform based on mobile detection
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['35%', '-20%'] : ['85%', '0%']
  );


  return (
    <section>
      {/* <div data-scroll-speed="-1.5" className="relative z-[2] w-full md:h-[9rem] flex items-center justify-between scale-[1] max-md:flex-col max-md:gap-5 -mt-16 md:-mt-9 xl:-mt-16 max-md:scale-[.9] max-lg:scale-[.85] max-lg:justify-center max-lg:gap-10"> */}
      <motion.div 
      ref={ReviewsRef} 
      style={{y: yTransform}}
      className="relative z-[2] w-full md:h-[9rem] flex items-center justify-between scale-[1] max-md:flex-col max-md:gap-8 -mt-24 md:-mt-9 xl:-mt-16 max-md:scale-[.8] max-lg:scale-[.85] max-lg:justify-center max-lg:gap-10 ">
        <div className="w-full md:w-fit h-full flex flex-col gap-4 px-7 py-9 bg-orange-500/80 backdrop-blur-md text-black border-[1.5px] border-orange-600/80 shadow-inner shadow-orange-500 rounded-4xl">
            <div>
                <h2 className="flex items-center gap-2 text-[7.1vw] md:text-[1.4em] xl:text-[1.5em] font-[f2] font-semibold leading-[1] tracking-[-.5px]">
                  <SiSpringsecurity />
                  Advanced security
                </h2>
            </div>

            <div>
                <p className="w-[95%] md:text-[.8em] xl:text-[.85em] font-[f1] font-bold text-nowrap leading-[1.2] max-md:hidden">
                  Don’t worry, your data is safe. We use tools to protect <br/> your website and customer info.
                </p>
                <p className="w-[95%] text-[3.9vw] font-[f1] font-bold leading-[1.2] md:hidden">
                  Don’t worry, your data is safe. We use tools to protect your website and customer info.
                </p>
            </div>
        </div>

        <div className="w-full md:w-fit h-full flex items-center justify-center bg-[#000] backdrop-blur-md text-white px-10 py-7 border-[1.5px] border-zinc-800/60 shadow-inner shadow-zinc-800  rounded-4xl">
            <div className="w-fit h-full flex flex-col gap-4">
                <div>
                <h2 className="flex items-center gap-2 text-[7.1vw] md:text-[1.5em] xl:text-[1.5em] font-[f2] font-semibold leading-[1] tracking-[-.5px]">
                  <span className="text-[#fbff00]">
                    <FaStar />
                  </span>
                  Reviews
                </h2>
                </div>

                <div className="flex items-center gap-2 xl:gap-4">
                  <div className="shrink-0 w-8 xl:w-8 h-8 xl:h-8 bg-orange-600 rounded-full"></div>
                  <div className="shrink-0 w-8 xl:w-8 h-8 xl:h-8 bg-orange-600 rounded-full"></div>
                  <div className="shrink-0 w-8 xl:w-8 h-8 xl:h-8 bg-orange-600 rounded-full"></div>
                  <div className="shrink-0 w-8 xl:w-8 h-8 xl:h-8 bg-orange-600 rounded-full"></div>
                </div>
            </div>

            <div className="pl-10">
              <div className="w-fit h-fit py-6 px-8 md:py-6 bg-zinc-800/80 backdrop-blur-md text-zinc-200 border-[1.5px] border-zinc-700/60 shadow-inner shadow-zinc-800 rounded-4xl">
                <h2 className="text-[10.5vw] md:text-[2.5em] xl:text-[3em] font-[f3] font-semibold leading-[1]">4,8/5</h2>
              </div>
            </div>

            <div>
            </div>
        </div>

      </motion.div>
    </section>
  )
}
