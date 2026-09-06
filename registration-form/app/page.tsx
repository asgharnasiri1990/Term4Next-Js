"use client"
import { useState } from "react";

export default function Home() {
  
  return (


    // User Interface
    <div className="flex items-center justify-center pt-10 ">
      <div className="border rounded border-blue-300 w-auto">

        <div className="flex flex-col border-white border w-150 h-110 p-5 gap-2 rounded bg-yellow-200">

          <div className="flex justify-center">
            <div className="bg-gray-200 p-2 rounded items-center font-bold text-center text-xl text-green-500">
              <span> Registeration Form: </span>
            </div>
          </div>

          {/* Froms Inputs*/}
          <div className=" flex flex-col gap-10 p-4 ">
            <input
           
              type="text"
             
              placeholder="Full Name:" className="border w-full h-12 rounded p-3 text-xl hover:scale-102 bg-gray-100 placeholder:text-xs transition-transform" />

            <input type="text" placeholder="Age:" className="border bg-gray-100 w-full h-12 rounded p-3 text-xl hover:scale-102 placeholder:text-xs transition-transform" />

            <input type="text" placeholder="Enter Password:" className="border bg-gray-100 w-full h-12 rounded p-3 text-xl placeholder:text-xs hover:scale-102 transition-transform" />

            {/*Submit Button */}
            <div className="flex justify-center">
              <div className="bg-gray-300 p-2 rounded items-center font-bold text-center text-xl ">
                <button
                  className="bg-gray-100 w-30 items-end cursor-pointer  rounded p-1 hover:scale-110 active:bg-red-300 transition-transform">Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
