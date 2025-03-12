import React from 'react'
import { Link } from 'react-router-dom'
import img5 from '../assets/services1.webp'
import img6 from '../assets/services2.jpg'
import img7 from '../assets/services3.webp'
import img8 from '../assets/services4.jpg'
import LoadBtn from './LoadBtn'
const Services = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-around py-4 px-12 items-center font-roboto bg-light-orange '>
            <div>
                <h2 className='font-anton text-3xl'>OUR SERVICES</h2>
            </div>
            <div className='grid grid-cols-4 gap-10 [&>*]:bg-white [&>*]:rounded-xl
            [&>*]:p-2' >
                <div className='flex flex-col  gap-5 items-center'>
                    <img
                        className='rounded-lg h-62 w-68 object-cover'
                        src={img5}
                        alt="Nano Stroke Eyebrows" />
                    <Link className='font-bold' to='/'>Nano Hair Strokes</Link>
                    <p className='text-center  line-clamp-3 leading-6 font-sans'>Nano Hair Strokes uses a digital machine to create fine, natural-looking brow strokes that last 18–24 months with proper aftercare.</p>
                    <Link
                        to='/'
                        className='font-light uppercase hover:opacity-75
                        transition-all duration-250 ease-in py-3 text-sm 
                        tracking-widest'>
                        Services & Price List ⟶
                    </Link>
                </div>
                <div className='flex flex-col  gap-5 items-center'>
                    <img
                        className='rounded-lg h-62 w-68 object-cover'
                        src={img6}
                        alt="Microblading + Shading (Powdering)" />
                    <Link className='font-bold' to='/'>Microblading + Shading (Powdering)</Link>
                    <p className='text-center  line-clamp-3 leading-6 font-sans'>Combination Brows combines microblading and shading for natural, defined brows that last 18–24 months with proper aftercare.</p>
                    <Link
                        to='/'
                        className='font-light uppercase hover:opacity-75
                        transition-all duration-250 ease-in py-3 text-sm 
                        tracking-widest'>
                        Services & Price List ⟶
                    </Link>
                </div>
                <div className='flex flex-col  gap-5 items-center'>
                    <img
                        className='rounded-lg h-62 w-68 object-cover'
                        src={img7}
                        alt="Microblading" />
                    <Link className='font-bold' to='/'>Microblading</Link>
                    <p className='text-center  line-clamp-3 leading-6 font-sans'>Microblading is a semi-permanent technique that creates natural-looking brows with fine strokes, lasting 12–18 months.</p>
                    <Link
                        to='/'
                        className='font-light uppercase hover:opacity-75
                        transition-all duration-250 ease-in py-3 text-sm 
                        tracking-widest'>
                        Services & Price List ⟶
                    </Link>
                </div>
                <div className='flex flex-col  gap-5 items-center'>
                    <img
                        className='rounded-lg h-62 w-68 object-cover'
                        src={img8}
                        alt="Nano Stroke Eyebrows" />
                    <Link className='font-bold' to='/'>Laser Hair Removal</Link>
                    <p className='text-center  line-clamp-3 leading-6 font-sans'>Laser hair removal targets hair at the root to reduce growth, leaving skin smooth and cared for, suitable for all skin types and almost any body area.</p>
                    <Link
                        to='/'
                        className='font-light uppercase hover:opacity-75
                        transition-all duration-250 ease-in py-3 text-sm 
                        tracking-widest'>
                        Services & Price List ⟶
                    </Link>
                </div>
            </div>
            <div>
               <LoadBtn></LoadBtn>
            </div>

        </div>
    )
}

export default Services