import { div } from 'framer-motion/client'
import Image from 'next/image';
import React from 'react'
import amazon from '../assets/marketplace/amazon.png'
import flipkart from '../assets/marketplace/flipkart.png'
import meesho from '../assets/marketplace/meesho.png'
import marketplace from '../assets/marketplace/marketplace.png'



const Partners = () => {

    const partnerIcons = [{icon: <Image src={flipkart} alt='card' className='w-[140px]' />, label: "Flipkart"},
        {icon: <Image src={amazon} alt='card' className='w-[140px]' />, label: "Amazon"},
        
        {icon: <Image src={meesho} alt='card' className='w-[140px]' />, label: "Meesho"}
    ];

    // {icon: <Image src={marketplace} alt='card' className='w-[140px]' />, label: "Facebook marketplace"}

  return (
    <div className='bg-[linear-gradient(to_bottom,#000,#67D3F4_80%,#000_100%)] py-32'>

        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>Platforms we work with</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {partnerIcons.map((partner, index) => (
                    <div key={index}
                    className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl '>
                        {partner.icon}
                        <h2 className='mt-2 font-semibold'> {partner.label} </h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partners