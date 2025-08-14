
export default function RoundCurcul() {
  return (
      <div className="w-full flex items-center justify-between gap-4 bg-zinc-900/70  rounded-full ">
        <span className="block shrink-0 w-10 md:w-28 h-10 bg-black border-r-[1.5px] border-zinc-300/30 shadow-sm rounded-r-full "></span>
        <span className="block shrink-0 w-28 h-10 bg-black border-[1.5px] border-zinc-300/30 shadow-sm rounded-full max-lg:hidden"></span>
        <span className="block shrink-0 w-28 h-10 bg-black border-[1.5px] border-zinc-300/30 shadow-sm rounded-full max-md:hidden"></span>
        <span className="block shrink-0 w-28 h-10 bg-black border-[1.5px] border-zinc-300/30 shadow-sm rounded-full"></span>
        <span className="block shrink-0 w-28 h-10 bg-black border-[1.5px] border-zinc-300/30 shadow-sm rounded-full max-md:hidden"></span>
        <span className="block shrink-0 w-28 h-10 bg-black border-[1.5px] border-zinc-300/30 shadow-sm rounded-full max-lg:hidden"></span>
        <span className="block shrink-0 w-10 md:w-28 h-10 bg-black border-l-[1.5px] border-zinc-300/30 shadow-sm rounded-l-full"></span>
      </div>
  )
}
