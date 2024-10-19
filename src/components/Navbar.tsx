'use client'

import React, {useState, useEffect} from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from '../logo.png';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [nav, setNav] = useState(false);
   

    useEffect(() => {

        window.history.scrollRestoration = 'manual'
      }, []);


    const navLinks = [
        {title: 'About Us', path : '#about'},
        {title: 'Services', path : '#services'}
    ]


    const toggleNav = () => {
        setNav(!nav);
        console.log(pathname);
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
// fixed left-0 top-0 w-full z-50 bg-black/70"

    return (
        <div className="text-white/70 pt-0">
            
            <div className={nav ? "flex":"flex fixed left-0 top-0 z-50 bg-black/60 w-full" }>
            
                <div className="flex-none px-4 py-2">
                    <Image src={logo} alt="Description of image" width={100} height={100} 
                    onClick={() => {pathname != '/' ? router.push('/', { scroll: true }) : ""}}/>
                    <Link href="#home"></Link>
                </div>
                <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                    <ul className="flex flex-row p-4 space-x-6">
                        <li onClick={() => {pathname != '/' ? router.push('/', { scroll: true }) : ""}}>
                            <Link href="#home">Home</Link>
                        </li>
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
                                    <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-blue-400 rounded-full group-hover:w-full">

                                    </div>
                                    <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full">

                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex px-4 py-10 font-semibold">
                    <button className="mx-2 py-2 bg-black-500 border-white/70 rounded-full ">
                        Sign Up!
                    </button>

                    <button type="button" onClick={() => router.push('/login', { scroll: false })} className="mx-2 px-6  border-white/70 bg-indigo-500 rounded-full">
                        Login
                    </button>
                </div>
            </div>
            <div onClick={toggleNav} className="md:hidden fixed top-12 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div 
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/70 md:hidden"
            >
                <ul className={"text-2xl font-semibold my-10 text-center space-y-2 "}>
                    <li className="hover:text-blue-400"><Link href="#">Login</Link></li>
                    
                    <li className="hover:text-blue-400"> <Link href="#">Sign Up!</Link></li>
                
                    {navLinks.map((link, index) => (
                            <li key={index} className="hover:text-blue-400">
                                <Link href={link.path}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    <li className="hover:text-blue-400"> <Link href="#contact">Contact Us</Link></li>
                    
                    
                </ul>


            </motion.div>
        </div>
    )
}


export default Navbar;