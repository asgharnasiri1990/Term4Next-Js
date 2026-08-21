import Image from "next/image";
import TopLinks from "./TopLink";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-137.5">

        {/* Hero Image */}
        <Image
          src="/hero.webp"
          alt="Turkish Airlines"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay / Header */}
        <header className="absolute top-0 left-0 w-full">

          {/* Top Bar */}
          <div className=" h-8 w-full bg-[#333C49] flex justify-end items-center text-[#c3cbd7] text-xs font-semibold pr-4 gap-6" >

            <TopLinks href="#" title="Turkish Airlines Holidays" className="hidden md:flex" />
            <TopLinks href="#" title="Corporate Club" className="hidden md:flex" />
            <TopLinks href="#" icon="/search.svg" title="Search" className="hidden md:flex" />
            <TopLinks href="#" icon="/globe.svg" title="EN-TR" />

          </div>

          {/* Main Navigation */}
          <nav className="flex items-center h-15 w-full bg-[linear-gradient(180deg,#333c49,rgba(51,60,73,0)_110.83%)]">

            <div className=" " >
              <TopLinks href="#" icon="/turkishairlines.svg" iconWidth={190} iconHeight={30} className="ml-5" />
            </div>

            <div className="ml-auto flex items-center text-xs gap-5 font-black text-white ">
              <TopLinks href="#" title="BOOK&manage" className="hover:bg-amber-300gre" />
              <TopLinks href="#" title=" EXPERIENCE " />
              <TopLinks href="#" title=" DETAILS&DESTINATIONS " />
              <TopLinks href="#" title=" MILES&SMILES " />
              <TopLinks href="#" title=" HELP " />

              <div className=" flex h-10 w-25 items-center justify-center rounded-4xl border gap-2  hover:bg-gray-100 cursor-pointer">
                <Image src="/person.svg" alt="" width={15} height={15} />
                <button className="text-md font-bold cursor-pointer "> sign-in</button>

              </div>
              <Image src="/notification.svg" alt="" width={15} height={15} className="mr-5"/>
            </div>



          </nav>

        </header>

      </div>
    </>
  );
}