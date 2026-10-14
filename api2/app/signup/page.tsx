"use client"
import React, { useState } from 'react'

const page = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        const data = {
            "username": username,
            "password": password
        }
        fetch("https://practice.amirm.me/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        )}
    return (
        <div className="flex flex-col items-center p-20 gap-8">
            <span className='text-gray-300 text-[19px]'>please Fill in The Form Below To Create An Account :</span>
            <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter a valid user name"
                className="items-center border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter a valid password"
                className="items-center border w-80 h-10 p-5 text-xl rounded-xl "
            />

            <button
                onClick={handleClick}
                className='rounded font-semibold text-white/90 bg-gray-700 hover:bg-[#FF5C00] hover:text-black transition-colors duration-300 h-10 w-25 cursor-pointer'>Register</button>
        </div>
    )
}

export default page