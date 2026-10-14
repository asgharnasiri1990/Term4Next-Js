import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col items-center p-20 gap-8">
        <span className='text-gray-300 text-[19px]'>Please Enter Your Username And Password To Log In :</span>
            <input
                // onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter a valid user name"
                className="items-center border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <input
                // onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="items-center border w-80 h-10 p-5 text-xl rounded-xl"
            />

            <button
                // onClick={handleClick}
                className='rounded font-semibold text-white/90 bg-gray-700 hover:bg-[#FF5C00] hover:text-black transition-colors duration-300 h-10 w-25 cursor-pointer'>Sign in</button>
        </div>
  )
}

export default page