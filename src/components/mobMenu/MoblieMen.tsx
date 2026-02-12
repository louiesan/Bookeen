export default function MobileMen() {
  return (
    <div className="absolute w-4/5 top-[calc(100%+76px)] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg border-white border-2 rounded-md drop-shadow-lg drop-shadow-black/40 z-50 p-2.5 flex flex-col items-start justify-center gap-2.5">
      <ul className="w-fit h-full flex flex-col items-start justify-center gap-2.5">
        <a
          href="#Home"
          className={
            "font-medium text-2xl font-[Noto Sans] hover:text-rose-700 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
          }
        >
          <li className="">Home</li>
        </a>
        <a
          href="#About"
          className={
            "font-medium text-2xl font-[Noto Sans] hover:text-rose-700 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
          }
        >
          <li className="">About</li>
        </a>
        <a
          href="#Contact"
          className={
            "font-medium text-2xl font-[Noto Sans] hover:text-rose-700 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
          }
        >
          <li className="">Contact</li>
        </a>
      </ul>
    </div>
  );
}
