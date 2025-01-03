import React from 'react'
import Image from 'next/image'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

export const Contact = () => {
  return (
    <div id="contact" className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0
    lg:space-x-8'>
      <div className='flex justify-center items-center'>
        <ul>
            <li className=' flex items-center'>
              <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6' />
              <p className='text-xl'>+91 7676986903</p>

            </li>
            <li className=' flex items-center'>
              <Image src={mail} alt='phone' className='h-[110px] w-auto mr-6' />
              <p className='text-xl'>contact@riseonecom.in</p>

            </li>

        </ul>


      </div>

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-blue-400 mb-4'>Get in Touch</h2>
        <p className='text-white/70 mb-6'>Ready to unlock the door to e-commerce success? Let’s chat</p>
        <form className='space-y-4' action="" method='POST'>
          <div className='grid md:grid-cols-2 gap-4'>
            <input className='bg-black/70 rounded-xl p-3 focus:outline-non focus:ring-2 focus:rinf-blue-400' 
            placeholder='First Name' type="text" name="name" id="" />
            <input className='bg-black/70 rounded-xl p-3 focus:outline-non focus:ring-2 focus:rinf-blue-400' 
            placeholder='Last Name' type="text" name="name" id="" />
            <input className='bg-black/70 rounded-xl p-3 focus:outline-non focus:ring-2 focus:rinf-blue-400' 
            placeholder='Email' type="text" name="email" id="" />
            <input className='bg-black/70 rounded-xl p-3 focus:outline-non focus:ring-2 focus:rinf-blue-400' 
            placeholder='Phone' type="phone" name="phone" id="" />

          </div>

          <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-non focus:ring-2 focus:ring-blue-400' placeholder='Your Message' name="" id=""></textarea>
          <button className='bg-blue-700 hover:bg-blue-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'> Send Message</button>
        
        </form>
      </div>
    
    
    </div>
  )
}
