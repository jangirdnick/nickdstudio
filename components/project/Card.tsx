'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode;
  cardInfo: { title: string, timeDate: string, tag: string[] };
}

export default function Card({ children, cardInfo }: CardProps) {

  return (
        <div className=' shrink-0 relative z-[1] w-[60vw] md:w-[40%] lg:w-[33%] px-5 xl:px-10 py-5 md:py-8 xl:py-12 border border-orange-400 rounded-4xl text-black bg-orange-400 backdrop-blur-lg shadow-inner shadow-orange-300 overflow-hidden'>
            
            <div className='absolute top-0 left-0 z-[-2] w-full h-full flex flex-col items-center justify-center'>
            <motion.div 
            animate={{scale: [1, .8, 1.2, 1, 1.3, .9], scaleX: [1, 1.3, 1.3, 1.1, 1.3], scaleY: [1, 1.3, 1.3, 1.1, .8], x: ['0%', '-60%', '60%', '-30%', '30%', '0%'], y: ['0%', '20%', '-20%', '20%', '-20%']}}
            transition={{duration: 6, repeat: Infinity, repeatType: 'reverse'}}
            className=' shrink-0 w-1/2 h-[80%] bg-orange-300/60 rounded-full blur-[24px]'/>
            <motion.div 
            animate={{scale: [1, .8, 1.2, 1, 1.3, .9], scaleX: [1, 1.3, 1.3, 1.1, 1.3], scaleY: [1, 1.3, 1.3, 1.1, .8], x: ['0%', '60%', '-50%', '30%', '60%', '0%'], y: ['0%', '-40%', '20%', '-20%', '40%']}}
            transition={{duration: 6, repeat: Infinity, repeatType: 'reverse'}}
            className=' shrink-0 w-1/2 h-[80%] bg-orange-300/60 rounded-full blur-[24px]'/>
            <motion.div 
            animate={{scale: [1, .8, 1.2, 1, 1.3, .9], scaleX: [1, 1.3, 1.3, 1.1, 1.3], scaleY: [1, 1.3, 1.3, 1.1, .8], x: ['0%', '40%', '30%', '-30%', '30%', '0%'], y: ['0%', '0%', '20%', '-20%', '0%']}}
            transition={{duration: 6, repeat: Infinity, repeatType: 'reverse'}}
            className=' shrink-0 w-1/2 h-[80%] bg-orange-300/60 rounded-full blur-[24px]'/>
            </div>

            <span className=' absolute top-5 right-5 bg-orange-400/80 backdrop-blur-lg text-[.9em] xl:text-[1.5em] p-3 border-2 border-zinc-700 rounded-full opacity-[.95]'>
            {children}
            </span>
            <div className='w-fit flex flex-col gap-5'>
              <span className='text-[4.2vw] md:text-[1.2em] xl:text-[2.5em] font-[f2] font-semibold uppercase leading-[1] opacity-[.8]'>{cardInfo.timeDate}</span>
              <p className='text-[9vw] md:text-[2em] xl:text-[3.5em] font-[f1] leading-[1]'>{cardInfo.title}</p>
            </div>
              <div className='w-full pt-5 md:pt-10 flex flex-wrap gap-1 md:gap-2 xl:gap-4'>
                {cardInfo.tag.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="block w-fit text-[2vw] md:text-[.6em] xl:text-[.85em] px-2 md:px-4 py-1 border rounded-full">
                      {tag}
                  </span>
                ))}
              </div>
        </div>
  )
}
