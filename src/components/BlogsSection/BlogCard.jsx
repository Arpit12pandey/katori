import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard(props) {
  return (
    <div className='bg-white m-auto p-4 rounded-md items-center w-full'>
      {/* Center the image */}
      <div className=' overflow-hidden rounded-lg flex justify-around items-center'>
        <img src={props.image} alt="" className='h-full w-full object-cover transition-transform duration-300 hover:scale-110  min-h-[150px] max-h-[150px] lg:min-h-[300px] lg:max-h-[300px]  ' />
      </div>
      {/* Heading with center alignment */}
      <div className='mt-4 flex text-gray-600 justify-center items-center text-xl hover:text-blue-500 font-bold text-center'>
        {props.title}
      </div>
      {/* Description with center alignment */}
      <div className='text-gray-500 text-center'>
     {props.summary}
      </div>
      <Link to ={props.descpage} className='text-red-600 flex justify-center items-center  rounded-sm p-3 hover:border border-red-500 transition duration-300 '>
          READ MORE
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='red'/>
          </svg>
      </Link>
    </div>
  )
}
