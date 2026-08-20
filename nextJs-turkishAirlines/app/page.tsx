import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-cover h-125 " style={{backgroundImage:"url('/hero.webp')"}}>

        <div className="bg-[#333C49] h-8 w-full  "></div>
        <div> </div>

      </div>
    </>
  );
}