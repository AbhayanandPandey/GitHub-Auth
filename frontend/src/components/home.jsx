import React from 'react'

export default function home() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-neutral-700 shadow-xl rounded-3xl p-10 flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-semibold text-white">Welcome Back</h2>
        <p className="text-white text-center   ">Sign in with your Github Account</p>
        <button
          className="flex items-center gap-3 px-6 py-3 bg-white text-black text-lg rounded-xl shadow-lg transition duration-300 ease-in-out cursor-pointer"
        >
          <img
            src="../../public/vite.jpg"
            alt="Google icon"
            className="w-6 h-6 cursor-pointer"
          />
          Sign in with Github
        </button>
      </div>
    </div>
    </div>
  )
}

