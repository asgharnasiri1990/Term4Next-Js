import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col items-center p-20 gap-8 ">
        <span className='text-[#FF5C00] text-[19px]'>Enter Your Username And Password To Log In :</span>
        <div className="flex flex-col items-center p-10 rounded-xl gap-8 border border-[#FF5C00]">
        
            <input
                // onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter a valid user name"
                className="items-center text-[#FF5C00] border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <input
                // onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="items-center text-[#FF5C00] border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <button
                // onClick={handleClick}
                className='rounded font-semibold  text-[#FF5C00] bg-gray-700 hover:bg-[#FF5C00] hover:text-black transition-colors duration-300 h-10 w-25 cursor-pointer'>Sign in</button>
        </div>
        </div>
  )
}

export default page