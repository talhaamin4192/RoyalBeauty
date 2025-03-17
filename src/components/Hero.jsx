import React from 'react'
// import productsImg from "../assets/OurProducts.jpg"
// import Gallery from "../assets/GalleryPage.jpg"
import left from "../assets/left.svg"
import right from "../assets/right.svg"

import Awards from "../assets/awards.png"
const Hero = () => {
    return (
        <>
            <div className='h-[160vh] w-full  bg-sec font-anton flex flex-col justify-around 
             py-10'>
                <div className='flex flex-col gap-10 items-center' >
                    <h1 className='text-[42px]'>WELCOME TO ROYAL BEAUTY EUROPEAN SCHOOL</h1>
                    <div className='grid grid-cols-4 gap-4 text-white 
                    [&>*]:h-55 [&>*]:w-75 [&>*]:bg-cover [&>*]:rounded-lg
                    [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-3xl
                    [&>*]:tracking-widest '>
                        <div className='bg-[url(src/assets/gallery.jpg)] bg-center '>IN PERSON <br /> TRAININGS</div>
                        <div className='bg-[url(src/assets/gallery.jpg)] bg-center  text-center'>ONLINE <br /> CLASSES</div>
                        <div className='bg-[url(src/assets/products.jpg)] bg-center '>SERVICES</div>
                        <div className='bg-[url(src/assets/products.jpg)] bg-center '>CONTACT US</div>
                    </div>
                </div>
                <div className='h-56 flex flex-col items-center ' >
                    <h2 className='text-3xl text-brown-1'>AWARD WINNING</h2>
                    <img className='hover:scale-115 transition-transform ease-out duration-200'
                        src={Awards}
                        alt="" />
                </div>
                <div className='h-max  flex flex-col  justify-between '>
                    <div>
                        <div>
                            <button className='size-6'>
                                <img src={left} alt="" />
                            </button>
                        </div>
                        <div className='w-[300vw]  flex h-50  [&>*]:flex [&>*]:flex-col 
                        [&>*]:items-center [&>*]:text-center [&>*]:jutify-center '>
                            <div className='w-[100vw]'>
                                <div className='max-w-7/12'>
                                    <h2 className='text-brown-1 text-[28px]' >AWARD WINNING SCHOOL IN TORONTO</h2>
                                    <p className='font-roboto font-light my-6' >
                                        Get mastered Training of the most trendy beauty looks at Royal Beauty European School
                                    </p>
                                </div>
                            </div>
                            <div className='w-[100vw]'>
                                <div className='max-w-7/12'>
                                    <h2 className='text-brown-1 text-[28px]' >TOP RATED BEAUTY SCHOOL ON GOOGLE</h2>
                                    <p className='font-roboto font-light my-6' >
                                        LEVEL UP YOUR SKILS AT NANO STROKES, OMBRÉ BROWS, MICROBLADING, LIP BLUSHING AND
                                        MICRONEEDLING AT ROYAL BEAUTY EUROPEAN SCHOOL
                                    </p>
                                </div>
                            </div>
                            <div className='w-[100vw]'>
                                <div className='max-w-7/12'>
                                    <h2 className='text-brown-1 text-[28px]' >Trending Services</h2>
                                    <p className='font-roboto font-light my-6' >
                                        Master scar camouflage and areola reconstruction with our specialized training. Start a fulfilling career, making a positive impact through our expert-led courses. Enroll for transformative learning today!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='size-6 text-brown-1 '>
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='[&>*]:rounded-full [&>*]:size-3 gap-2 [&>*]:bg-brown-1 flex justify-center'>
                        <div className=''></div>
                        <div className=''></div>
                        <div className=''> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero