

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c33764] to-[#1d2671]">
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className=" flex justify-between w-[95%] max-w-7xl rounded-2xl bg-black backdrop-blur-lg shadow-xl border border-white/10 px-6 py-4 text-slate-300">
          <h1 className="text-lg font-semibold tracking-wide">
            Nilay Kumar&apos;s Portfolio
          </h1>
          <nav className="flex gap-7">
            <a href="#Experience">
              Experience
            </a>
            <a href="#Projects">
              Projects
            </a>
            <a href="#Contact">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
