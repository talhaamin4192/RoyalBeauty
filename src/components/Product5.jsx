import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Related from './Related'
import Item5 from '../assets/item5.png'
import Afterpay from '../assets/paymentm.svg'
const Product5 = () => {
  return (
    <div className='font-roboto'>
      <Header></Header>
      <div className='grid grid-cols-2 h-[150vh] w-full bg-sec px-22 gap-10 py-10'>
        <div>
          <img className='h-[290px] w-[547px] object-cover' src={Item5} alt="" />
        </div>
        <div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-anton text-[58px] uppercase leading-18 tracking-wider font-normal'>
            Lip Blushing
            </h1>
            <h3 className='text-brown-5 text-xl'>$450.00</h3>
            <p className='flex gap-1 items-center'>or 4 interest-free payments of $112.50 with
              <button>
                <img src={Afterpay} alt="" />
              </button>
              <button className='text-[12px]' >
                ⓘ
              </button>
            </p>
            <p>
            Lip blushing is a semi-permanent cosmetic tattoo that enhances the natural shape and color of the lips, giving them a subtle, tinted appearance.
            </p>
            <h3>From</h3>
            <input type='text' className='h-11 w-full bg-white text-center border-1 border-grey-5' placeholder='Choose Date' />
            <h3>To</h3>
            <input type='text' className='h-11 w-full bg-white text-center border-1 border-grey-5' placeholder='Choose Date' />
            <div className='flex w-full justify-between'>
              <h3>
                Base Cost
                <strong>
                  ( $0.00 )
                </strong>
              </h3>
              <h3>
                $0.00
              </h3>
            </div>
            <div className='flex w-full justify-between'>
              <h3>
                General Cost
                <strong>
                  ( $450.00/hour )
                </strong>
              </h3>
              <h3>
                $0.00 x 1
              </h3>
            </div>
            <div className='flex w-full justify-between'>
              <strong>Total</strong>
              <strong>$0.00</strong>
            </div>
          </div>
          <div>
            <div className='bg-sec-2 flex flex-col h-40 my-10 [&>*]:border-b-1 [&>*]:border-border-grey
              [&>*]:flex  [&>*]:items-center [&>*]:ps-6 text-sm font-semibold'>
              <div className='h-1/2 [&>*]:flex [&>*]:gap-3'>
                <label
                  htmlFor=""
                  className='bg-white px-8 py-4 rounded-lg border-2 border-grey-3'>
                  <input 
                  className='size-5' 
                  type="radio"
                  style={{ accentColor: '#626060' }} />
                  Pay Deposit
                </label>
              </div>
              <div className='h-1/2 [&>*]:flex [&>*]:gap-3'>
                <label
                  htmlFor=""
                  className='bg-brown-1 text-white px-8 py-4 rounded-lg'>
                  <input 
                  className='size-5 '  
                  type="radio"
                  checked='checked'
                  style={{ accentColor: '#626060' }}
                  />
                  Pay full amount
                </label>
              </div>
            </div>
            <div className='flex gap-2'>
              <input
                className='bg-white size-12 border-1 text-center'
                type='number'
                min='1'
                max='100'
                step='10'
                value='1'
                inputMode='numeric'
              />
              <button className='bg-grey-2 text-white font-bold
              tracking-wider hover:text-black border-grey-2 hover:bg-white
              border-1 transition-all duration-300 ease-in rounded-full px-3 py-2'>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-22 h-[25vh] relative bg-sec '>
        <div className='absolute -top-10 border-b-0 left-25 bg-white px-5 py-2 z-10  border-1 border-cstm-border rounded-sm'  >
          <h3 className='font-semibold text-blue-6' >Description</h3>
        </div>
        <div className='border-t-1 border-cstm-border z-40'>
          <h2 className='text-[32px] py-4 font-semibold'>Description</h2>
          <p>Lip blushing is a semi-permanent cosmetic tattoo that enhances the natural shape and color of the lips, giving them a subtle, tinted appearance. It involves depositing pigment into the lips to create a fuller, more defined look while maintaining a natural finish.</p>
        </div>
      </div>
      <Related></Related>
      <Footer></Footer>
    </div>
  )
}

export default Product5