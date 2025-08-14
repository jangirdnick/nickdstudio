import React from 'react'
import Image from 'next/image'
import { TextScroll } from '@/ui/text-scroll'
import Button from '@/components/effect/Button'
import { LinkTextEffect } from '@/components/effect/useLinkTextEffect'
import TestimonialsVideo from './TestimonialsVideo'

export default function ClientTestimonials() {
  return (
    <section>
      <div className='w-full mt-10 md:mt-20 pt-20 md:pt-32 pb-10 md:px-3 xl:px-10 bg-zinc-900/70 flex flex-col gap-10 rounded-4xl'>
        <div className='flex items-center lg:items-end justify-center lg:justify-between max-lg:flex-col max-lg:gap-10'>
          <div>
            <h1 className='relative w-fit text-[14.5vw] md:text-[12vw] lg:text-[6.3em] xl:text-[7.5em] font-[f1] font-semibold leading-[1]'>             
            <LinkTextEffect text='Client' scrollOn={true} />
            <LinkTextEffect text='Testimonials' scrollOn={true} />
            <span className='block absolute -top-[50%] md:-top-2/5 left-1/2 w-1/3 h-full md:h-[90%] rounded-4xl overflow-hidden'>
              <Image
                src="https://res.cloudinary.com/dbbpe98lt/image/upload/v1754672374/clientTestimonials_mexfzx.webp"
                alt="Client Testimonial"
                fill
                className="w-full h-full object-center"
              />
            </span>
            </h1>
          </div>

          <div className="lg:mb-5 lg:pr-6">
            <Button title='View More' link='/coming-soon'/>
          </div>
        </div>

        <div className='w-full h-fit bg-zinc-700/40 backdrop-blur-md px-4 py-5 rounded-4xl'>

        <div className='w-full mb-5 border-2 border-zinc-500/5 rounded-4xl overflow-hidden'>
          <TextScroll text='Trust Video * ' className='text-[7vw] md:text-[2.5em] font-[f1] font-semibold uppercase leading-[1.5]' />
        </div>

        <div className='w-full flex items-center max-lg:flex-col gap-3 md:gap-2 border border-white/30 p-2 shadow-sm rounded-4xl'>
          <TestimonialsVideo />
          <TestimonialsVideo />
        </div>
        </div>
      </div>
    </section>
  )
}
