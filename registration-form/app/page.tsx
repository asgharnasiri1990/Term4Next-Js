"use client"
import { useState } from "react";

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

  // sucessful submission
  const [successMessage, setSuccessMessage] = useState("")


  //Click on Submit Button Function:
  function handleSubmit() {
    let isValid = true

    // Name conditions
    if (name.trim().length === 0) {
      setNameError("Name is required")
      isValid = false
    }
    else if (name.length < 5) {
      setNameError("Name must be at least 5 characters")
      isValid = false
    } else {
      setNameError("")

    }

    // Age conditions
    if (age.trim() === "") {
      setAgeError("Age is required")
      isValid = false
    }
    else if (isNaN(Number(age))) {
      setAgeError("Age must be a number")
      isValid = false
    }
    else if (Number(age) < 18) {
      setAgeError("Age must be 18 or above. ")
      isValid = false
    }
    else {
      setAgeError("")
    }

    // Password conditions
    if (password === "") {
      setPasswordError("Password is required")
      isValid = false

    }
    else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters")
      isValid = false
    }
    else if (! /\d/.test(password)) {
      setPasswordError("Password must contain a number")
      isValid = false
    }
    else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain an uppercase letter")
      isValid = false
    }
    else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain a lowercase letter")
      isValid = false
    }
    else if (!/[!@#$%^&*()]/.test(password)) {
      setPasswordError("Password must contain a special character")
      isValid = false
    }

    else {
      setPasswordError("")
    }

    if (isValid) {
      setSuccessMessage("Form submitted Successfully")
    }
    else {
      setSuccessMessage("Please check the form and follow intructions")
    }
  }




  return (


    // User Interface
    
    <div className="flex flex-col items-center justify-center pt-10  ">

      <div className="border rounded-full border-blue-300 w-auto">

        <div className="flex flex-col justify-center items-center border-white border w-150 h-110 p-5 gap-2 rounded-full bg-gray-200">

          <div className="flex justify-center">
            <div className="bg-gray-00 p-2 rounded items-center font-bold text-center text-xl text-green-500">
              <span> Registeration Form: </span>
            </div>
          </div>

          {/* Forms Inputs*/}
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
                type="number"
                placeholder="Age:"
                className="border bg-gray-100 w-80 h-10 rounded-full p-3 hover:scale-102 placeholder:text-xs transition-transform" />
              {ageError && (<p className="text-red-500 pl-3 text-xs"> {ageError} </p>)}
            </div>

            {/* Password Field */}
            <div>
              <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password:"
                className="border bg-gray-100 w-80 h-10 rounded-full p-3 placeholder:text-xs hover:scale-102 transition-transform" />
              {passwordError && (<p className="text-red-500 pl-3 text-xs"> {passwordError} </p>)}
            </div>

            {/*Submit Button */}
            <div className="flex flex-col gap-2 justify-center">
              <div className="bg-gray-300 p-2 rounded-full items-center font-bold text-center text-xl ">
                <button
                  onClick={handleSubmit}
                  onChange={(e) => {
                    setName(e.target.value)
                    setSuccessMessage("")
                  }}
                  className="bg-gray-100 w-30 items-end cursor-pointer  rounded-full p-1 hover:scale-110 active:bg-red-300 transition-transform">Submit</button>
              </div>
              {successMessage && (<p className="text-red-500 pl-3 text-xs"> {successMessage} </p>)}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
