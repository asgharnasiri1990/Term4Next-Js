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
            <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter a valid user name"
                className="items-center border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="items-center border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <button
                onClick={handleClick}
                className='bg-blue-600 w-25 text-white rounded-xl p-1 border text-xl cursor-pointer'>Sign Up</button>
        </div>
    )
}

export default page