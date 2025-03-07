import React from 'react'
const Subscribe = () => {
    return (
        <>
            <div className='px-12 h-70 w-full bg-black flex items-center gap-12
            bg-[url(src/assets/pattern1.jpg)]  '>
                <h1 className='uppercase text-white font-anton text-[42px] text-wrap leading-12 tracking-wide'>
                    Subscribe now for latest <br /> updates
                </h1>
                <div className='flex items-center  justify-center'>
                    <input
                        type="email"
                        placeholder='Email'
                        className='rounded-s-full bg-white border-0 h-12 text-sm
                        w-135 px-4 ' />
                    <button
                        type='button'
                        className='text-white bg-brown-1 rounded-e-full h-12 px-14
                         uppercase text-sm hover:scale-90 transition-all ease-in duration-300
                         tracking-wider  '>
                        Subscribe
                    </button>
                </div>

            </div>
        </>
    )
}

export default Subscribe