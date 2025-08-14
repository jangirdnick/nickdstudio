"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { HiOutlineArrowUpRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import { TbArrowUpRight } from "react-icons/tb";
import { LinkTextEffect } from "../components/effect/useLinkTextEffect";

interface WorkItem {
  image: { src: string; alt: string };
  title: string;
  tag: string[];
  targetLink: string;
  link: string;
}

interface CardCarouselProps {
  work: WorkItem[];
  autoplayDelay?: number;
  showPagination?: boolean;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  work,
  autoplayDelay = 1500,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    
    .swiper-slide {
      background-position: center;
      background-size: cover;
      height: fit-content; 
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
    }
    
    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }

  `;

  return (
    <article className="w-ace-y-4 w-full" aria-labelledby="carousel-heading">
      <style>{css}</style>
      <div className="mx-auto w-full md:rounded-[24px] md:border md:border-white/30 md:p-2 shadow-sm md:rounded-t-[44px] ">
        <div className="relative mx-auto flex w-full flex-col md:rounded-[24px] md:border md:border-white/15 md:bg-neutral-500/15 md:p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">


          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className=""
              >
                {work.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    aria-label={`Slide ${index + 1}: ${item.title}`}
                    className="!w-[93%] md:!w-[75%] lg:!w-[60%]. xl:!w-[52%] pb-3 shadow-2xl shadow-blue-600/15 backdrop-blur-lg rounded-xl"
                  >
                    <div className="size-full rounded-3xl">
                      <Image
                        src={item.image.src}
                        width={500}
                        height={500}
                        className="!h-[65vw] md:!h-[46vw] xl:!h-[30em] size-full rounded-xl"
                        alt={item.image.alt}
                        priority={index === 0}
                      />
                    </div>

                    <div className="w-full pl-2 pt-3 md:pt-5 flex flex-col gap-2.5 md:gap-3 ">
                      <div className="flex flex-wrap gap-2">
                        {item.tag.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-[1.8vw] md:text-[.75em] lg:text-[.6.5em] xl:text-[.75em] text-zinc-300/70 font-[f3] font-semibold uppercase leading-[1] tracking-wider px-3 text-center py-2 border border-white/40 rounded-full w-fit"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                      <div>
                        <a
                          href={item.targetLink}
                          className="w-fit text-[7vw] md:text-[2.2em] lg:text-[2em] xl:text-[2.5em] text-zinc-200 font-[f1] font-semibold leading-[1] flex items-end scale-y-[.95] group"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${item.title} project`}
                        >
                          <LinkTextEffect text={item.title} />
                          <span className="text-[1.2em] text-orange-400 font-[900] translate-y-1.5 scale-x-[1] scale-y-[1] group-hover:rotate-45 duration-200">
                            <TbArrowUpRight fontWeight={900} />
                          </span>
                        </a>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
};