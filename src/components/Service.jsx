import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LoadBtn from './LoadBtn'
import item1 from '../assets/item1.webp'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.webp'
import item4 from '../assets/item4.png'
import item5 from '../assets/item5.png'
import item6 from '../assets/item6.jpg'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <div className='font-roboto'>
            <Header></Header>
            <div className='w-full h-[296vh]'>
                <div className='h-[26vh] bg-sec flex justify-center items-center'>
                    <h1 className='font-anton text-[46px] tracking-widest'>
                        SERVICES
                    </h1>
                </div>
                <div className='flex flex-col gap-7  justify-center bg-light-orange items-center h-[270vh] w-full '>
                    <h2 className='font-anton text-[28px] '>
                        SERVICES LIST
                    </h2>
                    <div>
                        <div className='grid grid-cols-[940px] gap-10 [&>*]:flex [&>*]:items-center [&>*]:p-2
                        [&>*]:rounded-sm  [&>*]:shadow-lg [&>*]:justify-between' >
                            <div>
                                <img className='h-50 w-42 object-cover' src={item1} alt="" />
                                <div className='w-[54%] h-full flex flex-col gap-10 px-2 py-1'>
                                    <h3 className='font-bold'> Nano Hair Strokes</h3>
                                    <p>Nano Hair Strokes uses a digital machine to create fine, natural-looking brow strokes that last 18–24 months with proper aftercare.</p>
                                    <h2 className='font-anton tracking-widest text-brown-1
                                    text-2xl'>$650.00</h2>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='py-3 px-19 bg-black text-white text-sm
                                        font-light tracking-wider rounded-full hover:bg-white
                                        hover:text-black border-1 transition-all ease-in 
                                        duration-150 '>
                                        <Link to='/Product1'>
                                        VIEW DETAILS
                                        </Link>
                                    </button>
                                </div>

                            </div>
                            <div>
                                <img className='h-50  w-42 object-cover' src={item2} alt="" />
                                <div className='w-[54%] h-full flex flex-col gap-10 px-2 py-1'>
                                    <h3 className='font-bold'>Microblading + Shading (Powdering)</h3>
                                    <p>Combination Brows combines microblading and shading for natural, defined brows that last 18–24 months with proper aftercare.</p>
                                    <h2 className='font-anton tracking-widest text-brown-1
                                    text-2xl'>$500.00</h2>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='py-3 px-19 bg-black text-white text-sm
                                         font-light tracking-wider rounded-full  hover:bg-white
                                        hover:text-black border-1 transition-all ease-in 
                                        duration-150
                                          '>
                                        <Link to='/Product2'>
                                        VIEW DETAILS
                                        </Link>
                                    </button>
                                </div>

                            </div>
                            <div>
                                <img className='h-50 w-42 object-cover' src={item3} alt="" />
                                <div className='w-[54%] h-full flex flex-col gap-10 px-2 py-1'>
                                    <h3 className='font-bold'>Microblading</h3>
                                    <p>Microblading is a semi-permanent technique that creates natural-looking brows with fine strokes, lasting 12–18 months.</p>
                                    <h2 className='font-anton tracking-widest text-brown-1
                                    text-2xl'>$425.00</h2>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='py-3 px-19 bg-black text-white text-sm
                                    font-light tracking-wider rounded-full  hover:bg-white
                                        hover:text-black border-1 transition-all ease-in 
                                        duration-150 '>
                                        <Link to='/Product3'>
                                        VIEW DETAILS
                                        </Link>
                                    </button>
                                </div>

                            </div>
                            <div>
                                <img className='h-50 w-42 object-cover' src={item4} alt="" />
                                <div className='w-[54%] h-full flex flex-col gap-10 px-2 py-1'>
                                    <h3 className='font-bold'>Dark Lip Neutralization</h3>
                                    <p>Dark Lip Neutralization is a semi-permanent treatment to lighten and balance dark lips for a natural, even tone.</p>
                                    <h2 className='font-anton tracking-widest text-brown-1
                                    text-2xl'>$450.00</h2>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='py-3 px-19 bg-black text-white text-sm
                                    font-light tracking-wider rounded-full  hover:bg-white
                                        hover:text-black border-1 transition-all ease-in 
                                        duration-150 '>
                                        <Link to='/Product4'>
                                        VIEW DETAILS
                                        </Link>
                                    </button>
                                </div>

                            </div>
                            <div>
                                <img className='h-50 w-42 object-cover' src={item5} alt="" />
                                <div className='w-[54%] h-full flex flex-col gap-10 px-2 py-1'>
                                    <h3 className='font-bold'>Lip Blushing</h3>
                                    <p>Lip blushing is a semi-permanent cosmetic tattoo that enhances the natural shape and color of the lips, giving them a subtle, tinted appearance.</p>
                                    <h2 className='font-anton tracking-widest text-brown-1
                                    text-2xl'>$450.00</h2>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='py-3 px-19 bg-black text-white text-sm
                                    font-light tracking-wider rounded-full  hover:bg-white
                                        hover:text-black border-1 transition-all ease-in 
                                        duration-150 '>
                                        <Link to='/Product5'>
                                        VIEW DETAILS
                                        </Link>
                                    </button>
                                </div>

                            </div>
                            <div>
                                <img className='h-50 w-42 object-cover' src={item6} alt="" />
                                <div className='w-[54%] h-full flex flex-col gap-10 px-2 py-1'>
                                    <h3 className='font-bold'>Lip Liner</h3>
                                    <p>Nano Strokes uses ultra-fine needles to create precise, natural-looking eyebrow hair strokes with refined detail.</p>
                                    <h2 className='font-anton tracking-widest text-brown-1
                                    text-2xl'>$450.00</h2>
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='py-3 px-19 bg-black text-white text-sm
                                         font-light tracking-wider rounded-full  hover:bg-white
                                        hover:text-black border-1 transition-all ease-in 
                                        duration-150'>
                                        <Link to='/Product6'>
                                        VIEW DETAILS
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LoadBtn></LoadBtn>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Service