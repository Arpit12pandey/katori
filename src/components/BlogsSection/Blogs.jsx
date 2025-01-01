import React from 'react'
import BlogCard from './BlogCard.jsx'
import vedicGheeImg from '../../assets/VedicGhee.jpg'
import Ghee3 from '../../assets/ghee3.jpg'
import HoneyImg from '../../assets/Honey.jpg'
import ShilajitImg from '../../assets/Shilajit2.jpg'
import ButterImg from '../../assets/PeanutButter.jpg'
import GoldImg from '../../assets/NandlalGold.jpg'
import {summaries} from './Summaries.jsx'
export default function Blogs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Flex container for Featured Blogs and View All */}
      <div className="flex justify-between items-center w-full max-w-4xl px-4">
        {/* Title: "Featured Blogs" */}
        <div>
          <span className="text-4xl font-semibold">OUR PRODUCTS</span>
          {/* Underline */}
          <div className="bg-red-600 h-1 w-64 text-3xl font-bold"></div>
        </div>
      </div>

      {/* Blog Cards Container */}
      <div className="animate-slideInRight flex flex-wrap gap-2 justify-center mt-10 w-full max-w-6xl px-2">
  <div className="w-full lg:w-1/4">
    <BlogCard title={"VEDIC GHEE"} image={vedicGheeImg} summary={summaries.VedicGhee} descpage="/gheedesc"/>
  </div>
  <div className="w-full lg:w-1/4">
    <BlogCard title={"HONEY"} image={HoneyImg}  summary={summaries.Honey} descpage="/honeydesc" />
  </div>
  <div className="w-full lg:w-1/4">
    <BlogCard title={"SHILAJIT"} image={ShilajitImg} summary={summaries.Shilajit} descpage="/shilajitdesc"/>
  </div>
  <div className="w-full lg:w-1/4">
    <BlogCard title={"PEANUT BUTTER"} image={ButterImg} summary={summaries.PeanutButter} descpage="/butterdesc" />
  </div>
  <div className="w-full lg:w-1/4">
    <BlogCard title={"A2 COW GHEE"} image={Ghee3} summary={summaries.GheeA2Cow} descpage="/cowgheedesc"/>
  </div>
  <div className="w-full lg:w-1/4">
    <BlogCard title={"NANDLAL GOLD"} image={GoldImg} summary={summaries.NaturalGold} descpage="/golddesc" />
  </div>
</div>

    </div>
  )
}
