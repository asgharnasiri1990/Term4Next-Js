"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const [count, setCounter] = useState(0)

    useEffect (()=>{
        console.log(count)
    },[count])
    
    return (
        <>
            <div className='flex flex-col items-center'>
                <p>{count}</p>

                <button
                    type='button'
                    onClick={() => setCounter((prev) => prev + 1)}
                    className='bg-blue-400 p-2 rounded cursor-pointer'>
                    increase
                </button>


            </div>
        </>
    )
}

export default page