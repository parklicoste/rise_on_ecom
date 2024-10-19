'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import profilepic from '../assets/profilepic.png'

const Hero = () => {
  return (
    <div className="py-32 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2857CE_35%,#1BB2ED_60%,#67D3F4_80%)]" id='home'>
        
        <div className='absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[478px]  left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>

        </div>
        <div className='relative'>
            <div className='text-4xl font-bold text-center'>
                <h1 className='text-6xl text-[#fff]'>Rise On Ecom</h1>
                <h1 className='text-[#fff] text-5xl mt-4'>Simplifying commerce & Scaling beyond limits</h1>

            </div>
            <motion.div className="hidden md:block absolute left-[60px] top-[120px] " 
            drag>
                <Image src={cursor} height="190" width="190" alt="cursor" className="" draggable="false"/>
            </motion.div>

            <motion.div className="hidden md:block absolute right-[60px] top-[120px]" 
            drag>
                <Image src={lightning} height="100" width="100" alt="message" className="" draggable="false"/>
            </motion.div>
        
            <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 '>
            To enable every seller to seamlessly transition and excel in the online marketplace, with scalable solutions that cater to their personalized e-commerce needs.

            </p>
            {/* <motion.div className="" drag> */}
                <Image src={profilepic} alt='my pic' className='h-auto w-auto mx-auto' />
            {/* </motion.div> */}
        </div>


    </div>
  )
}

export default Hero


// 2857CE
// 1BB2ED