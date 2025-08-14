
import CFS1 from "./CFS1"
import CFS2 from "./CFS2"


export default function Contact({border2 = false}:{border2?:boolean}) {
  return (
    <section>
        <div className={`w-full h-fit flex max-lg:flex-col-reverse bg-zinc-900/70 px-3 md:px-5 py-10 lg:py-20 mt-20 ${ border2 ? 'border-b-[1.5px]' :'border-[1.5px]'} border-zinc-300/30 shadow-sm rounded-4xl overflow-hidden`}>
        <CFS1 />
        <CFS2 />
        </div>
    </section>
  )
}