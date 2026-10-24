"use client"
import React, { useEffect, useState } from 'react'

interface User{
id:number
name:string
email:string
}
const page = () => {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch("https://practice.amirm.me/categories")
                if(!response.ok){
                    throw new Error("REQUEST FAILED!")
                }
                const data = await response.json()
                setUsers(data)
                setIsLoading(false)
            }
            catch (error) {

                console.log(error)
                setIsLoading(false)
                setError("Something went wrong")
            }

        }


        getUser()
    }, [])

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => {
    //             if (!response.ok) { throw new Error("request failed") }

    //           return response.json()
    //         })

    //         .then((data) => {
    //             setUsers(data)
    //             setIsLoading(false)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //             setIsLoading(false)
    //             setError("Something went wrong")
    //         })

    // }, [])

    return (
        <>

            <div className='flex flex-col items-center'>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {users.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))}
            </div>
        </>
    )
}

export default page