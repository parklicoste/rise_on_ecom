
import React from 'react'
import Image from 'next/image'
import ecom from '../assets/ecom-registration.png'
import finance from '../assets/financial-management.png'
import food from '../assets/food-vendor-management.png'
import product from '../assets/product-lisitng.png'
import inventory from '../assets/inventory-managment.png'
import review from '../assets/reveiw-managment.png'
import social from '../assets/social-media-managment.png'
import visual from '../assets/visual-design.png'
import website from '../assets/website-development.png'

const Services = () => {
  return (
    <div className='max-w-[1200px] mx-auto pt-[110px]' id='services'>
        <h1 className='text-white text-6xl max-w-[320px] font-semibold mx-auto text-center mb-4 p-4'>
            Services
        </h1>
        <div className='px-6 md:px-0 grid md:grid-cols-8 gap-6 plavce-items-center' >

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={ecom} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Marketplace Registration</h2>
                        <p className='text-lg text-white/70 mt-2'> We simplify the process of getting your business online by managing registrations on all major e-commerce platforms, including Amazon, Flipkart, Shopify, and more.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={product} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Marketplace Listings</h2>
                        <p className='text-lg text-white/70 mt-2'> Get your products listed in multiple categories, across all e-commerce channels.</p>
                    </div>
                    
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={visual} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Product Images</h2>
                        <p className='text-lg text-white/70 mt-2'> High-quality visuals are key to making your products stand out online.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={finance} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Finances</h2>
                        <p className='text-lg text-white/70 mt-2'>Navigating financial compliance can be tough, especially for new sellers.</p>
                    </div>
                </div>
            </div>

            {/* <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div> 
                <div className='flex flex-row p-6'>
                    <Image src={inventory} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Inventory & Warehouse Optimization</h2>
                        <p className='text-lg text-white/70 mt-2'>  Set up and manage your inventory with efficient, scalable warehouse options.</p>
                    </div>
                </div>
            </div> */}

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={review} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Business Consultancy</h2>
                        <p className='text-lg text-white/70 mt-2'> Expert guidance is essential for navigating today’s competitive landscape.</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={social} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Branding & Logo Design</h2>
                        <p className='text-lg text-white/70 mt-2'> A strong brand identity is crucial to standing out in a crowded marketplace.</p>
                    </div>
                </div>
            </div>
            {/* <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={website} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Custom ECommerce Website Development</h2>
                        <p className='text-lg text-white/70 mt-2'> Build and maintain a branded e-commerce site tailored to your needs.</p>
                    </div>
                </div>
            </div> */}
            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={inventory} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Design and Packaging</h2>
                        <p className='text-lg text-white/70 mt-2'> Effective packaging and design are essential for making your products memorable and visually impactful.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services