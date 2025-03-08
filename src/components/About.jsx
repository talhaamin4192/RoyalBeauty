import React from 'react'
import { Link } from 'react-router-dom'
import grid1 from '../assets/grid1.png'
const About = () => {
  return (
    <>
    <div className='font-anton h-98  w-full px-12 grid grid-cols-3  '>
    <div className=' flex gap-12 px-20 py-10 col-span-2 '>
        <h1 className='text-brown-1 text-[98px] leading-25 tracking-wider'>01</h1>
        <div className='flex flex-col gap-5'>
          <h2 className='text-[28px] tracking-wide '>ABOUT US</h2>
          <p className='font-roboto font-light leading-7 '>
            Royal Beauty European School is a premier academy dedicated to shaping the future of beauty professionals. We offer comprehensive certification programs in semi-permanent makeup, nails, facials, and eyelash extensions. With expert instructors and a focus on hands-on training, we empower students to master their skills and excel in the industry. Our commitment is to inspire creativity, professionalism, and success in every student’s journey.
          </p>
          <Link
            to='/'
            className='font-light uppercase hover:opacity-75
            transition-all duration-250 ease-in py-3 text-sm 
            tracking-widest font-roboto'>
            MORE ABOUT US ⟶
          </Link>
        </div>
    </div>
      <div className='col-span-1 '>
        <img  className='size-full object-cover' src={grid1} alt="" />
      </div>
    </div>
      
    </>
  )
}

export default About