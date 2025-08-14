'use client'

import { use } from 'react';
import workData from '@/lib/WorkData.json';
import Image from 'next/image';
import NotFoundComingSoon from '@/components/NotFoundComingSoon';
import Card from '@/components/project/Card';
import { HoverExpand } from "@/ui/hover-expand"



import { TbArrowUpRight, TbWorldSearch } from 'react-icons/tb';
import { FaCalendarDay } from 'react-icons/fa'
import { SiTask } from 'react-icons/si';
import Button from '@/components/effect/Button';
import RSImageSlider from '@/components/project/RSImageSlider';

interface WorkItem {
  image: {
src: string;
alt: string;
};
  title: string;
  tag: string[];
  overview: string;
  targetLink: string;
  link: string;
  date: string;
  location: string;
  completeWork: { title: string, timeDate: string, tag: string[] };
  strategicManagement: { title: string, timeDate: string, tag: string[] };
  discovery: { title: string, timeDate: string, tag: string[] };
  decptopImage: {
src: string;
alt: string;
}[];
  responsiveImage: {
src: string;
alt: string;
}[];
}

export default function ProjectView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const AllWork: WorkItem[] = workData.AllWork;

  const matchedWork = AllWork.find(
    (work: WorkItem) => work.title.toLowerCase() === slug.toLowerCase()
  );


  return matchedWork ? (
    <section>
      <div className='w-full py-10 md:py-16 xl:py-24 max-md:px-3'>

        <div className='w-full flex flex-col items-center justify-center gap-8'>
          <h1 className='text-[8vw] md:text-[7vw] xl:text-9xl text-zinc-400 font-[f1] font-medium leading-[1] text-shadow-2xs text-shadow-zinc-50'>{matchedWork.title}</h1>

            <div className="flex flex-wrap gap-2">
              {matchedWork.tag.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-[1.8vw] md:text-[.75em] lg:text-[.6em] xl:text-[.75em] text-zinc-300/70 font-[f3] font-semibold uppercase leading-[1] tracking-wider px-3 py-2 xl:px-4 xl:py-3 text-center  border border-white/40 rounded-full w-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
        </div>

        <div className='w-full h-[65vw] lg:h-[65vh] xl:h-[60em] mt-10 md:mt-16 xl:mt-24 rounded-4xl overflow-hidden'>
          <Image
          src={matchedWork.image.src} 
          alt={matchedWork.image.alt}
          width={1000} height={500} 
          className='w-full h-full object-cover object-top' />
        </div>

        <div className='w-full h-fit pt-20 xl:pt-32 flex flex-col gap-5'>
          <div>
            <h3 className='text-[4.2vw] md:text-[1.4em] xl:text-[1.8em] text-zinc-200 font-[f1] font-bold leading-[1]'>Project overview</h3>
          </div>

          <div>
            <p className='text-[4vw] md:text-[1.3em] xl:text-[2.1em] text-zinc-500 font-["f1"] font-medium'>{matchedWork.overview}</p>
          </div>

          <div className='flex gap-4 md:gap-10'>
            <div className='flex gap-2 text-[3.2vw] md:text-[1.1em] xl:text-[1.5em] font-[f1] font-light'>
              <strong>Date:</strong>
              <span className='text-zinc-400'> {matchedWork.date}</span>
            </div>
            <div className='flex gap-2 text-[3.2vw] md:text-[1.1em] xl:text-[1.5em] font-[f1] font-light'>
              <strong>Location:</strong>
              <span className='flex items-center gap-5 md:gap-8  text-zinc-400'>
                {matchedWork.location}
                <TbArrowUpRight className='text-[1em] xl:text-[1.2em]' />
              </span>
            </div>
          </div>
        </div>

        <div className='w-full h-fit pt-[14vw] md:pt-[11vw] flex flex-col gap-y-10 md:gap-y-20'>


          <h2 className='relative w-fit mx-auto text-[6.4vw] md:text-[5.1vw] xl:text-[5vw] text-zinc-300 font-[f1] font-medium leading-[1] scale-x-[1.3] md:scale-x-[1.2] xl:scale-x-[1.15]'>
            Creative process
            <span className='block absolute top-1/2 -translate-y-1/2 -left-[5%] w-1/3 h-[200%] bg-black/50 blur-lg'></span>
            <span className='block absolute top-1/2 -translate-y-1/2 -right-[5%] w-1/3 h-[200%] bg-black/50 blur-lg'></span>
          </h2>


          <div className='w-full flex flex-nowrap justify-between max-lg:gap-4 max-lg:overflow-x-scroll'>
  
            <Card cardInfo={matchedWork.discovery}>
              <TbWorldSearch />
            </Card>

            <Card cardInfo={matchedWork.strategicManagement}>
              <SiTask />
            </Card>

            <Card cardInfo={matchedWork.completeWork}>
              <FaCalendarDay />
            </Card>
          </div>

        </div>


        <div className='w-full flex flex-col pt-[12vw]'>

          <h3 className='text-[5.2vw] md:text-[1.8em] xl:text-[2.4em] font-[f1] font-semibold leading-[1]'>Initial concepts</h3>

          <div className='w-full pt-0 md:pt-8 xl:pt-10 flex items-start justify-start overflow-x-scroll'>
          <HoverExpand
            images={matchedWork.decptopImage}
            initialSelectedIndex={3}
            maxThumbnails={20}
          />

          </div>

        </div>

        <RSImageSlider responsiveImage={matchedWork.responsiveImage} />

    <div className='w-full pt-20 lg:py-20 flex justify-between max-lg:flex-col max-lg:gap-8'>
      <div className='w-fit flex lg:flex-col gap-8 max-lg:items-center'>
        <h3 className='text-[5.2vw] md:text-[3vw] lg:text-[1.8em] xl:text-[2.4em] font-[f1] font-semibold leading-[1]'>The Challenges</h3>
        
        <div className=' translate-x-16 xl:translate-x-5 max-md:scale-[.8] max-xl:scale-[.85]'>
        <Button title='View More' link={matchedWork.link} />
        </div>
      </div>

        <p className='w-full lg:w-2/3 text-[4vw] md:text-[2.4vw] lg:text-[1.2em] xl:text-[1.3em] text-zinc-300 font-[f1] max-lg:text-balance'>
          Vinayakartplace needed a reliable and scalable eCommerce platform that could stand out in a competitive market. The primary challenge was to create a modern, user-friendly website optimized for both desktop and mobile devices. This involved setting up a robust WooCommerce system to ensure smooth product and order management, while also implementing strong SEO strategies to boost organic search visibility. Additionally, the website had to deliver fast performance through optimized images and lightweight code. To drive sales and brand awareness, targeted Facebook Ads campaigns were required. Finally, several custom functionalities had to be developed using custom code to meet the unique business needs of the client.
        </p>
    </div>

      </div>
    </section>
  ) : (
    <NotFoundComingSoon title="Coming Soon" size="7" size2="30" />
  );
}
