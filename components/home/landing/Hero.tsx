import { TextScroll } from "@/ui/text-scroll";
import { FaPlay } from "react-icons/fa";
import IntroDuctionVideo from "./IntroDuctionVideo";
import { useState } from "react";


export default function Hero() {


  const [vlapy, SetVplay] = useState(false)
  
  return (
    <section className="">
      <div className="w-full h-fit flex items-center max-lg:flex-col max-lg:gap-4 md:px-5 lg:px-10 py-10 md:py-20  bg-zinc-900/70 text-white md:border-b-[1.5px] border-zinc-300/30 shadow-sm rounded-4xl">
      <div className="md:w-full lg:w-1/2 flex flex-col gap-4 max-lg:items-center">
        <h1 className="lg:pl-10 xl:pl-20 text-[18vw] md:text-[8em] lg:text-[5em] xl:text-[7em] max-lg:text-center font-semibold font-[f1] leading-[1] tracking-[-.2rem] scale-x-[1.3] scale-y-[.99]">
               Superior 
               <br/>Growth.
            {/* <span className="block leading-[1]">Business</span> */}
        </h1>

        <div>
            <p className="text-[3vw] text-zinc-400 md:text-[1em] lg:text-[.9em] xl:text-[1.3em] font-[f3] font-semibold leading-[1.4] lg:pl-4 max-lg:text-center">
            We help businesses grow with powerful <br/> scalable online services.

            </p>
        </div>
      </div>

      <div className="w-[90%] md:w-[80%] lg:w-1/2 max-lg:pt-14 max-md:pt-8 flex max-lg:justify-center max-lg:ml-5">


        {/* class  origin-right -skew-x-6 -skew-y-1 -rotate-x-3 */}
      <div className=" w-full h-[60vw] -mt-2 -ml-5 md:h-[19em] lg:h-[18em] xl:h-[27rem] bg-orange-700/20 border-[1.5px] border-zinc-400/50 shadow-sm origin-center -skew-x-6 -skew-y-1 -rotate-x-3 rounded-4xl scale-[.95] lg:scale-[.9] overflow-hidden">


        <div className="w-full h-full relative brightness-[.95] contrast-[1.15]">
        <video poster={'/vt1.png'}  className="w-full h-full object-cover blur-md" playsInline/>
         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div 
          onClick={() => SetVplay(!vlapy)}
          className="relative cursor-pointer group hover:scale-[.9] active:scale-[1.5] active:opacity-0 transition-transform ease-in-out duration-300">
            <FaPlay className="text-[3.5em] text-orange-600/90 border-[1.5px] border-orange-400/50 bg-zinc-800/50 p-3 rounded-full group-hover:bg-orange-800/50 transition-transform ease-in-out duration-300" />
            <div className="absolute top-0 left-0  w-full h-full p-4 bg-zinc-400/70 blur-lg rounded-full"></div>
          </div>
         </div>
        </div>
      </div>

      </div>

      <div className=" relative w-full py-10 md:hidden">
        <TextScroll text='Scroll Left ← * ' className='text-[6vw] font-[f2] font-semibold uppercase leading-[1.5]' />

        <div className=" absolute top-0 -left-10  w-28 h-full bg-black blur-lg"></div>
        <div className=" absolute top-0 -right-10 w-28 h-full bg-black blur-lg"></div>

      </div>

      </div>


      <IntroDuctionVideo vplay={vlapy} SetVplay={SetVplay} />
    </section>
  )
}
