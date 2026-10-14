"use client"
import React, { useState } from 'react'

const page = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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

        )
    }
    return (
        <div className="flex flex-col items-center p-20 gap-8 ">
            <span className='text-[#FF5C00] text-[19px]'>Fill in The Form Below To Create An Account :</span>
            <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center p-10 rounded-xl gap-8 border border-[#FF5C00]">

                <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter a valid user name"
                    className="items-center border w-80 h-10 p-5 text-xl text-[#FF5C00] rounded-xl"
                />

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter a valid password"
                    className="items-center border w-80 h-10 p-5 text-[#FF5C00] text-xl rounded-xl "
                />

                <button
                    type='submit'
                    className='rounded font-semibold text-[#FF5C00] bg-gray-700 hover:bg-[#FF5C00] hover:text-black transition-colors duration-300 h-10 w-25 cursor-pointer'>Register</button>
            </form>
        </div>
    )
}

export default page