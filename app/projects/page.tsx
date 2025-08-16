
import { LinkTextEffect } from '@/components/effect/useLinkTextEffect';
import workData from '@/lib/WorkData.json';
import { Metadata } from 'next';
import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';

const siteUrl = "https://nickdstudio.online";
export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Nick D Studio's digital marketing & web development projects. View our portfolio of successful websites, campaigns & client solutions.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
};

interface WorkItem {
  image: { src: string; alt: string };
  title: string;
  tag: string[];
  targetLink: string;
  link: string;
}

export default function Page() {
  const AllWork: WorkItem[] = workData.AllWork;

  return (
    <section>
      <div className='w-full flex flex-wrap justify-between max-lg:justify-center mt-10'>
        {AllWork.map((item, index) => (
        <div
          key={index}
          aria-label={`Slide ${index + 1}: ${item.title}`}
          className=" shrink-0 w-[93%] lg:w-[49%] h-fit pb-10 shadow-2xl shadow-blue-600/15 backdrop-blur-lg rounded-xl"
        >
          <div className="size-full rounded-3xl">
            <Image
              src={item.image.src}
              width={500}
              height={500}
              className="!h-[62vw] md:!h-[59vw] lg:!h-[21em] xl:!h-[28em] size-full rounded-xl"
              alt={item.image.alt}
              priority={index === 0}
            />
          </div>

          <div className="w-full pl-2 pt-3 md:pt-5 flex flex-col gap-2.5 md:gap-3">
            <div className="flex flex-wrap gap-2">
              {item.tag.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-[2vw] md:text-[.75em] lg:text-[.6.5em] xl:text-[.75em] text-zinc-300/70 font-[f3] font-semibold uppercase leading-[1] tracking-wider px-3 text-center py-2 border border-white/40 rounded-full w-fit"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <a
                href={item.targetLink}
                className="w-fit text-[6.5vw] md:text-[2.2em] lg:text-[2em] xl:text-[2.5em] text-zinc-200 font-[f1] font-semibold leading-[1] flex items-end scale-y-[.95] group"
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
        </div>
        ))}
      </div>
    </section>
  );
}
