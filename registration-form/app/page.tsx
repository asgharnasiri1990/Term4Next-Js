"use client"
import { use, useState } from "react";

export default function Home() {

  // Name Field State:
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("")

  // Age Field State:
  const [age, setAge] = useState("")
  const [ageError, setAgeError] = useState("")

  // Password Field State:
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  //Click on Submit Function:
  function handleSubmit() {

    // Name conditions
    if (name.trim().length === 0) {
      setNameError("Name is required")
    }
    else if (name.length < 5) {
      setNameError("Name must be at least 5 characters")
    } else {
      setNameError("")
    }

    // Age conditions
    if (age === "") {
      setAgeError("Age is required")
    }
    else if (isNaN(Number(age))) {
      setAgeError("Age must be a number")
    }
    else if (Number(age) < 18) {
      setAgeError("Age must be 18 or above. ")
    }
    else {
      setAgeError("")
    }

    // Password conditions
    if (password === "") {
      setPasswordError("Password is reqired")
    }
    else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters")
    }
    else if (! /\d/.test(password)) {
      setPasswordError("Password must contain a number")
    }
    else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain an uppercase letter")
    }
    else if(!/[a-z]/.test(password)){
      setPasswordError("Password must contain a lowercase letter")
    }
    else if (!/[!@#$%^&*()]/.test(password)) {
      setPasswordError("Password must contain a special character")
    }

    else {
      setPasswordError("")
    }

  }




  return (


    // User Interface
    <div className="flex items-center justify-center pt-10 ">
      <div className="border rounded-full border-blue-300 w-auto">

        <div className="flex flex-col justify-center items-center border-white border w-150 h-110 p-5 gap-2 rounded-full bg-gray-200">

          <div className="flex justify-center">
            <div className="bg-gray-00 p-2 rounded items-center font-bold text-center text-xl text-green-500">
              <span> Registeration Form: </span>
            </div>
          </div>

          {/* Froms Inputs*/}
          <div className=" flex flex-col gap-5 p-4 ">
            {/* Name field */}
            <div className="flex flex-col gap-1">
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name:" className="border w-80 h-10 rounded-full p-3 hover:scale-102 bg-gray-100 placeholder:text-xs transition-transform" />
              {nameError && (<p className="text-red-500 pl-3 text-xs"> {nameError} </p>)}
            </div>

            {/* Age Field */}
            <div>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="text"
                placeholder="Age:"
                className="border bg-gray-100 w-80 h-10 rounded-full p-3 hover:scale-102 placeholder:text-xs transition-transform" />

              {ageError && (<p className="text-red-500 pl-3 text-xs"> {ageError} </p>)}
            </div>


            {/* Password Field */}
            <div>

              <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password:"
                className="border bg-gray-100 w-80 h-10 rounded-full p-3 placeholder:text-xs hover:scale-102 transition-transform" />
              {passwordError && (<p className="text-red-500 pl-3 text-xs"> {passwordError} </p>)}
            </div>

            {/*Submit Button */}
            <div className="flex justify-center">
              <div className="bg-gray-300 p-2 rounded-full items-center font-bold text-center text-xl ">
                <button
                  onClick={handleSubmit}

                  className="bg-gray-100 w-30 items-end cursor-pointer  rounded-full p-1 hover:scale-110 active:bg-red-300 transition-transform">Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
