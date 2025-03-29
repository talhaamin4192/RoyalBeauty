import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/royal-beauty-logo.png'
import cart from '../assets/cart.svg'
const Header = () => {
    return (
        <div className='font-light'>
            <div className='bg-brown-1 h-15 w-full flex items-center justify-center '>
                <Link to="/" className=' underline text-white px-3 py-2 bg-black hover:text-brown-2 transition-colors 
                ease-in duration-250 tracking-widest text-sm' >
                    CALL OR TEXT NOW 647-323-1622 FOR FASTER REPLY
                </Link>
            </div>
            <div className='bg-sec flex justify-between py-5 px-14 border-b-black border-b-1'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='flex [&>*]:px-3 items-center'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:duration-250 
                                       after:content-[""] hover:after:h-[3px]
                                       hover:after:opacity-100 after:ease-in after:opacity-0 px-2'
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:duration-250 
                                       after:content-[""] hover:after:h-[3px]
                                       hover:after:opacity-100 after:ease-in after:opacity-0 px-2'
                        >
                            In person trainings
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:duration-250 
                                       after:content-[""] hover:after:h-[3px]
                                       hover:after:opacity-100 after:ease-in after:opacity-0 px-2'
                        >
                            Online Classes
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/Service'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:ease-in after:duration-300 
                                       after:content-[""] hover:after:h-[3px] px-2'
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:duration-250 
                                       after:content-[""] hover:after:h-[3px]
                                       hover:after:opacity-100 after:ease-in after:opacity-0 px-2'
                        >
                            Payment Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:duration-250 
                                       after:content-[""] hover:after:h-[3px]
                                       hover:after:opacity-100 after:ease-in after:opacity-0 px-2'
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/'
                            className='relative after:absolute after:-bottom-3 after:left-0 after:w-full 
                                        after:bg-brown-2 after:transition-all after:duration-250 
                                       after:content-[""] hover:after:h-[3px]
                                       hover:after:opacity-100 after:ease-in after:opacity-0 px-2'
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="relative">
                        <Link to="/Cart">
                            <img className="absolute left-0 right-0 -bottom-2" src={cart} alt="" />
                            <span className="absolute text-sm flex justify-center items-center bottom-3
                             -right-3 size-6 text-center bg-brown-2 text-white rounded-full">
                                0
                            </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header