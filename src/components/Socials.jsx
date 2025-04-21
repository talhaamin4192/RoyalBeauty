import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import royalImg from '../assets/royalbeautyschoolca.jpg'
import location from '../assets/1f4cd.svg'
import flag from '../assets/1f1e6.svg'
import medal from '../assets/1f947.svg'
import gradute from '../assets/1f393.svg'
import down from '../assets/1f447.svg'

const Socials = () => {
    return (
        <div className=' h-max py-10 w-full px-14 bg-white-2'>
            <div className=''>
                <h1 className='font-anton uppercase tracking-widest text-5xl mb-15 text-center' >Gallery</h1>
                <div className='w-full flex flex-col items-start'>
                    <div className='flex items-center gap-4 group:'>
                        <div className='hover:cursor-pointer'>
                            <img
                                className='rounded-full'
                                src={royalImg} alt=""
                            />
                        </div>
                        <div className='text-red-6'>
                            <h2 className='text-xl'>royalbeautyschool.ca</h2>
                            <p className='flex text-sm items-center gap-0.5'>Award Winning Academy
                                <img
                                className='size-3.5' 
                                 src={medal} alt="" />
                                <img
                                className='size-3.5' 
                                 src={gradute} alt="" />
                                Beauty School in Toronto
                                <img
                                className='size-3.5' 
                                 src={location} alt="" />
                                <img
                                className='size-3.5' 
                                 src={flag} alt="" />
                                Click Below to sign up
                                <img
                                className='size-3.5' 
                                 src={down} alt="" />
                            </p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='flex mt-13 gap-4 w-full justify-center '>
                    <button
                        className='bg-black-6 rounded-md px-4 
                    text-white py-2 hover:opacity-80
                    text-sm'>
                        Load More
                    </button>
                    <button
                        type='button'
                        className='px-4 py-2 flex gap-2 items-center
                    text-white bg-blue-1 rounded-md text-sm 
                    hover:brightness-110'>
                        <span className='text-[18px]'>
                            <IoLogoInstagram />
                        </span>
                        Follow on Instagram
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Socials