'use client'
import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';


const page = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='text-black relative bg-gray-100'>
        
      </div>
  )
}

export default page