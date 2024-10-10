import React from 'react'
import Image from 'next/image'
import story from '../assets/about-us.jpg'

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>

        <h1 className='text-white text-6xl max-w-[320px] font-semibold mx-auto text-center mb-4 p-4'>
            About Us
            {/* <span className="text-orange-400">Us</span> */}
        </h1>

        <div className='grid grid-cols-8 gap-6 plavce-items-center' >
            <div className='w-full col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-col p-4 h-auto items-center justify-center' >
                    <Image src={story} alt='' className='w-full h-[440px]' />
                     
                </div>
        
            </div>

            <div className='w-full col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-4'>
                    
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-bold text-white/80'>EcomPlanet is your trusted partner in transitioning from offline 
                        to online selling, offering end-to-end solutions that simplify the complexities of e-commerce. 
                        We provide tailor-made services to meet each seller’s 
                        unique needs, ensuring a hassle-free experience and empowering businesses to thrive in the digital marketplace.</h2>
                        <p className='text-lg text-white/70 mt-2'> At EcomPlanet, we’re more than just a service provider "we’re your 
                        reliable partner in success". From platform registration to product listings, photoshoots to reviews management, 
                        our expertise ensures smooth onboarding and sustainable growth and most importantly each seller 
                        receives personalised support from a dedicated relationship manager, guiding them every step of the way.

                        While we leverage cutting-edge technology to streamline processes, we remain human-centric, ensuring our clients 
                        feel supported and understood. Our focus is on helping sellers scale their businesses, whether 
                        they’re just starting out or looking to optimize their presence.
                        </p>
                    </div>
                </div>  
            </div>
        </div>
        <h2 className='text-white text-2xl max-w-[320px] font-semibold mx-auto text-center mb-4 p-4'>
            What sets us apart
        </h2>
        <div className='grid grid-cols-10 gap-6 plavce-items-center' >
            <div className='w-full col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
            
                    <div className='flex flex-col mt-4 h-[180px]'>
                        <h2 className='text-xl font-bold text-white/80'>Personalized Support</h2>
                        <p className='text-lg text-white/70 mt-2'> One-on-one attention from a dedicated manager.</p>
                    </div>
                </div>
            </div>

            

            <div className='w-full col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden h-auto'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <div className='flex flex-col mt-4 h-[180px]'>
                        <h2 className='text-xl font-bold text-white/80'>Comprehensive Solutions</h2>
                        <p className='text-lg text-white/70 mt-2'> From account setup to inventory management and beyond.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden '>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <div className='flex flex-col mt-4 h-[180px]'>
                        <h2 className='text-xl font-bold text-white/80'>Growth-Focused</h2>
                        <p className='text-lg text-white/70 mt-2'> We handle registrations on all major e&#8209;commerce platforms for you, hassle-free.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <div className='flex flex-col mt-4 h-[180px]'>
                        <h2 className='text-xl font-bold text-white/80'>Educational Approach</h2>
                        <p className='text-lg text-white/70 mt-2'> Providing resources to empower sellers  in mastering e&#8209;commerce.</p>
                    </div>
                </div>
            </div>

            <div className='w-full col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <div className='flex flex-col mt-4 h-[180px]'>
                        <h2 className='text-xl font-bold text-white/80'>Reliability & Innovation</h2>
                        <p className='text-lg text-white/70 mt-2'> We promise transparency, care, and cuttinge&#8209;edge expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About