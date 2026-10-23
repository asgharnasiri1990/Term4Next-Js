"use client"
import { Preahvihear } from 'next/font/google'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "mustang",
        year: "1964",
        color: "Red"
    })
    const updateColor = () => {
        setCar(Prev => {
            return {
                ...Prev, color: "blue", year: "1977"
            }
        }

        )
    }

    useEffect(()=>{
        console.log("Mountedddd")
    })

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='flex justify-center p-20 text-3xl'>my {car.brand}</h1>
                <p> its a {car.color} {car.model} from {car.year} .</p>

                <button className='text-2xl bg-amber-700 w-40 h-10 rounded-xl cursor-pointer'
                    type='button'
                    onClick={updateColor}
                >turn to BLUE</button>

            </div>
        </>
    )
}

export default page