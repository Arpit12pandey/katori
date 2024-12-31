import React from 'react'
import DesiGhee from '../../assets/Ghee.jpg'
import Honey from '../../assets/honey2.jpg'
import Pickles from '../../assets/PeanutButter.jpg'
import Pulses from '../../assets/Shilajit2.jpg'
import Spices from '../../assets/Shilajit.jpg'
import Shilajit2 from '../../assets/VedicGhee.jpg'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <>
    <div className='animate-slideInRight'>
    <div className='flex flex-col md:flex-row md:gap-6 gap-4 p-4 md:p-4 justify-center items-center'>
    <Link  to={'/'} className='overflow-hidden rounded-2xl '>
      <img src={DesiGhee} alt="DesiGhee Image" className='w-96 h-72 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'} className='overflow-hidden rounded-2xl '>
      <img src={Spices} alt="DesiGhee Image" className='w-96 h-72 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'}className='overflow-hidden rounded-2xl '>
      <img src={Honey} alt="DesiGhee Image" className='w-96 h-72 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      </div>
      <div className='flex flex-col md:flex-row md:gap-6 gap-4 p-4 md:p-4 justify-center items-center'>
        
      <Link  to={'/'}className='overflow-hidden rounded-2xl '>
      <img src={Pulses} alt="DesiGhee Image" className='w-96 h-72 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'}className='overflow-hidden rounded-2xl '>
      <img src={Pickles} alt="DesiGhee Image" className='w-96 h-72 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      <Link  to={'/'}className='overflow-hidden rounded-2xl '>
      <img src={Shilajit2} alt="DesiGhee Image" className='w-96 h-72 object-fit transition-transform  duration-300 hover:scale-110 ' />
      </Link>
      </div>
      </div>
    </>
  )
}
