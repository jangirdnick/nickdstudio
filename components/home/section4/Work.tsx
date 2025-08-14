import { CardCarousel } from "@/ui/card-carousel"
import { LinkTextEffect } from "@/components/effect/useLinkTextEffect"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WorkData from '@/lib/WorkData.json'

export default function Work() {

  const WorkRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: WorkRef,
    offset: ['start end', 'end start']
  })


  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ['120%', '0%']
  );
  return (
    <section>

      <motion.div 
      ref={WorkRef} 
      style={{y: yTransform}}
      className="relative z-[2] w-fit md:mx-auto  bg-orange-500/70 backdrop-blur-md  text-black px-16 py-10 md:px-24 md:py-12 -mt-16 max-md:-ml-[2.6rem] border-[1.5px] border-orange-400/30 shadow-inner shadow-orange-400 rounded-4xl max-md:scale-[.7]">

        <h1 className="text-[7vw] md:text-[1.5em] xl:text-[2em] text-center font-semibold font-[f1] text-nowrap tracking-tight leading-[1] scale-x-[1.2] scale-y-[.99]">
        <LinkTextEffect text="Our Creation, Your Discovery"  scrollOn={true} />
        </h1>
        
      </motion.div>

      <div className="pt-10 md:pt-20">
        <CardCarousel
          work={WorkData.Work}
          autoplayDelay={4000}
          showPagination={true}
        />
      </div>
    </section>
  )
}
