import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function TestimonialsVideo() {
  return (
    <>
      <div className='relative w-full lg:w-1/2 h-[58vw] md:h-[53vw] lg:h-[20em] xl:h-[28em] bg-orange-300/20 md:bg-orange-300/10 backdrop-blur-md flex items-center justify-center border-[1.5px] border-zinc-300/30 rounded-4xl'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1'>
          <span className='block text-[2.5em] font-[f3] font-[900]'>
           {/* <FaPlay /> */}
           SOON...
          </span>
        </div>

      <video 
        className='w-[98%] h-[97%] bg-orange-700 rounded-4xl'/>
      </div>
    </>
  )
}
