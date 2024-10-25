'use client'
import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import NestedLayout from './nestedLayout/NestedLayout';

const page = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='text-white/70 relative'>
        <div className='text-4xl font-bold text-center pt-4'>
            <h1 className='text-4xl text-[#fff]'>Dashboard</h1>
        </div>
       <div className={"flex fixed left-0 top-0 z-50 bg-black/60 w-full" }>
            <div className="flex-none px-4 py-2 cursor-pointer">
                <div  onClick={toggleMenu} className=" fixed top-12 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                    <AiOutlineMenu size={30} />
                    
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg 
                    opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">

                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                Option 2
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                Option 3
                            </a>
                        </div>
                    </div>

                </div>

            </div>
              
              
    
        </div>

        <div className="flex justify-between items-center mb-4">
        <div className="relative group">
          {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/profiles">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Profiles
                  </a>
                </Link>
                <Link href="/add-api">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Add API
                  </a>
                </Link>
                <Link href="/settings">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Settings
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    <NestedLayout />
      


      </div>
  )
}

export default page