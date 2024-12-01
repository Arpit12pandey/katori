import React from 'react'
import BlogCard from './BlogCard.jsx'

export default function Blogs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Flex container for Featured Blogs and View All */}
      <div className="flex justify-between items-center w-full max-w-4xl px-4">
        {/* Title: "Featured Blogs" */}
        <div>
          <span className="text-4xl font-semibold">Featured Blogs</span>
          {/* Underline */}
          <div className="bg-red-600 h-1 w-64 text-3xl font-bold"></div>
        </div>

        {/* View All with icon */}
        <div className="flex items-center gap-1">
          <span className="font-semibold">VIEW ALL</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </div>

      {/* Blog Cards Container */}
      <div className="animate-slideInRight flex gap-3 justify-evenly mt-10 w-full max-w-6xl px-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}
