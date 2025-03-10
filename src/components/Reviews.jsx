import React from 'react'
import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
import review3 from '../assets/review3.png'
import review4 from '../assets/review4.png'
import review5 from '../assets/review5.png'
import googleIcon from '../assets/googleIcon.svg'
import star from '../assets/f.svg'
import { Link } from 'react-router-dom'
const Reviews = () => {
    return (
        <>
            <div className='h-[200vh] w-full flex items-center flex-col gap-6 py-16 font-roboto'>
                <h2 className='uppercase font-anton text-[28px] ' >
                    What Our Beautiful & Happy Clients Say About Us
                </h2>
                <div className='[&>*]:bg-white-1 grid grid-cols-[780px]
                gap-5 [&>*]:rounded-md [&>*]:hover:-translate-y-1 '>
                    <div className='p-5 flex flex-col gap-2.5 transition-transform ease-in-out'>
                        <div className='flex gap-4'>
                            <img className=' size-10' src={review1} alt="review1" />
                            <div className='flex w-full justify-between'>
                                <div >
                                    <div className='flex '>
                                        <h4 className='text-sm font-bold'>Majida Habeeb</h4>
                                    </div>
                                    <h5 className='text-[11.2px] opacity-50'>4 November 2024</h5>
                                </div>
                                <img className='size-5' src={googleIcon} alt="" />
                            </div>
                        </div>
                        <div className='[&>*]:size-4.5 flex '>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p className='text-[15px]'>Amazing experience from this school Zabel is the best! Highly recommend for anyone looking to get <br />microblading or any permanent makeup services. We’ll definitely be coming back!
                        </p>

                    </div>
                    <div className='p-5 flex flex-col gap-2.5 transition-transform ease-in-out'>
                        <div className='flex gap-4'>
                            <img className=' size-10' src={review2} alt="review2" />
                            <div className='flex justify-between w-full'>
                                <div>
                                    <div className='flex'>
                                        <h4 className='text-sm font-bold'>Elegance With Rashav</h4>

                                    </div>
                                    <h5 className='text-[11.2px] opacity-50'>31 October 2024</h5>
                                </div>
                                <img className='size-5' src={googleIcon} alt="" />
                            </div>

                        </div>
                        <div className='[&>*]:size-4.5 flex '>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p className='text-[15px]'>I came for Microblading and Zabel did an amazing job not only with doing brows, but also instructing students <br />in a highly professional manner. She’s highly knowledgeable  and I highly recommend this school for beauty <br /> aesthetics classes.
                        </p>

                    </div>
                    <div className='p-5 flex flex-col gap-2.5 transition-transform ease-in-out'>
                        <div className='flex gap-4'>
                            <img className=' size-10' src={review3} alt="review1" />
                            <div className='flex w-full justify-between'>
                                <div>
                                    <div className='flex'>
                                        <h4 className='text-sm font-bold'>nashmil mansouri</h4>
                                    </div>
                                    <h5 className='text-[11.2px] opacity-50'>25 October 2024</h5>
                                </div>
                                <img className='size-5' src={googleIcon} alt="" />

                            </div>

                        </div>
                        <div className='[&>*]:size-4.5 flex '>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div>
                        <p className='text-[15px] line-clamp-4'>I’m so grateful for the amazing experience I had at Royal Beauty European School. Zabel is a fantastic instructor whose expertise and dedication truly shine through in every lesson. She was incredibly supportive, even after I finished the program—she went above and beyond by giving me a shoutout and posting my Instagram “pmu.nashmil”. I’ve learned so much under her guidance, from mastering techniques to building my confidence as a PMU artist. Thank you, Zabel, for your patience and for sharing your knowledge so generously. For anyone looking to start or advance their PMU journey, I highly recommend this school!
                        </p>
                        <Link to='/' className='opacity-50 text-sm py-2 hover:underline hover:opacity-100'>
                        Read more
                        </Link>
                        </div>
                    </div>
                    <div className='p-5 flex flex-col gap-2.5 transition-transform ease-in-out'>
                        <div className='flex gap-4'>
                            <img className=' size-10' src={review4} alt="review4" />
                            <div className='flex justify-between w-full'>
                                <div>
                                    <div className='flex '>
                                        <h4 className='text-sm font-bold'>Mallika S</h4>
                                    </div>
                                    <h5 className='text-[11.2px] opacity-50'>19 October 2024</h5>
                                </div>
                                <img className='size-5' src={googleIcon} alt="" />

                            </div>

                        </div>
                        <div className='[&>*]:size-4.5 flex '>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div>
                        <p className='text-[15px] line-clamp-4'>I recently completed eyelash extensions and     PMU training with Zabel , and I am thoroughly impressed by the quality of her instruction. The courses were meticulously structured, offering precise and clear guidance at every stage. Her attention to detail is exceptional, ensuring that all aspects of the training were covered comprehensively.  The hands-on practice was a significant highlight, allowing me to gain practical experience and refine my skills. What sets Zabel apart is the individual attention she provides, ensuring that each trainee recipes tailored feedback and support.
                        </p>
                        <Link to='/' className='opacity-50 text-sm py-2 hover:underline hover:opacity-100'>
                        Read more
                        </Link>
                        </div>
                    </div>
                    <div className='p-5 flex flex-col gap-2.5 transition-transform ease-in-out'>
                        <div className='flex gap-4'>
                            <img className=' size-10' src={review5} alt="review5" />
                            <div className='flex justify-between w-full'>
                                <div>
                                    <div className='flex'>
                                        <h4 className='text-sm font-bold'>patricia guillen</h4>
                                    </div>
                                    <h5 className='text-[11.2px] opacity-50'>19 October 2024</h5>
                                </div>
                                <img className='size-5' src={googleIcon} alt="" />

                            </div>

                        </div>
                        <div className='[&>*]:size-4.5 flex '>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p className='text-[15px]'>I’m very happy with my training elisabe.was very clear she explained everything in detail thank you European beauty school
                        </p>

                    </div>
                </div>
                <button className='border-0 bg-white-1 px-5 py-2.5
                rounded-md text-sm cursor-pointer hover:bg-white-3
                transition-all ease-in duration-300'>
                    Load more
                </button>
            </div>
        </>
    )
}

export default Reviews