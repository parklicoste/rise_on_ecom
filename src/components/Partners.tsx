import { div } from 'framer-motion/client'
import React from 'react'
import { FaAmazon, FaFacebookSquare, FaHtml5 } from 'react-icons/fa';


const Partners = () => {

    const partnerIcons = [{icon: <FaAmazon size={140} />, label: "Amazon"},
        {icon: <FaFacebookSquare size={140} />, label: "Facebook"}
    ];

  return (
    <div className='bg-[linear-gradient(to_top,#000, #381a5F_80%)] py-32'>
        <div className='text-white max-w-[700px] mx-auto p-8 text-center'>
            <h2 className='text-4xl font-bold mb-4'>Platforms we work with</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {partnerIcons.map((partner, index) => (
                    <div key={index}
                    className='h-[260px] w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl '>
                        {partner.icon}
                        <p className='mt-2'> {partner.label} </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partners