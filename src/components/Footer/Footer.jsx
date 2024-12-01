import React, {useContext } from 'react'
import Logo from '../../assets/Logo.jpg'
import Visa from '../../assets/rivne-ukraine-may-25-2023-260nw-2308151527.webp'
import { UserContext } from '../../UserContex'; 
import Input from '../InputBar/Input';

export default function Footer() {
  
const {isFocusedfoot,setIsFocusedfoot}=useContext(UserContext);
  return (
    <>
      <div className='w-full mt-8  bg-brown'>
        {/* //subscribe to our newsletter */}
        <div className=' flex justify-evenly '>
          {/* //logo */}
          <div className='  mt-10 h-16 w-64'>
            <img src={Logo} alt="" className='h-full w-full' />
          </div>
          {/* //subscribe to our newsletter */}
          <div className='flex gap-8 flex-wrap'>
            <div>
              <div className='text-2xl text-white bold  mt-10'>Subscribe to our Newsletter</div>
              <div className='text-gray-400'>Get all the latest information, Deals and Offers.</div>
            </div>
            {/* //ENTER EMAIL BUTTON */}
            <Input intext="Enter your Email ID...." statef={setIsFocusedfoot} statev={isFocusedfoot} width={'auto'} height={'auto'} top={10}/>
            <div className=' h-16 w-32 text-white rounded-sm p-4 mt-10 text-2xl bg-red-600 hover:bg-blue-400 transition'>Subscribe</div>
          </div>

        </div>
        {/* //displaying the gray line */}

        <div className='bg-gray-400 h-1 w-full container max-w-7xl mx-auto mt-10'> </div>

        <div className='flex justify-evenly mt-5 flex-wrap  '>


          <ul className='text-white'>
            <li className='text-xl font-semibold  text-white '>Customer Support</li>
            <li><span className='text-gray-400'>Phone No.:</span><span className='hover:text-red-400'> +91-735-735-4040</span></li>
            <li><span className='text-gray-400'>Email:</span><span className='hover:text-red-400'> info@katorifresh.co.in</span></li>
            <li><span className=' text-gray-400'>Address:</span><span className='hover:text-red-400'> 113,First Floor,Vill Chilla Saroda <br /> Khadar,Mayur Vihar Extension 1,East Delhi <br /> -110091,India</span></li>
            <li><span className='text-gray-400'>working Hours:</span><span className='hover:text-red-400'>Mon - Sat /<br />  09:30 AM - 05:30 PM</span></li>
          </ul>
          <ul className='text-white'>
            <li className='text-xl font-semibold  text-white '>About Us</li>
            <li className='hover:text-red-400'>Our Journey</li>
            <li className='hover:text-red-400'>Unsung Heros</li>
            <li className='hover:text-red-400'>Sustainability</li>
            <li className='hover:text-red-400'>Traceability</li>
            <li className='hover:text-red-400'>Market Access</li>
            <li className='hover:text-red-400'>Blogs</li>
            <li className='hover:text-red-400'>Receipe</li>
          </ul>
          <ul className='text-white'>
            <li className='text-xl font-semibold  text-white '>FAQ'S</li>
            <li className='hover:text-red-400'>Fresh Dairy FAQ'S</li>
            <li className='hover:text-red-400'>Ghee FAQ'S</li>
            <li className='hover:text-red-400'>Honey FAQ'S</li>
            <li className='hover:text-red-400'>Pickle FAQ'S</li>
            <li className='hover:text-red-400'>Edible oil FAQ'S</li>
            <li className='hover:text-red-400'>Spices FAQ'S</li>
            <li className='hover:text-red-400'>Pulses FAQ'S</li>
          </ul>
          <ul className='text-white'>
            <li className='text-xl font-semibold  text-white '>Useful Links</li>
            <li className='hover:text-red-400'>Stores</li>
            <li className='hover:text-red-400'>Privacy & Policy</li>
            <li className='hover:text-red-400'>Terms & Conditions</li>
            <li className='hover:text-red-400'>Shipping & Refund Policy</li>
            <li className='hover:text-red-400'>Contact Us</li>

          </ul>
        </div>

        <div className='bg-gray-400 h-1 w-full container max-w-7xl mx-auto mt-10'> </div>
        <div className="flex justify-evenly mt-5 flex-wrap">
          <div className='h-16 w-16 '>
            <img src={Visa} alt=""  className='h-full w-full object-fit'/>
          </div>
          <div className='text-white'>Copyright Momma Foods 2024. All rights reserved.</div>
          <div className="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-8 w-8 icon cursor-pointer'><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill="#0000FF"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"className='h-8 w-8 cursor-pointer'><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" fill="#0000FF"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"className='h-8 w-8 cursor-pointer'><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="#FFC0CB"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-8 w-8 cursor-pointer'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"fill="#0000FF"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-8 w-8 cursor-pointer'><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" fill="FF0000"/></svg>
          </div>
        </div>
      </div>


    </>
  )
}
