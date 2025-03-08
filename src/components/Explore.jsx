import React from 'react'
import Explore1 from '../assets/Explore.png'
import { Link } from 'react-router-dom'
const Explore = () => {
  return (
    <div className='grid grid-cols-2 px-12 h-[80vh] items-center w-full bg-light-orange'>
        <div>
            <img src={Explore1} alt="" />
        </div>
        <div>
        <div className=' flex gap-4 h-full pr-28 py-10   font-anton '>
               <h1 className='text-brown-1 text-[98px] leading-25 tracking-wider'>02</h1>
               <div className='flex flex-col gap-5'>
                 <h2 className='text-[28px] tracking-wide '>WHY CHOOSE US</h2>
                 <p className='font-roboto font-light text-[18px] leading-7 '>
                 Looking to get certified from an award-winning academy? Look no further! Our academy offers top-notch certification programs that will help you take your career to the next level. Enroll now and join the ranks of our successful graduates!
                 </p>
                 <Link
                   to='/'
                   className='font-light uppercase hover:opacity-75
                   transition-all duration-250 ease-in py-3 text-sm 
                   tracking-widest font-roboto'>
                   Explore Gallery ⟶
                 </Link>
               </div>
           </div>
        </div>
        
    </div>
  )
}

export default Explore