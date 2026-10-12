"use client";
import React, { useEffect, useState } from "react";

const Api = () => {

    return (
        <div className="flex flex-col items-center gap-10 justify-center p-20">
            <a href="http://localhost:3000/todos" className="text-blue-500 font-bold text-3xl">Click here to show todos page</a>
            <a href="http://localhost:3000/signup" className="text-blue-500 font-bold text-3xl">Click to register</a>
            <a href="http://localhost:3000/signin" className="text-blue-500 font-bold text-3xl">Click to sign in</a>
        </div>
    )
}
export default Api;