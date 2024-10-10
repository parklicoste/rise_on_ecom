'use client'

import React, {useState, useEffect} from "react";
// import {useRouter, usePathname} from 'next/navigation'
import { button } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import user from '../user.png';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');


    const navLinks = [
        {title: 'About', path : '#about'},
        {title: 'Services', path : '#services'}
    ]


    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
            x:0,
            transition: {
                stiffness:20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness:20,
                damping: 15
            }
        }
    }


    return (
        <div className="text-white/70 pt-6">
            
            <div className="flex">
                <div className="flex-none px-4 py-2">
                    <Image
                        src={user} // Path to your image
                        alt="Description of image" // Alt text for accessibility
                        width={100} // Desired width in pixels
                        height={100} // Desired height in pixels
                        />
                </div>
                <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                    <ul className="flex flex-row p-4 space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="group">
                                <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contact Us</h1>
                                <div className="relative"> 
                                    <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full">

                                    </div>
                                    <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full">

                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-4 py-10 font-semibold">
                    <button className="mx-2 px-6 py-2 bg-black-500 border-white/70 rounded-full ">
                        Sign Up!
                    </button>

                    <button className="mx-2 px-6 py-2 border-white/70 bg-indigo-500 rounded-full">
                        Login
                    </button>
                </div>
            </div>
            <div onClick={toggleNav} className="md:hidden absolute top-12 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
            </div>

            <motion.div 
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-blck/90 md:hidden"
            >
                <ul className="text-2xl font-semibold my-28 text-center space-y-2">
                    {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                </ul>


            </motion.div>
        </div>
    )
}


export default Navbar;