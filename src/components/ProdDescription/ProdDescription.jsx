import React from 'react'

export default function ProdDescription(props) {
  return (
   <>
   <div className='bg-gray-100 p-8 h-8 flex items-center'>
        HOME &gt; ABOUT &gt; {props.name}
      </div>
      <div className='flex justify-center items-center'>
       <div>
         {/* div for image */}
         <div className=' overflow-hidden rounded-lg flex justify-around items-center m-8'>
        <img src={props.image} alt="" className='h-full w-full object-contain transition-transform duration-300 hover:scale-110  min-h-[150px] max-h-[150px] lg:min-h-[300px] lg:max-h-[300px]  ' />
      </div>
      {/* Heading with center alignment */}
      <div className='mt-4 flex text-gray-600 justify-center items-center text-xl font-bold text-center'>
        {props.name}
      </div>
      {/* Description with center alignment */}
      <div className='text-gray-500 text-center'>
      <p className="whitespace-pre-wrap text-center">{props.description}</p>
      </div>
       </div>

      </div>
   </>
  )
}
