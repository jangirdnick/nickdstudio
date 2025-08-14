"use client"

import { LinkTextEffect } from '@/components/effect/useLinkTextEffect'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Menu from './Menu'

export default function Header() {

  const [isClicked, setIsClicked] = useState(false);

  const menuItems = [
    {"text": "Home", "href": "/"},
    {"text": "Projects", "href": "/projects"},
    {"text": "Services", "href": "/services"}
  ]

  const baseClasses = "linkText flex text-[1.2em] text-zinc-200/85 font-[f2] font-[500] tracking-wide leading-[1] hover:text-orange-300 ease-in-out duration-200"



    // ✅ Touch Controls for Swipe
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchEndX = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = () => {
      if (touchStartX !== 0 && touchEndX !== 0) {

      const swipeDistance = touchStartX - touchEndX;

      // Swipe left → open menu
      if (swipeDistance > 70 && !isClicked) {
        setIsClicked(true);
      }

      // Swipe right → close menu
      if (swipeDistance < -70 && isClicked) {
        setIsClicked(false);
      }
    }

      touchStartX = 0;
      touchEndX = 0;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isClicked]);


  return (
    <header className='w-full md:px-5'>
      <div className='w-full px-5 py-9 md:px-10 md:py-10 bg-zinc-900/70 text-white flex items-center justify-between border-t-[1.5px] border-zinc-300/30 shadow-sm rounded-b-4xl md:rounded-4xl'>
        <div>
        <Link href='/' className='relative text-[1.8em] font-[f2] font-semibold leading-[1]'>
            NDS
        </Link>
        </div>
        <div className='md:w-[86%] flex items-center justify-between '>
        <div className='flex items-center gap-16 max-md:hidden'>

          {menuItems.map((item, index) => (
            <Link 
            key={index}
            href={item.href}
            className={baseClasses}>
              <LinkTextEffect text={item.text}/>
            </Link>
          ))}

        </div>

  
         <div 
           className="px-4 py-2 flex flex-col gap-1 cursor-pointer group"
           onClick={() => setIsClicked(!isClicked)}
         >
           <span className="w-12 h-[2px] bg-zinc-300 leading-[1] -translate-x-2 group-hover:translate-x-0 duration-500" />
           <span className="w-12 h-[2px] bg-zinc-300 leading-[1] translate-x-2 group-hover:translate-x-0 duration-500" />
         </div>

        </div>
      </div>

      <Menu isClicked={isClicked} setIsClicked={setIsClicked} />
    </header>
  )
}
