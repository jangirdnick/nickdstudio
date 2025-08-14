import Image from 'next/image';
import { useRef } from 'react';
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg';


interface responsiveImageProps {
  responsiveImage: {
src: string;
alt: string;
}[];
}

export default function RSImageSlider({ responsiveImage }: responsiveImageProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / (2 / 0.6),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / (2 / 0.6),
        behavior: 'smooth',
      });
    }
  };

  // ✅ Crop the image from top using Cloudinary transformations
  const getCroppedUrl = (url: string): string =>
    url.replace('/upload/', '/upload/c_crop,g_north,y_90,w_2000/');

  return (
    <div className='w-full h-fit pt-0 md:pt-16 xl:pt-24 flex flex-col gap-5'>
      <div className='flex justify-between'>
        <h3 className='text-[5.2vw] md:text-[3.5vw] lg:text-[2.3em] xl:text-[3em] text-zinc-200 font-["f1"] font-semibold leading-[1]'>
          Responsive
        </h3>

        <div className='flex gap-4'>
          <button
            onClick={scrollLeft}
            className='w-8 h-8 xl:w-10 xl:h-10 bg-white text-[1em] xl:text-[1.2em] text-black flex items-center justify-center rounded-full cursor-pointer hover:scale-[.9] hover:bg-orange-400 duration-200'
          >
            <CgArrowLeft className='font-bold' />
          </button>
          <button
            onClick={scrollRight}
            className='w-8 h-8 xl:w-10 xl:h-10 bg-white text-[1em] xl:text-[1.2em] text-black flex items-center justify-center rounded-full cursor-pointer hover:scale-[.9] hover:bg-orange-400 duration-200'
          >
            <CgArrowRight className='font-bold' />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className='w-full flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide rounded-2xl md:rounded-4xl ease-in-out duration-200'
      >
        {responsiveImage.length > 0 ? (
          responsiveImage.map((img, i) => (
            <div
              key={i}
              className='shrink-0 w-[38vw] md:w-fit h-[80vw] lg:h-[50vh] xl:h-[34em] bg-zinc-800 rounded-2xl md:rounded-4xl overflow-hidden ease-in-out duration-200'
            >
              <Image
                src={getCroppedUrl(img.src)}
                alt={getCroppedUrl(img.alt)}
                width={2000}
                height={500}
                className='w-full h-full object-cover md:object-contain brightness-[.88] contrast-[1.2] hue-rotate-[-2deg]'
              />
            </div>
          ))
        ) : (
          <div className="text-white text-lg">No images found.</div>
        )}
      </div>
    </div>
  );
}
