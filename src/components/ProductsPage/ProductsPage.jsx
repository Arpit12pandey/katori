import React from 'react';
import Sidebar from './Sidebar/Sidebar';

export default function ProductsPage(props) {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className='bg-gray-100 p-8 h-8 flex items-center'>
        HOME &gt; CATEGORIES &gt; {props.name}
      </div>
      <div className='flex gap-5 m-8'>
        <Sidebar />
        <div className='flex-1'>
          <h1 className='text-4xl font-bold'>{props.name}</h1>
          {/* SORT BY BOX */}
          <div className='flex gap-2 items-center mt-5'>
            <div className='text-sm font-bold'>SORT BY:</div>
            <select className='border border-gray-300 rounded px-2 py-1 text-sm '>
              <option value="default" >Default</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
              <option value="discount">Discount</option>
            </select>
          </div>
          <div className='flex justify-center items-center text-xl mt-10'>
            NO PRODUCTS FOUND
          </div>
        </div>
      </div>
    </>
  );
}
