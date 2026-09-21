"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(5)

  // const handleIncrease = () => {

  //   setCount(count+1)
  // }
  // const handleDecrease =()=>{
  //   setCount(prev => prev-1)
  // }
  return (
    <div className="flex flex-col gap-2  items-center p-5 justify-center text-xl">
      <span>counter:{count} </span>
      <button
        className="cursor-pointer bg-green-400 rounded p-1"
        onClick={()=> setCount((prev)=> prev+1)}
      >+</button>

      <button
        className="cursor-pointer bg-green-400 rounded p-1"
        onClick={()=> setCount((prev)=>prev-1)}
      >-</button>
    </div>
  );
}
 