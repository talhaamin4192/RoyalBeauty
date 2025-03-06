import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/eyebrowsNano.jpg'
import img2 from '../assets/EyebrowsPMU.png'
import img3 from '../assets/LipsPMU.jpeg'
import img4 from '../assets/SemiPermanent.png'
const Courses = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-around py-4 px-12 items-center font-roboto '>
            <div>
                <h2 className='font-anton text-3xl'>OUR COURCES</h2>
            </div>
            <div className='grid grid-cols-4 gap-10 [&>*]:bg-light-orange [&>*]:rounded-xl
            [&>*]:p-4' >
                <div className='flex flex-col  gap-5 items-center'>
                    <img
                        className='rounded-lg h-50 w-66 object-cover'
                        src={img1}
                        alt="Nano Stroke Eyebrows" />
                    <Link className='line-clamp-1 font-bold' to='/'>Eyebrow ( Nano Strokes, Ombre Shading, Microblading and Combination Technique) All in one Brows PMU training bundle</Link>
                    <div className='font-anton flex flex-col items-center '>
                        <h2 className='text-brown-3 line-through text-2xl tracking-widest'>$3,200.00</h2>
                        <h3 className='text-brown-4 text-sm tracking-widest'>$1,800.00</h3>
                    </div>
                    <button className='bg-black text-sm text-white font-light px-8 py-3 rounded-3xl
                    border-1 hover:text-black hover:bg-white transition-all duration-250 ease-in'>
                        BOOK NOW
                    </button>
                </div>
                <div className='flex flex-col  gap-6 items-center'>
                    <img
                        className='rounded-lg h-50 w-66 object-cover'
                        src={img2}
                        alt="Lips PMU" />
                    <Link className='line-clamp-1 font-bold' to='/'>Eyebrows + Lips PMU All in one Bundle ( Nano Strokes, Ombre Shading, Microblading and Combination Technique, Lip Blushing, Dark Lip Neutralization)</Link>
                    <div className='font-anton flex flex-col items-center '>
                        <h2 className='text-brown-1 text-2xl tracking-widest py-1'>$2,500.00</h2>
                    </div>
                    <button className='bg-black text-sm text-white font-light px-8 py-3 rounded-3xl
                    border-1 hover:text-black hover:bg-white transition-all duration-250 ease-in'>
                        BOOK NOW
                    </button>
                </div>
                <div className='flex flex-col  gap-6 items-center'>
                    <img
                        className='rounded-lg h-50 w-66 object-cover'
                        src={img3}
                        alt="Eyebrows+PMU" />
                    <Link className='line-clamp-1 font-bold' to='/'>Eyebrows + Lips PMU and Paramedical Tattoo All in one semi-permanent makeup training bundle</Link>
                    <div className='font-anton flex flex-col items-center '>
                        <h2 className='text-brown-1 text-2xl tracking-widest py-1'>$4,000.00</h2>
                    </div>
                    <button className='bg-black text-sm text-white font-light px-8 py-3 rounded-3xl
                    border-1 hover:text-black hover:bg-white transition-all duration-250 ease-in'>
                        BOOK NOW
                    </button>
                </div>
                <div className='flex flex-col  gap-6 items-center'>
                    <img
                        className='rounded-lg h-50 w-66 object-cover'
                        src={img4}
                        alt="Semi Permanent" />
                    <Link className='line-clamp-1 font-bold' to='/'>Lips Semi-Permanent Makeup Training</Link>
                    <div className='font-anton flex flex-col items-center '>
                        <h2 className='text-brown-1 text-2xl tracking-widest py-1'>$1,200.00</h2>
                    </div>
                    <button className='bg-black text-sm text-white font-light px-8 py-3 rounded-3xl
                    border-1 hover:text-black hover:bg-white transition-all duration-250 ease-in'>
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div>
                <button className='bg-black text-sm text-white font-light px-9 py-3 rounded-3xl
                    border-1 hover:text-black hover:bg-white transition-all duration-250 ease-in'>
                    LOAD MORE
                </button>
            </div>

        </div>
    )
}

export default Courses