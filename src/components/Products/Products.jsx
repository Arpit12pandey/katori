import React from 'react'
import DesiGhee from '../../assets/DesiGhee.webp'
import Honey from '../../assets/honey.webp'
import Pickles from '../../assets/pickles.jpeg'
import Pulses from '../../assets/pulses.jpg'
import Spices from '../../assets/spices.webp'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <>
    <div>
    <div className='flex justify-center items-center gap-7'>
    <Link  to={'/'} className='overflow-hidden rounded-xl '>
      <img src={DesiGhee} alt="DesiGhee Image" className='w-64 h-64 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'} className='overflow-hidden rounded-xl '>
      <img src={Spices} alt="DesiGhee Image" className='w-64 h-64 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      </div>
      <div className='flex justify-center items-center gap-7 m-8'>
        <Link  to={'/'}className='overflow-hidden rounded-xl '>
      <img src={Honey} alt="DesiGhee Image" className='w-64 h-64 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'}className='overflow-hidden rounded-xl '>
      <img src={Pulses} alt="DesiGhee Image" className='w-64 h-64 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'}className='overflow-hidden rounded-xl '>
      <img src={Pickles} alt="DesiGhee Image" className='w-64 h-64 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      </div>
      </div>
    </>
  )
}
