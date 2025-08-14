interface ServiceCardProps {
  active: boolean;
  hs: string;
  heading: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({ active, hs, heading, description, tags }: ServiceCardProps) {
  return (
    <article
    className="max-md:w-full w-1/2"
      itemScope
      itemType="http://schema.org/Service">
      <div
      className="relative w-full px-7 py-7 md:px-10 md:py-16 border-[1.5px] border-zinc-300/30 border-dashed rounded-3xl cursor-pointer overflow-hidden group hover:bg-zinc-800/50 hover:backdrop-blur-md  transition-colors ease-in-out duration-75">
      {/* Moved 'active' content from pseudo-element to a span */}
      <span 
        className={`${active ? 'bg-green-600' : 'bg-red-600'} absolute top-0 right-0 w-fit px-4 py-3 md:px-6 md:py-4 text-[2.8vw] md:text-[0.8em] text-white font-[f1] font-bold leading-[1] uppercase rounded-bl-3xl`}>
        {active ? 'Active' : 'Coming Soon'}
      </span>

      <div className="flex flex-col gap-3">
        <div>
          <span className="block w-fit px-4 py-2 bg-[#8c53fe] backdrop-blur-md text-[2.5vw] md:text-[0.7em] xl:text-[0.8em] text-black uppercase font-[f1] font-semibold leading-[1] rounded-full">{hs}</span>
        </div>
        <div>
          <h2 className="text-[7.3vw] md:text-[2.1em] xl:text-[3em] font-[f1] font-semibold leading-[1]">{heading}</h2>
        </div>
      </div>

      <div className="xl:w-[27vw] pt-5">
        <p className="max-md:text-[3.2vw] max-xl:text-[0.85em] text-zinc-400 font-[f1] font-semibold">{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-5">
        {tags.map((tag, index) => (
          <span key={index} className="block w-fit bg-zinc-800/60 backdrop-blur-md px-3 py-2 text-[2.8vw] md:text-[0.7em] xl:text-[0.8em] font-[f1] font-semibold leading-[1] rounded-lg">
            {tag}
          </span>
        ))}        
      </div>
      </div>
    </article>
  );
}