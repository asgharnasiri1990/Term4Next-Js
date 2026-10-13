import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col items-center p-20 gap-8">
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
                className='bg-blue-600 w-25 text-white rounded-xl p-1 border text-xl cursor-pointer'>Sign in</button>
        </div>
  )
}

export default page