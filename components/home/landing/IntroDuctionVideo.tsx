"use client"

import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function IntroDuctionVideo({ vplay, SetVplay }: { vplay: boolean, SetVplay: (value: boolean) => void }) {


      useEffect(() => {
        document.body.style.overflow = vplay ? "hidden" : "auto";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [vplay]);


  return (
    <div className={`${vplay ? 'block' : 'hidden'} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] w-[90%] lg:w-[80%] h-[75vw] lg:h-[65vh] xl:h-[50em] rounded-4xl overflow-hidden`}>
      
      {/* Iframe instead of video */}
      <iframe
        src="https://player.cloudinary.com/embed/?cloud_name=dbbpe98lt&public_id=NDS_INTRODUCTION_fwrhl7&profile=cld-default"
        width="640"
        height="360"
        style={{
          height: '100%',
          width: '100%',
          aspectRatio: '640 / 360',
          borderRadius: '2rem'
        }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>

      <div
        onClick={() => SetVplay(!vplay)}
        className="absolute top-5 right-5 leading-[1] hover:scale-[.9] active:scale-[1.5] active:opacity-0 transition-transform ease-in-out duration-300"
      >
        <RxCross2 className="text-[2.2em] text-black bg-orange-400 p-1 border border-black border-dashed rounded-full cursor-pointer" />
      </div>
    </div>
  )
}
