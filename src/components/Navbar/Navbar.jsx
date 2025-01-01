import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.jpg'
import './Navbar.css'
import Input from '../InputBar/Input'
import { UserContext } from '../../UserContex'


export default function Navbar() {
    const { isFocusednav, setIsFocusednav } = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className='flex justify-around gap-3  p-2 items-center sticky top-0 bg-white z-50'>
                <button className="lg:hidden text-2xl" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* LOGO */}
                <Link to={'/'} className="flex items-center gap-1">
                    <div>
                        <img src={Logo} alt="Logo" className='w-16 h-12' />
                    </div>
                    <span className="font-bold text-xl m-2">Momma Foods</span>
                </Link>

                {/* Searchbar */}
                 <div className="hidden lg:flex lg:w-auto lg:justify-center lg:items-center">
    <Input intext="Search" width="auto" statev={isFocusednav} statef={setIsFocusednav} />
</div>
   


                {/* Icons and Services */}
                <div className='flex justify-between items-center gap-3 '>
                    <div className='flex gap-3'>
                        <Link to={'/login'} className='hover:text-red-500 transition'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'>
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" className='w-6 h-6' fill='blue' />
                            </svg>
                        </Link>
                        <div className="border-l border-gray-300"></div>
                    </div>
                    {/* Delivery */}
                    <div className='flex gap-3'>
                        <Link to={'/track'} className='hover:text-red-500 transition'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
                                <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='blue' />
                            </svg>
                        </Link>
                        <div className="border-l border-gray-300"></div>
                    </div>
                    {/* Heart */}
                    <div className='flex gap-3'>
                        <Link to={'/login'} className='hover:text-red-500 transition'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6'>
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" fill='red' />
                            </svg>
                        </Link>
                        <div className="border-l border-gray-300 w-6"></div>
                    </div>
                    {/* Shopping bag */}
                    <Link className='hover:text-red-500 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6'>
                            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Gray line */}
            <div className='gap-3 m-2'>
                <div className='bg-gray-300 h-1 w-full'></div>
            </div>

            {/* Navbar Links */}
            <div className='flex items-center justify-evenly gap-4 m-2'>
                <div className={`menu lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent`}>
                    <div className="flex flex-col lg:flex-row lg:gap-6 gap-4 p-4 lg:p-0">
                        <Link to="/" className="font-bold hover:text-red-500" onClick={closeMenu}>HOME</Link>
                        <Link to="/vedicghee" className="font-bold hover:text-red-500" onClick={closeMenu}>VEDIC GHEE</Link>
                        <Link to="/cowghee" className="font-bold hover:text-red-500" onClick={closeMenu}>GHEE A2 COW</Link>
                        <Link to="/honey" className="font-bold hover:text-red-500" onClick={closeMenu}>HONEY</Link>
                        <Link to="/shilajit" className="font-bold hover:text-red-500" onClick={closeMenu}>SHILAJIT</Link>
                        <Link to="/peanutbutter" className="font-bold hover:text-red-500" onClick={closeMenu}>PEANUT BUTTER</Link>
                        <Link to="/naturalgold" className="font-bold hover:text-red-500" onClick={closeMenu}>NANDLAL GOLD</Link>
                    </div>
                </div>
                <div className=' hidden lg:flex gap-4'>
                {/* //gift icon */}
                <div className='flex gap-3'>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6'><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z" /></svg>

                    </div>
                    <div className='text-red-500'>Gift Box</div>
                    <div className="border-l border-gray-300"></div>
                </div>
                {/* //offers icon */}
                <div className='flex gap-3'>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6'><path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                    </div>
                    <div className='text-yellow-300'>Offers</div>

                </div>

            </div>
            </div>
           

        </>
    )
}
