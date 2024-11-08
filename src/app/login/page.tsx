'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../logo.png';

import { useRouter, usePathname } from "next/navigation";

const Login = () => {

    const router = useRouter();
    const pathname = usePathname();

    return (
      <div>
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          
              
              <div className={"flex fixed left-0 top-0 z-50 bg-white/60 w-full" }>
              
                  <div className="flex-none px-4 py-2 cursor-pointer">
                      <Image src={logo} alt="Description of image" width={100} height={100} 
                      onClick={() => { router.push('/')}}/>

                  </div>
                  
                  
        
            </div>
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={() => { router.push('/dashboard')}}
              >
                Login
              </button>
            </form>
            <p className="text-sm text-center">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
        </div>
      )
}

export default Login;