import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Related from './Related';
import Item1 from '../assets/item1.webp';
import Afterpay from '../assets/paymentm.svg';

const Product1 = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [hours, setHours] = useState(1);
  const [generalCost, setGeneralCost] = useState(650.00);
  const [totalCost, setTotalCost] = useState(650.00);

  // Get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setGeneralCost(650.00 * hours);
    setTotalCost(650.00 * hours);
  };

  const handleHoursChange = (e) => {
    const newHours = parseInt(e.target.value, 10);
    setHours(newHours);
    setGeneralCost(650.00 * newHours);
    setTotalCost(650.00 * newHours);
  };

  return (
    <div className='font-roboto'>
      <Header />
      <div className='grid grid-cols-2 h-max w-full bg-sec px-22 gap-10 py-10'>
        <div className='relative'>
          <img className='h-[376px] w-[547px]' src={Item1} alt="" />
        </div>
        <div>
          <div className='flex flex-col gap-5'>
            <h1 className='font-anton text-[58px] uppercase tracking-wider font-normal'>Nano Hair Strokes</h1>
            <h3 className='text-brown-5 text-xl'>$650.00</h3>
            <p className='flex gap-1 items-center'>or 4 interest-free payments of $162.50 with
              <button>
                <img src={Afterpay} alt="" />
              </button>
              <button className='text-[12px]' >
                ⓘ
              </button>
            </p>
            <p>
              Nano Hair Strokes uses a digital machine to create fine, natural-looking brow strokes that last 18–24 months with proper aftercare.
            </p>
            <h3>Choose Booking date</h3>
            <input
              type='date'
              className='h-11 w-full bg-white text-center border-1'
              placeholder='Choose Date'
              value={selectedDate}
              onChange={handleDateChange}
              min={getCurrentDate()} // Set the min attribute to the current date
            />
            <div className='flex w-full justify-between'>
              <h3>
                General Cost
                <strong>
                  ( $650.00/hour )
                </strong>
              </h3>
              <h3>
                ${generalCost.toFixed(2)} x {hours}
              </h3>
            </div>
            <div className='flex w-full justify-between'>
              <strong>Total</strong>
              <strong>${totalCost.toFixed(2)}</strong>
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
                    style={{ accentColor: '#626060' }}
                  />
                  Pay full amount
                </label>
              </div>
            </div>
            <div className='flex gap-2'>
              <label htmlFor="hours">
                <input
                  className='bg-white size-12 border-1 text-center'
                  type='number'
                  min='1'
                  max='10'
                  step='1'
                  value={hours}
                  inputMode='numeric'
                  onChange={handleHoursChange}
                />
              </label>
              <button className='bg-grey-2 text-white font-bold
              tracking-wider hover:text-black border-grey-2 hover:bg-white
              border-1 transition-all duration-300 ease-in rounded-full px-3 py-2 cursor-pointer'>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-22 h-[30vh] relative bg-sec '>
        <div className='absolute -top-10 border-b-0 left-25 bg-white px-5 py-2 z-10  border-1 border-cstm-border rounded-sm'  >
          <h3 className='font-semibold text-blue-6' >Description</h3>
        </div>
        <div className='border-t-1 border-cstm-border z-40'>
          <h2 className='text-[32px] py-4 font-semibold'>Description</h2>
          <p>Nano Hair Strokes is a gentle, semi-permanent technique that creates incredibly fine, natural-looking brow strokes using a digital machine. It’s perfect for anyone wanting fuller, beautifully shaped brows with a soft and natural finish. Unlike some other methods, this technique works well for all skin types, even oily skin.</p>
          <p>When you follow the aftercare instructions carefully, your stunning results can last up to 18–24 months, so you can enjoy hassle-free, gorgeous brows for the long term!</p>
        </div>
      </div>
      <Related />
      <Footer />
    </div>
  );
};

export default Product1;