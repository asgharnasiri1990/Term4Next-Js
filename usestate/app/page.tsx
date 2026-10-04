"use client"

import { useState } from "react";
 import { useEffect } from "react";
 
export default function Home() {
  const [count, setCount] = useState(5)






  // const Learn=()=>(count,setCount)=
  "use client"
 
  
  useEffect(()=>{
      const data=(fetch("https://jsonplaceholder.typicode.com/users").then (
          async(data) => {
              const body = await data.json();
              console.log(body);
          }
      ))
  },[])

  const handleIncrease = () => {

    setCount(count+1)
  }
  const handleDecrease =()=>{
    setCount(prev => prev-1)
  }
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
 