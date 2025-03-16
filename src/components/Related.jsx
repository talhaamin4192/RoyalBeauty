import React from 'react'
import { Link } from 'react-router-dom'
import Related1 from '../assets/related1.jpg'
import Related2 from '../assets/related2.jpg'
import Related3 from '../assets/related3.jpg'
import Related4 from '../assets/related4.png'
import afterpay from '../assets/paymentm.svg'

const Related = () => {
    return (
        <div className='font-roboto bg-sec flex flex-col justify-center items-center h-screen w-full'>
            <div>
            <h2 className='text-[32px] font-semibold py-2'>Related Products</h2>
                <ul className='flex gap-10'>
                    <li>
                        <Link to='/' className='flex flex-col gap-7'>
                            <img src={Related1} alt="" />
                            <div  className='flex flex-col gap-1'>
                                <h3 className='text-brown-1 font-semibold'>Lash Lift and tint</h3>
                                <h4 className='text-brown-5 text-[13.7px]'>$120.00</h4>
                                <p className='text-sm text-brown-1 font-semibold mt-2'>
                                    or 4 payments of $30.00 with
                                    <Link to='/' >
                                        <img src={afterpay} alt="" />
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <button
                                    type='button'
                                    className='text-white bg-black rounded-full
                                     font-semibold px-4 py-2 border border-black 
                                     hover:bg-white hover:text-black
                                     transition-all duration-300 ease-in'>
                                    View Details
                                </button>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='flex flex-col gap-7'>
                            <img src={Related2} alt="" />
                            <div  className='flex flex-col gap-1'>
                                <h3 className='text-brown-1 font-semibold'>Laser Hair Removal</h3>
                                <h4 className='text-brown-5 text-[13.7px]'>$180.00</h4>
                                <p className='text-sm text-brown-1 font-semibold mt-2'>
                                    or 4 payments of $45.00 with
                                    <Link to='/' >
                                        <img src={afterpay} alt="" />
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <button
                                    type='button'
                                    className='text-white bg-black rounded-full
                                     font-semibold px-4 py-2 border border-black 
                                     hover:bg-white hover:text-black
                                     transition-all duration-300 ease-in'>
                                    View Details
                                </button>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='flex flex-col gap-7'>
                            <img src={Related3} alt="" />
                            <div  className='flex flex-col gap-1'>
                                <h3 className='text-brown-1 font-semibold'>Basic Facial</h3>
                                <h4 className='text-brown-5 text-[13.7px]'>$100.00</h4>
                                <p className='text-sm text-brown-1 font-semibold mt-2'>
                                    or 4 payments of $25.00 with
                                    <Link to='/' >
                                        <img src={afterpay} alt="" />
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <button
                                    type='button'
                                    className='text-white bg-black rounded-full
                                     font-semibold px-4 py-2 border border-black 
                                     hover:bg-white hover:text-black
                                     transition-all duration-300 ease-in'>
                                    View Details
                                </button>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='flex flex-col gap-7'>
                            <img src={Related4} alt="" />
                            <div  className='flex flex-col gap-1'>
                                <h3 className='text-brown-1 font-semibold'>Ombre Shading</h3>
                                <h4 className='text-brown-5 text-[13.7px]'>$525.00</h4>
                                <p className='text-sm text-brown-1 font-semibold mt-2'>
                                    or 4 payments of $131.25 with
                                    <Link to='/' >
                                        <img src={afterpay} alt="" />
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <button
                                    type='button'
                                    className='text-white bg-black rounded-full
                                     font-semibold px-4 py-2 border border-black 
                                     hover:bg-white hover:text-black
                                     transition-all duration-300 ease-in'>
                                    View Details
                                </button>
                            </div>

                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Related