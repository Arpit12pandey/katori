import React from 'react'
import pic1 from '../../assets/PeanutButter.jpg'

export default function BlogCard() {
  return (
    <div className='bg-white m-auto p-4 rounded-md items-center'>
      {/* Center the image */}
      <div className=' overflow-hidden rounded-lg flex justify-around items-center'>
        <img src={pic1} alt="" className='h-full w-full object-cover transition-transform duration-300 hover:scale-110' />
      </div>
      {/* Heading with center alignment */}
      <div className='mt-4 text-xl hover:text-blue-500 font-bold text-center'>
        10 Factors to consider while <br /> choosing your Cooking Oil
      </div>
      {/* Description with center alignment */}
      <div className='text-gray-500 text-center'>
        Confused about which oil is best for you? This crisp comparison of refined and cold-pressed oils will help you decide. With the multitude of...
      </div>
      <div className='text-red-600 flex justify-center items-center'>
          READ MORE
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='red'/>
          </svg>
      </div>
    </div>
  )
}
