'use client'
import React from 'react'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-md relative ">
  
      <div className="flex items-center">
        <div className="bg-gray-300 px-6 py-3 font-bold text-xl text-black">
          LOGO
        </div>
      </div>

 
      <nav className="hidden md:flex gap-10 items-center text-[#1959AC] font-semibold text-[16px]">
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#0546D2] transition">
          Lorem Ipsum <ChevronDown size={16} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#0546D2] transition">
          Lorem Ipsum <ChevronDown size={16} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#0546D2] transition">
          Lorem Ipsum <ChevronDown size={16} />
        </div>
      </nav>

     
      <div>
        <button 
        className="bg-white text-[#222222] relative z-10 font-semibold px-5 py-2 rounded-md hover:bg-[#e2e2e2] transition shadow-lg">
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Navbar
