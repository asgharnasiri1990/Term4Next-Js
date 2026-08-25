import Image from "next/image";
import TopLinks from "./TopLink";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative   w-auto md:h-137.5 md:w-full  h-82  mb-96">

        {/* Hero Image */}

        <Image
          src="/hero.webp"
          alt="Turkish Airlines"
          fill
          priority
          className="object-cover h-60"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Overlay / Header */}
        <header className="absolute top-0 left-0 w-full">

          {/* Top Bar */}
          <div className=" h-8 w-full bg-[#333C49] flex justify-end items-center text-[#c3cbd7] text-xs font-semibold pr-5 gap-3" >

            <TopLinks href="#" title="Turkish Airlines Holidays" className="hidden md:flex" />
            <TopLinks href="#" title="Corporate Club" className="hidden md:flex" />
            <TopLinks href="#" icon="/search.svg" title="Search" className="hidden md:flex" />
            <TopLinks href="#" icon="/globe.svg" title="EN-TR" className="mr-2 " />

          </div>

          {/* Main Navigation */}
          <nav className="flex items-center h-15 w-full bg-green-700 md:bg-[linear-gradient(180deg,#333c49,rgba(51,60,73,0)_110.83%)]">

            <div  >
              <TopLinks href="#" icon="/turkishairlines.svg" iconWidth={190} iconHeight={30} className="ml-5 hidden md:block " />
              <div className="flex items-center md:hidden">

                <Image src="/logo.svg" alt="" width={40} height={40} className="ml-3" />

                {/*Hamberger Menu */}
                <button className=" flex flex-col gap-1 ml-5">
                  <span className="w-7 h-0.75 bg-white"></span>
                  <span className="w-7 h-0.75 bg-white"></span>
                  <span className="w-7 h-0.75 bg-white"></span>
                </button>
              </div>

            </div>

            <div className="ml-auto flex items-center text-xs gap-5 font-black text-white ">

              <TopLinks href="#" title="BOOK&MANAGE" className="hover:bg-amber-300gre hidden md:flex" />
              <TopLinks href="#" title=" EXPERIENCE " className=" hidden md:flex" />
              <TopLinks href="#" title=" DETAILS&DESTINATIONS " className=" hidden md:flex" />
              <TopLinks href="#" title=" MILES&SMILES " className=" hidden md:flex" />
              <TopLinks href="#" title=" HELP " className=" hidden md:flex" />

              <div className=" flex h-10 w-25 items-center justify-center md:rounded-4xl border gap-2  hover:bg-gray-400 cursor-pointer">
                <Image src="/person.svg" alt="" width={15} height={15} />
                <button className="text-md font-bold cursor-pointer "> sign-in</button>

              </div>
              <Image src="/notification.svg" alt="" width={15} height={15} className="mr-5" />
            </div>

          </nav>


        </header>

        <div className="absolute top-45 ml-2 md:top-38 md:h-42 w-[90%] md:w-[80%] max-w-220 md:left-1/2 md:-translate-x-1/2 flex flex-col gap-2 text-white text-left">
          <Link rel="stylesheet" href="#" className="text-xl md:text-[38px] font-xs hidden md:block">
            Choose your destination before summer ends
          </Link>
          <span className="md:hidden font-bold text-[24px]">Extend you summer now</span>
          <span className="text-md md:text-[19px] hidden md:block">

            Enjoy Turkish Airlines privileges and make the most of your vacation before the season ends
          </span>
          <span className="md:hidden text-[14px] font-semibold">Fly in style and enjoy your vacation</span>
          <button className="sm:backdrop-blur-2xl h-12.75 w-32.5 sm:mx-0 font-semi-bold  md:font-semibold text-[14px] md:border rounded cursor-pointer hidden md:block">
            BOOK NOW
          </button>
          <Link rel="stylesheet" href="#" className="text-[16px] font-semibold md:hidden" >BOOK NOW 	&gt; </Link>

        </div>

        <div className="m-4 absolute top-75 bg-amber-300 h-72.5 w-74 md:hidden flex  flex-col gap-2 rounded">
          <TopLinks href="#" icon="/flight.svg" title="Flight" iconWidth={30} iconHeight={60} className="bg-gray-500  h-11.25" />
          <TopLinks href="#" icon="/flight.svg" title="Flight" iconWidth={30} iconHeight={60} className="bg-gray-500  h-11.25" />
          <TopLinks href="#" icon="/flight.svg" title="Flight" iconWidth={30} iconHeight={60} className="bg-gray-500  h-11.25" />
          <TopLinks href="#" icon="/flight.svg" title="Flight" iconWidth={30} iconHeight={60} className="bg-gray-500  h-11.25" />
          <TopLinks href="#" icon="/flight.svg" title="Flight" iconWidth={30} iconHeight={60} className="bg-gray-500  h-11.25" />
          <TopLinks href="#" icon="/flight.svg" title="Flight" iconWidth={30} iconHeight={60} className="bg-gray-500  h-11.25" />
        </div>
      </div>


    </>
  );
}