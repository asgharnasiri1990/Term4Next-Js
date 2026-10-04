// const Learn=()=>(count,setCount)=
"use client"
import { useEffect } from "react";

useEffect(()=>{
    const data=(fetch("https://jsonplaceholder.typicode.com/users").then (
        async(data) => {
            const body = await data.json();
            console.log(body);
        }
    ))
},[])