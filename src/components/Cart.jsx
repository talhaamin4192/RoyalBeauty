import React from 'react'
import Header from './Header'
import Footer from './Footer'
import nanoImg from "../assets/item1.webp"
const Cart = () => {
  return (
    <div className='font-roboto'>
      <Header></Header>
      <div className='h-max w-full px-22 py-15 bg-sec tracking-widest  '>
        <h2 className='text-[58px] font-anton'>CART</h2>
        <div className='grid grid-cols-3 gap-20 ' >
          <div className='col-span-2'>
            <div className='flex w-full justify-between border-t-1
             border-b-border-grey border-b-1 border-t-dark2 px-2 py-1 
             text-cstm03 font-anton font-bold  '>
              <h3 className='tracking-[5px]'>PRODUCT</h3>
              <h3 className='tracking-[5px]'>TOTAL</h3>
            </div>
            <div className='px-2 py-5 flex'>
              <div>
                <img src={nanoImg} className='size-20 object-cover' alt="" />
              </div>
              <div>
                <h2>Nano Hair Strokes</h2>
                <span></span>
                <h3></h3>
                <p></p>
                <h4></h4>
                <h4></h4>
                <div>
                  <button></button>
                  <span></span>
                  <button></button>
                </div>
                <button></button>
              </div>
              <div>
                <h3></h3>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Cart