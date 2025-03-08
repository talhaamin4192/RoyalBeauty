import React from 'react'

const Reviews = () => {
    return (
        <>
            <div className='h-[170vh] w-full flex items-center flex-col gap-6 py-16 font-roboto'>
                <h2 className='uppercase font-anton text-[28px] ' >
                    What Our Beautiful & Happy Clients Say About Us
                </h2>
                <div className='[&>*]:bg-white-1 grid grid-cols-1 grid-rows-5
                gap-3'>
                    <div className='p-5'>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h4></h4>
                                <h5></h5>
                            </div>
                        </div>
                        <div></div>
                        <p></p>

                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <button className='border-0 bg-white-1 px-5 py-2.5
                rounded-md text-sm'>
                    Load more
                </button>
            </div>
        </>
    )
}

export default Reviews