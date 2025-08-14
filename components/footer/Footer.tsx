'use client'

import { LinkTextEffect } from "@/components/effect/useLinkTextEffect";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { IoIosArrowDropup } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";


export default function Footer() {

    const socialLinks = [
    { href: "https://bit.ly/nds_digital", icon: <PiInstagramLogoFill /> },
    { href: "https://bit.ly/nds_digital_fb", icon: <GrFacebookOption /> },
    { href: "https://www.youtube.com/@nickdstudio", icon: <FaYoutube /> },
    { href: "https://bit.ly/nds_linkedin", icon: <FaLinkedinIn /> },
  ];

    const menuItems = [
    { text: "About", href: "/coming-soon" },
    { text: "Service", href: "/services" },
    { text: "Contact Us", href: "/contact" },
    { text: "Blog Post", href: "/coming-soon" },
  ];

    const baseClasses =
    "text-[4vw] md:text-[2.6vw] lg:text-[1.1em] xl:text-[1.3em] font-[f2] font-medium cursor-pointer leading-[1] hover:text-orange-500 ease-in-out duration-200";

  const baseClasses2 =
    "shrink-0 w-fit text-[6vw] md:text-[3vw] lg:text-[1.2em] xl:text-[1.5em] text-zinc-400 leading-[1] cursor-pointer hover:text-orange-500 ease-in-out duration-200 ";


  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start 0.5", "end end"], // Start animation when footer is at 50% of viewport height
  });

  const xTransform = useTransform(scrollYProgress, [0, 0.6], ['-100%', '0%']);

  return (
    <section>
      <footer
      ref={footerRef}
      className="w-full bg-black md:pt-28 pb-5 px-3 md:px-5 mt-10 overflow-x-hidden">

        <div className="w-full lg:w-[50%] max-lg:text-center">
            <h2 className="text-[10vw] md:text-[9vw] lg:text-[2.4em] xl:text-[3em] font-[f1] font-semibold leading-[1.2] md:leading-[1.4]">
                Is your imagination <span className="text-zinc-500">building something</span> amazing?
            </h2>
        </div>

        <div className="w-full flex max-lg:flex-col items-center justify-between max-md:gap-24 max-lg:gap-40 pt-10 pb-5 md:pt-20 md:pb-16 lg:pt-14 lg:pb-10">
            <div>
                <Link href="mailto:info@nickdstudio.online" target="_blank" className="flex gap-2 text-[7vw] md:text-[4.5vw] lg:text-[1.6em] xl:text-[2.1em] font-[f2] font-semibold leading-[1.03] cursor-pointer group hover:underline hover:underline-offset-5">
                    <HiMiniPaperAirplane className="-rotate-[40deg] -mt-1 group-hover:-translate-y-2 group-hover:translate-x-2 ease-in-out duration-300" />
                    <LinkTextEffect text="info@nickdstudio.online" />
                </Link>
            </div>

            <div className="max-md:w-full max-md:px-2 flex items-center max-md:flex-nowrap max-md:justify-between md:gap-20 lg:gap-14">


                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href} className={baseClasses}>
                    <LinkTextEffect text={item.text} />
                  </Link>
                ))}
            </div>
        </div>

        <hr className="w-full opacity-[.3] pb-5"/>

        <motion.div 
          id="logo-container" 
          className="w-full flex justify-between"
        >
          <div className="shrink-0 w-fit px-5 md:px-8 lg:px-10 xl:px-16 overflow-hidden">
            <motion.h1 
              className={`text-[24vw] md:text-[13em] lg:text-[17em] xl:text-[25em] font-['f2'] font-semibold leading-[1] scale-x-[1.5] ease-in-out duration-500`}
              style={{ x: xTransform }}
            >
              N
            </motion.h1>
          </div>
          <div className="shrink-0 w-fit px-5 md:px-8 lg:px-10 xl:px-16 overflow-hidden">
            <motion.h1 
              className={`text-[24vw] md:text-[13em] lg:text-[17em] xl:text-[25em] font-['f2'] font-semibold leading-[1] scale-x-[1.5] ease-in-out duration-500`}
              style={{ x: xTransform }}
            >
              D
            </motion.h1>
          </div>
          <div className="shrink-0 w-fit px-5 md:px-8 lg:px-10 xl:px-16 overflow-hidden">
            <motion.h1 
              className={`text-[24vw] md:text-[13em] lg:text-[17em] xl:text-[25em] font-['f2'] font-semibold leading-[1] scale-x-[1.5] ease-in-out duration-500`}
              style={{ x: xTransform }}
            >
              S
            </motion.h1>
          </div>
        </motion.div>

        <div className="flex items-center justify-between px-1 py-5 md:py-10 lg:hidden">

          <span className="shrink-0 w-fit text-[2.5vw] md:text-[1.5vw] text-zinc-400 font-[f2] leading-[1]">©2025 NDS. All rights reserved</span>
          <Link href="/privacy-policy"className="shrink-0 w-fit text-[2.5vw] md:text-[1.5vw]  text-zinc-400 font-[f2] leading-[1] uppercase cursor-pointer hover:text-white ease-in-out duration-200">Privacy Policy</Link>
          <Link href="/terms-conditions"className="shrink-0 w-fit text-[2.5vw] md:text-[1.5vw]  text-zinc-400 font-[f2] leading-[1] uppercase cursor-pointer hover:text-white ease-in-out duration-200">Terms & Conditions</Link>

        </div>


        <div className="w-full flex items-center justify-between py-3 md:pt-5">
          <div className="flex items-center gap-3 md:gap-8">
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses2}
        >
          {item.icon}
        </Link>
      ))}
          </div>

          <div className="flex items-center gap-16  max-lg:hidden">

            <span className="shrink-0 w-fit text-[3vw] md:text-[2vw] lg:text-[.8em] xl:text-[.95em] text-zinc-400  font-[f2] leading-[1]">©2025 NDS. All rights reserved</span>
            <Link href="/privacy-policy"className="shrink-0 w-fit text-[3vw] md:text-[2vw] lg:text-[.85em] xl:text-[.95em] text-zinc-400 font-[f3] uppercase leading-[1] cursor-pointer hover:text-white ease-in-out duration-200">Privacy Policy</Link>
            <Link href="/terms-conditions"className="shrink-0 w-fit text-[3vw] md:text-[2vw] lg:text-[.85em] xl:text-[.95em] text-zinc-400 font-[f3] uppercase leading-[1] cursor-pointer hover:text-white ease-in-out duration-200">Terms & Conditions</Link>

          </div>

          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 max-md:text-[3.8vw] text-[1.15em] font-[f2] font-semibold uppercase leading-[1] cursor-pointer group"><LinkTextEffect text="Scroll Top"/> <IoIosArrowDropup className="text-[1.20em] group-hover:-translate-y-1 group-hover:-translate-x-1 ease-in-out duration-300" /></div>
        </div>
        


      </footer>
    </section>
  )
}
