import LinkIcons from "@/components/LinkIcons";
import { LinkTextEffect } from "@/components/effect/useLinkTextEffect";
import Link from "next/link";
import React from "react";
import { SiMailgun } from "react-icons/si";

export default function CFS1() {
  return (
    <div className="shrink-0 w-full lg:w-[50%] h-full flex flex-col gap-8 px-3 md:px-10 pt-8 md:pt-12 lg:pt-20">
      <div>
        <h2 className="flex items-center gap-2 text-[3.8vw] md:text-[2vw] lg:text-[.9em] xl:text-[1em] text-orange-500 font-light font-[f1] leading-[1.2] opacity-[.95]">
          <span className=" inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          Collaborate with us
        </h2>
      </div>

      <div>
        <h1 className="md:w-[85%] text-[6vw] md:text-[4.1vw] lg:text-[2em] xl:text-[3em] font-[f1] leading-[1.2]">
          Crafting Experiences That Make Your Vision Shine
        </h1>
      </div>

      <hr className="w-[15%] opacity-[.4]" />

      <div>
        <Link href="mailto:info@nickdstudio.online" target="_blank" className="w-fit flex items-center gap-2 text-[3.5vw] md:text-[2.1vw] lg:text-[1em] xl:text-[1.2em] font-[f3] font-[100] underline underline-offset-5 leading-[1] opacity-[.7] cursor-pointer group">
          <SiMailgun className="group-hover:-translate-y-2 group-hover:translate-x-2 ease-in-out duration-300" />
          <LinkTextEffect text="info@nickdstudio.online" />
        </Link>
      </div>

      <div className=" mt-3 md:mt-10">
        <LinkIcons />
      </div>
    </div>
  );
}
