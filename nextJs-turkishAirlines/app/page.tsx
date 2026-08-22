import Image from "next/image";
import TopLinks from "./TopLink";

export default function Home() {
  return (
    <>
      <div className="relative w-200 md:w-full h-137.5   mb-96">

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
          <div className=" h-8 w-full bg-[#333C49] flex justify-end items-center text-[#c3cbd7] text-xs font-semibold pr-5 gap-3" >

            <TopLinks href="#" title="Turkish Airlines Holidays" className="hidden md:flex" />
            <TopLinks href="#" title="Corporate Club" className="hidden md:flex" />
            <TopLinks href="#" icon="/search.svg" title="Search" className="hidden md:flex" />
            <TopLinks href="#" icon="/globe.svg" title="EN-TR" className="mr-2 " />

          </div>

          {/* Main Navigation */}
          <nav className="flex items-center h-15 w-full bg-[linear-gradient(180deg,#333c49,rgba(51,60,73,0)_110.83%)]">

            <div  >
              <TopLinks href="#" icon="/turkishairlines.svg" iconWidth={190} iconHeight={30} className="ml-5 hidden md:block " />
              <div className="flex items-center md:hidden">

                <Image src="/logo.svg" alt="" width={40} height={40} className="ml-3" />
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

        <div className="absolute top-40 md:top-55 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-[85%] md:h-36 md:w-248 flex flex-col gap-2 text-white text-center md:text-left">
          <span className="text-2xl md:text-4xl font-medium hidden md:block">
            Earn as you spend with TKPAY Card
          </span>
          <span className="md:hidden font-bold">TKPAY Card Offers</span>
          <span className="text-base md:text-xl">
            Earn up to 3% TK Money on your spending in Türkiye and up to 5% abroad
          </span>
          <button className="md:bg-[#7E2E2E] h-13 w-56 mx-auto md:mx-0 font-bold md:font-semibold md:border cursor-pointer">
            Discover the privileges
          </button>
        </div>

      </div>



    </>
  );
}