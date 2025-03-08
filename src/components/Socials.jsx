import React from 'react'
import { IoLogoInstagram } from "react-icons/io";

const Socials = () => {
    return (
        <div className=' h-67 w-full flex items-center justify-center bg-white-2'>
            <div className='text-center'>
                <h1 className='font-anton uppercase tracking-widest text-5xl mb-15' >Gallery</h1>
                <button
                    type='button'
                    className='px-4 py-2 flex gap-2 items-center
                    text-white bg-blue-1 rounded-md text-sm mt-13
                    hover:brightness-110'>
                    <span className='text-[18px]'>
                        <IoLogoInstagram />
                    </span>
                    Follow on Instagram
                </button>
            </div>
        </div>
    )
}

export default Socials