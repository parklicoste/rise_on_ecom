
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
                        <h2 className='text-2xl font-bold text-white/80'>E-Commerce Platform Registration</h2>
                        <p className='text-lg text-white/70 mt-2'> We handle registrations on all major e-commerce platforms for you, hassle-free.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={product} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Multi-Category Product Listings</h2>
                        <p className='text-lg text-white/70 mt-2'> Get your products listed in multiple categories, across all e-commerce channels.</p>
                    </div>
                    
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={visual} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Product Photography & Visual Design</h2>
                        <p className='text-lg text-white/70 mt-2'> High-quality shoots and custom graphics to make your listings stand out.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={review} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Ratings & Reviews Management</h2>
                        <p className='text-lg text-white/70 mt-2'>Generate, track, and manage reviews to build customer trust and loyalty.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div> 
                <div className='flex flex-row p-6'>
                    <Image src={inventory} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Inventory & Warehouse Optimization</h2>
                        <p className='text-lg text-white/70 mt-2'>  Set up and manage your inventory with efficient, scalable warehouse options.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={finance} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>GST & Financial Management</h2>
                        <p className='text-lg text-white/70 mt-2'> Seamless management of GST filings, accounts, and financial compliance.</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={social} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Social Media & Storefront Management</h2>
                        <p className='text-lg text-white/70 mt-2'> Launch and manage your social media pages and online stores with ease.</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={website} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Custom ECommerce Website Development</h2>
                        <p className='text-lg text-white/70 mt-2'> Build and maintain a branded e-commerce site tailored to your needs.</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-110 duration-300'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-700 to-white opacity-30 animate-gradient-xy"></div>
                <div className='flex flex-row p-6'>
                    <Image src={food} alt='book' className='w-auto h-[130px]' />
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Food Vendor Onboarding & Management</h2>
                        <p className='text-lg text-white/70 mt-2'> Complete onboarding and management for food vendors on delivery platforms.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services