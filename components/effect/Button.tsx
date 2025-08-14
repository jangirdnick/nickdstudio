'use client'

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function Button({title, anm2, link}:{title:string, anm2?:boolean, link?: string}) {
  const fliperControls = useAnimation();

  return (
    <>
    {link ? (
    <Link href={link} className="w-32 h-5 flex items-center justify-center flex-nowrap cursor-pointer">
      <motion.div
        initial={{
          paddingTop: '0.8em',
          paddingRight: '1.6em',
          paddingBottom: '0.8em',
          paddingLeft: '1.6em',
        }}
        whileHover={{
          paddingTop: ['1.1em', '0.5em', '0.8em'],
          paddingRight: ['1.8em', '1.4em', '1.6em'],
          paddingBottom: ['1.1em', '0.5em', '0.8em'],
          paddingLeft: ['1.8em', '1.4em', '1.6em'],
          transition: { ease: 'circInOut', duration: 0.3 },
        }}
        onHoverStart={() => fliperControls.start({
          top: ["-10%", '30%', "0%"],
          borderTop: ['1em', '10em', '0em'],
          scale: ['0.8', '1.1', '1'],
          y: '-105%',
          transition: { duration: 0.3 },
        })}
        onHoverEnd={() => fliperControls.start({
          borderTop: '20em',
          top: '100%',
          scale: 1,
          y: '0%',
          transition: { duration: 0.3 },
        })}
        className={`relative shrink-0 w-fit h-fit border ${anm2 ? 'border-zinc-700' : 'border-zinc-400'} border-dashed origin-center text-shadow-2xs text-shadow-white/15 rounded-4xl overflow-hidden
        ${anm2 ? 'bg-orange-500' : 'bg-transparent'} ${anm2 && 'hover:bg-white'}`}
      >
        <div className="h-[.9em] px-1.5 overflow-hidden">
          <motion.span
            animate={fliperControls}
            className={`flex items-end gap-1 text-[.9em] text-nowrap font-[f2] font-semibold scale-x-[1.1] leading-[1] ${anm2 ? 'text-black' : 'text-white'} `}
          >
            {title} <TbArrowUpRight className={`${ anm2 ? 'text-black' : 'text-orange-400'} font-[900]`} />
          </motion.span>
          <motion.span
            animate={fliperControls}
            className={`flex items-end gap-1 text-[.9em] text-nowrap font-[f2] font-semibold scale-x-[1.1] leading-[1]  ${anm2 ? 'text-black' : 'text-white'}`}
          >
            {title} <TbArrowUpRight className='text-orange-400 font-[900]' />
          </motion.span>
        </div>
        <motion.span
          animate={fliperControls}
          className={`absolute top-full left-0 ${anm2 ? 'z-[1]' : 'z-[-1]'} w-full h-full ${anm2 ? 'bg-white' : 'bg-orange-600'}`}
        ></motion.span>
      </motion.div>
    </Link>
    ): (
    <div className="w-32 h-5 flex items-center justify-center flex-nowrap cursor-pointer">
      <motion.div
        initial={{
          paddingTop: '0.8em',
          paddingRight: '1.6em',
          paddingBottom: '0.8em',
          paddingLeft: '1.6em',
        }}
        whileHover={{
          paddingTop: ['1.1em', '0.5em', '0.8em'],
          paddingRight: ['1.8em', '1.4em', '1.6em'],
          paddingBottom: ['1.1em', '0.5em', '0.8em'],
          paddingLeft: ['1.8em', '1.4em', '1.6em'],
          transition: { ease: 'circInOut', duration: 0.3 },
        }}
        onHoverStart={() => fliperControls.start({
          top: ["-10%", '30%', "0%"],
          borderTop: ['1em', '10em', '0em'],
          scale: ['0.8', '1.1', '1'],
          y: '-105%',
          transition: { duration: 0.3 },
        })}
        onHoverEnd={() => fliperControls.start({
          borderTop: '20em',
          top: '100%',
          scale: 1,
          y: '0%',
          transition: { duration: 0.3 },
        })}
        className={`relative shrink-0 w-fit h-fit border ${anm2 ? 'border-zinc-700' : 'border-zinc-400'} border-dashed origin-center text-shadow-2xs text-shadow-white/15 rounded-4xl overflow-hidden
        ${anm2 ? 'bg-orange-500' : 'bg-transparent'} ${anm2 && 'hover:bg-white'}`}
      >
        <div className="h-[.9em] px-1.5 overflow-hidden">
          <motion.span
            animate={fliperControls}
            className={`flex items-end gap-1 text-[.9em] text-nowrap font-[f2] font-semibold scale-x-[1.1] leading-[1] ${anm2 ? 'text-black' : 'text-white'} `}
          >
            {title} <TbArrowUpRight className={`${ anm2 ? 'text-black' : 'text-orange-400'} font-[900]`} />
          </motion.span>
          <motion.span
            animate={fliperControls}
            className={`flex items-end gap-1 text-[.9em] text-nowrap font-[f2] font-semibold scale-x-[1.1] leading-[1]  ${anm2 ? 'text-black' : 'text-white'}`}
          >
            {title} <TbArrowUpRight className='text-orange-400 font-[900]' />
          </motion.span>
        </div>
        <motion.span
          animate={fliperControls}
          className={`absolute top-full left-0 ${anm2 ? 'z-[1]' : 'z-[-1]'} w-full h-full ${anm2 ? 'bg-white' : 'bg-orange-600'}`}
        ></motion.span>
      </motion.div>
    </div>      
    )}
    </>
  );
}