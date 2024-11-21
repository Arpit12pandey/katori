import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const handleInputChange = () => {

    }
    return (
        <>
            <header className=' flex justify-between items-center'>
                {/* LOGO */}
                <Link to={'/'} className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512" className='w-2 h-2'>
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                    <span className="font-bold text-xl">Katori</span>
                </Link>
                {/* //creating the searchbar */}
                <div className='relative flex items-center'>
                    <input type="text" placeholder='search....' onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>


            </header>

        </>
    )
}
