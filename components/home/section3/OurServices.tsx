import Image from "next/image";
import ServiceCard from "./ServiceCard";
import Button from "@/components/effect/Button";
import { LinkTextEffect } from "@/components/effect/useLinkTextEffect";
import ServicesData from "@/lib/ServicesData.json";


export default function OurServices({linkBtn = true, border2 = false}: {linkBtn?: boolean, border2?: boolean}) {
  return (
    <section>
      <div className={`w-full h-fit px-3 md:px-10 pb-20 bg-zinc-900/70 backdrop-blur-md text-white ${ border2 ? 'border-b-[1.5px]' : 'border-[1.5px]'} border-zinc-300/30 shadow-sm rounded-4xl lg:mt-5`}>
        <div className="w-full lg:pl-12 pt-20 md:pt-52 flex items-center lg:items-end justify-center lg:justify-between max-lg:flex-col max-lg:gap-10">
          <div>
            <h1 className="relative w-fit text-[14.5vw] md:text-[12vw] lg:text-[6.3em] xl:text-[7.5em] font-[f1] font-semibold scale-x-[1.2] scale-y-[.99] leading-[1]">
              <LinkTextEffect text="Our" scrollOn={true} />
              <LinkTextEffect text="Expertise" scrollOn={true} />
              <span className='block absolute -top-[50%] md:-top-2/5 left-2/5 w-1/2 h-full md:h-[90%] rounded-4xl overflow-hidden'>
                <Image
                  src="/gif/Expertise.gif"
                  alt="Client Testimonial"
                  fill
                  className="w-full h-full object-center"
                />
              </span>
            </h1>
          </div>

          {linkBtn && 
          <div className="lg:mb-5 lg:pr-6">
            <Button title='View More' link="/services"/>
          </div>
          }
        </div>

        <div className="w-full pt-16 flex items-center gap-10 max-md:flex-col">
          {ServicesData.Services.map((service, index) => (
            <ServiceCard 
              key={index} 
              active={service.active} 
              hs={service.hs} 
              heading={service.heading} 
              description={service.description} 
              tags={service.tags} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
