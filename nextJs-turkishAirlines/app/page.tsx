import Image from "next/image";
import TopLinks from "./components/TopLink";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Home() {
  return (
    <>
      <div className="relative w-auto md:h-137.5 md:w-full  h-82  mb-96">

        {/* Hero Image */}

        <Image
          src="/hero2.webp"
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
          <nav className="flex items-center h-15 w-full bg-[#232B38]  md:bg-transparent md:bg-[linear-gradient(180deg,#333c49,rgba(51,60,73,0)_110.83%)]">

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

            <div className="ml-auto flex items-center text-xs gap-5 font-black text-white  hover:bg-green-400 ">

              <TopLinks href="#" title="BOOK&MANAGE" className=" hidden md:flex" />
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
          <Link href="#" className="text-xl md:text-[38px]  hidden md:block">
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

          <Link href="#" className="text-[16px] font-semibold md:hidden" >BOOK NOW 	&gt; </Link>

        </div>



        {/* Mobile Booker Section -By Shadcn - Invisible in Desktop */}
        <section className="absolute left-1/2 -translate-x-1/2 top-82  h-72 w-[90%] max-w-174 md:hidden flex flex-col justify-center ">

          <Tabs className="flex  gap-1 w-full">
            <TabsList className="relative -top-3 h-82! flex flex-col items-baseline  gap-0.75 w-full rounded-xs">

              {/*FLIGHT*/}
              <TabsTrigger value="flight" className="flex  items-center justify-start gap-4 bg-red-500! px-3 h-11.25 border w-full rounded-none  cursor-pointer">
                <Image src="/flight.svg" alt="" width={24} height={15} style={{ width: 24, height: 13 }} className="brightness-0 invert " />
                <span className="text-white text-[16px] font-bold">Flight</span>
              </TabsTrigger>

              <TabsTrigger value="flightHotel" className="flex items-center justify-start gap-4 px-3  h-11.25 border-gray-200 rounded-xs bg-white w-full ">
                <Image src="/flight-hotel.svg" alt="" width={18} height={18} style={{ width: 18, height: 18 }} />
                <span className="text-[16px] font-bold text-gray-900">Flight + Hotel & Tours</span>
              </TabsTrigger>

              <TabsTrigger value="checkin" className="flex  items-center justify-start gap-4 px-3  h-11.25 border-gray-200 rounded-xs bg-white   w-full">
                <Image src="/checkin.svg" alt="" width={22} height={21} style={{ width: 22, height: 21 }} />
                <span className="text-[16px] font-bold text-gray-900">Check-in</span>
              </TabsTrigger>

              <TabsTrigger value="manage" className="flex  items-center justify-start gap-4 px-3  h-11.25 border-gray-200 rounded-xs bg-white  w-full">
                <Image src="/manage-booking.svg" alt="" width={18} height={17} style={{ width: 18, height: 17 }} />
                <span className="text-[16px] font-bold text-gray-900">Manage booking</span>
              </TabsTrigger>

              <TabsTrigger value="status" className="flex  items-center justify-start gap-4 px-3  h-11.25  border-gray-200 rounded-xs bg-white   w-full">
                <Image src="/flight-status.svg" alt="" width={24} height={16} style={{ width: 24, height: 16 }} />
                <span className="text-[16px] font-bold text-gray-900 ">Flight status</span>
              </TabsTrigger>

              <TabsTrigger value="award" className="flex  items-center justify-start gap-4 px-3 h-11.25 border-gray-200 rounded-xs bg-white   w-full">
                <Image src="/award-ticket.svg" alt="" width={12} height={16} style={{ width: 12, height: 16 }} />
                <span className="text-[16px] font-bold text-gray-900">Award ticket</span>
              </TabsTrigger>

            </TabsList>
          </Tabs>

        </section>

        {/*   Desktop Booker Section */}
        <section className=" absolute left-1/2 -translate-x-1/2 top-112.5 w-[69%] h-351  max-w-989 hidden md:block">

          <Tabs className="flex flex-col gap-0 bg-transparent ">

            {/*Tab List */}
            <TabsList className="flex relative gap-3 h-[42.4px]! -left-0.75 ">

              {/*FLIGH DESKTOP */}
              <TabsTrigger value="Flight" className="flex justify-center items-center bg-[#F4F5F8]  h-[42.4px]! gap-2 cursor-pointer rounded rounded-b-none">
                <Image src="/flight.svg" alt="" width={14} height={14} style={{ width: 14, height: 14 }} />
                <span className="text-red-500 text-[16px] font-bold">Flight</span>
              </TabsTrigger>

              <TabsTrigger value="ff" className="flex justify-center items-center bg-[#F4F5F8] h-[42.4px]! rounded gap-2 cursor-pointer p-5 rounded-b-none">
                <Image src="/flight-hotel.svg" alt="" width={14} height={14} style={{ width: 14, height: 14 }} />
                <span className="text-gray-600 text-[16px] font-bold">Flight + Hotel & Tours</span>
              </TabsTrigger>

              <TabsTrigger value="f" className="flex justify-center items-center bg-[#F4F5F8]  h-[42.4px]! rounded gap-2 cursor-pointer rounded-b-none p-5">
                <Image src="/checkin.svg" alt="" width={14} height={14} style={{ width: 14, height: 14 }} />
                <span className="text-gray-600 text-[16px] font-bold">Check-in</span>
              </TabsTrigger>

              <TabsTrigger value="Manage booking" className="flexjustify-center items-center bg-[#F4F5F8] w-[150.4px] h-[42.4px]! rounded gap-2 cursor-pointer rounded-b-none p-5">
                <Image src="/managebooking.svg" alt="" width={14} height={14} style={{ width: 14, height: 14 }} />
                <span className="text-gray-600 text-[16px] font-bold">Manage booking</span>
              </TabsTrigger>

              <TabsTrigger value="Flight status" className="flexjustify-center items-center bg-[#F4F5F8] ] h-[42.4px]! rounded gap-2 p-5 cursor-pointer rounded-b-none">
                <Image src="/Flightstatus.svg" alt="" width={14} height={14} style={{ width: 14, height: 14 }} />
                <span className="text-gray-600 text-[16px] font-bold">Flight status</span>
              </TabsTrigger>

            </TabsList>
          </Tabs>


          <section className="hidden bg-white md:block border-2  gap-5 p-5 h-46.75">

            {/*Radio Tab Panel */}
            <section className=" h-9 flex items-center  border-2 ">
              <RadioGroup defaultValue="round" className="flex items-baseline gap-4 ">

                <div className="flex items-center gap-1">
                  <RadioGroupItem value="round" id="trip-round"  className="border-blue-900 border-2"/>
                  <label htmlFor="trip-round" className="text-gray-800 text-[16px] font-bold cursor-pointer">
                    Round Trip
                  </label>
                </div>

                <div className="flex items-center gap-1">
                  <RadioGroupItem value="oneway" id="trip-oneway" className="border-blue-900 border-2"/>
                  <label htmlFor="trip-oneway" className="text-gray-800 text-[16px] font-bold cursor-pointer">
                    One Way
                  </label>
                </div>

                <div className="flex items-center gap-1">
                  <RadioGroupItem value="stopover" id="trip-stopover" className="border-blue-900 border-2 "/>
                  <label htmlFor="trip-stopover" className="text-gray-800 text-[16px] font-bold cursor-pointer">
                    Stopover in Istanbul
                  </label>
                </div>

                <div className="flex items-center gap-1">
                  <RadioGroupItem value="multicity" id="trip-multicity" className="border-blue-900 border-2"/>
                  <label htmlFor="trip-multicity" className="text-gray-800 text-[16px] font-bold cursor-pointer">
                    Multi-city
                  </label>
                </div>

              </RadioGroup>

              <div className="flex cursor-pointer min-w-72">
                <Image src="/awardticket.svg" alt="" width={24} height={24} style={{ width: 24, height: 24 }} />
                <span className="text-[16px] font-bold">Award ticket - Buy a ticket with Miles</span>
              </div>
            </section>

          </section>

        </section>


      </div>


    </>
  )
}
;
