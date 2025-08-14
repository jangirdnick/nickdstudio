'use client'
import FAQAnswer from '@/components/home/section7/FAQAnswer'
import { LinkTextEffect } from '@/components/effect/useLinkTextEffect'
import FAQDATA from '@/lib/NeedHelpData.json'
import Image from 'next/image'

export default function FAQ() {

  return (
    <section>
      <div className="w-full h-fit flex max-md:flex-col md:justify-between bg-zinc-900/70 px-5 py-20 max-md:pt-10 max-md:pb-5 mt-20 border-[1.5px] border-zinc-300/30 shadow-sm rounded-4xl overflow-hidden ease-linear duration-1000">
      <div className='w-full md:w-fit flex flex-col items-center max-md:justify-center'>
        <div>
          <div className='md:w-[70%] h-24 rounded-4xl overflow-hidden opacity-[.8] brightness-[.8] contrast-[1.5] hue-rotate-[-15deg]'>
            <Image 
            className='w-full h-full object-cover' 
            width={200} height={200}
            src={'https://res.cloudinary.com/dbbpe98lt/image/upload/v1754672207/question_g1nndr.gif'}
            alt='question gif'
            />
          </div>

          <div className='pt-5 md:pt-2'>
            <h1 className='text-[32vw] md:text-[8.5em] font-medium font-[f3] leading-[1] opacity-[.95]'>
              <LinkTextEffect text='Need' scrollOn={true} />
              <div className='-translate-y-[35%]'>
                <LinkTextEffect text='Help?' scrollOn={true} />
              </div>
            </h1>
          </div>
        </div>

      </div>

      <div className='md:w-[60%]'>
        <FAQAnswer faqAnswers={FAQDATA.FaqAnswer} />
      </div>
      </div>
    </section>
  )
}
