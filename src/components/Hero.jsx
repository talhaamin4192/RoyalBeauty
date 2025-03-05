import React from 'react'
// import productsImg from "../assets/OurProducts.jpg"
// import Gallery from "../assets/GalleryPage.jpg"
import Awards from "../assets/awards.png"
const Hero = () => {
    return (
        <>
            <div className='h-[120vh] w-full px-13 bg-sec font-anton flex flex-col justify-around 
             py-10'>
                <div>
                    <h1 className='text-5xl'>WELCOME TO ROYAL BEAUTY EUROPEAN SCHOOL</h1>
                    <div className='grid grid-cols-4 gap-4 text-white 
                    [&>*]:h-55 [&>*]:w-75 [&>*]:bg-cover [&>*]:rounded-lg
                    [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:text-3xl
                    [&>*]:tracking-widest [&>*]:brightness-50'>
                        <div className='bg-[url(src/assets/GalleryPage.jpg)] '>IN PERSON <br /> TRAININGS</div>
                        <div className='bg-[url(src/assets/GalleryPage.jpg)] text-center'>ONLINE <br /> CLASSES</div>
                        <div className='bg-[url(src/assets/OurProducts.jpg)]'>SERVICES</div>
                        <div className='bg-[url(src/assets/OurProducts.jpg)]'>CONTACT US</div>
                    </div>
                </div>
                <div className='h-56' >
                    <h2 className='text-3xl text-brown-1'>AWARD WINNING</h2>
                    <img className='hover:scale-115 transition-transform ease-out duration-200'
                        src={Awards}
                        alt="" />
                </div>
                <div className=''>
                    <div className='w-[300vw]  flex [&>*]:text-center'>
                        <div className='w-[100vw]'>
                            <h2 className='text-brown-1 text-[28px]' >AWARD WINNING SCHOOL IN TORONTO</h2>
                            <p className='font-roboto' >
                                Get mastered Training of the most trendy beauty looks at Royal Beauty European School
                            </p>
                        </div>
                        <div className='w-[100vw]'>
                            <h2 className='text-brown-1 text-[28px]' >TOP RATED BEAUTY SCHOOL ON GOOGLE</h2>
                            <p className='font-roboto' >
                                LEVEL UP YOUR SKILS AT NANO STROKES, OMBRÉ BROWS, MICROBLADING, LIP BLUSHING AND
                                MICRONEEDLING AT ROYAL BEAUTY EUROPEAN SCHOOL
                            </p>
                        </div>
                        <div className='w-[100vw]'>
                            <h2 className='text-brown-1 text-[28px]' >Trending Services</h2>
                            <p className='font-roboto' >
                                Master scar camouflage and areola reconstruction with our specialized training. Start a fulfilling career, m className='font-roboto' aking a
                                positive impact through our expert-led courses. Enroll for transformative learning today!
                            </p>
                        </div>
                    </div>
                    <div className='[&>*]:rounded-full [&>*]:size-3 gap-2 [&>*]:bg-brown-1 flex'>
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