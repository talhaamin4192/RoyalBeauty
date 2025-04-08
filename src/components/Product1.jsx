import React, { useState } from 'react';
import { useCart } from './CartContextt';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Related from './Related';
import Item1 from '../assets/item1.webp';
import Afterpay from '../assets/paymentm.svg';

const Product1 = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [hours, setHours] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('full');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const pricePerHour = 650.00;
  const totalCost = pricePerHour * hours;

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleAddToCart = () => {
    if (!selectedDate) {
      alert('Please select a booking date');
      return;
    }

    addToCart({
      id: 'nano-hair-strokes',
      name: 'Nano Hair Strokes',
      price: pricePerHour,
      quantity: hours,
      date: selectedDate,
      image: Item1,
      paymentMethod
    });

    navigate('/cart');
  };

  return (
    <div className='font-roboto'>
      <Header />
      <div className='grid grid-cols-2 h-max w-full bg-sec px-22 gap-10 py-10'>
        {/* Product Image */}
        <div className='relative'>
          <img className='h-[376px] w-[547px]' src={Item1} alt="Nano Hair Strokes" />
        </div>

        {/* Product Details */}
        <div className='flex flex-col gap-5'>
          <h1 className='font-anton text-[58px] uppercase tracking-wider font-normal'>Nano Hair Strokes</h1>
          <h3 className='text-brown-5 text-xl'>${pricePerHour.toFixed(2)}</h3>
          
          <div className='flex gap-1 items-center'>
            <span>or 4 interest-free payments of ${(pricePerHour/4).toFixed(2)} with</span>
            <button>
              <img src={Afterpay} alt="Afterpay" />
            </button>
            <button className='text-[12px]'>ⓘ</button>
          </div>

          <p>
            Nano Hair Strokes uses a digital machine to create fine, natural-looking brow strokes that last 18–24 months with proper aftercare.
          </p>

          <h3>Choose Booking date</h3>
          <input
            type='date'
            className='h-11 w-full bg-white text-center border-1'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={getCurrentDate()}
            required
          />

          <div className='flex w-full justify-between'>
            <h3>General Cost <strong>(${pricePerHour.toFixed(2)}/hour)</strong></h3>
            <h3>${totalCost.toFixed(2)} x {hours}</h3>
          </div>

          <div className='flex w-full justify-between'>
            <strong>Total</strong>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>

          {/* Payment Options */}
          <div className='bg-sec-2 flex flex-col h-40 my-10'>
            <div className='h-1/2 flex items-center ps-6 border-b-1 border-border-grey'>
              <label className={`flex gap-3 px-8 py-4 rounded-lg ${paymentMethod === 'deposit' ? 'bg-white border-2 border-grey-3' : 'bg-gray-100'}`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'deposit'}
                  onChange={() => setPaymentMethod('deposit')}
                  style={{ accentColor: '#626060' }}
                />
                Pay Deposit
              </label>
            </div>
            <div className='h-1/2 flex items-center ps-6'>
              <label className={`flex gap-3 px-8 py-4 rounded-lg ${paymentMethod === 'full' ? 'bg-brown-1 text-white' : 'bg-gray-100'}`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'full'}
                  onChange={() => setPaymentMethod('full')}
                  style={{ accentColor: '#626060' }}
                />
                Pay full amount
              </label>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className='flex gap-2'>
            <input
              className='bg-white size-12 border-1 text-center'
              type='number'
              min='1'
              max='10'
              value={hours}
              onChange={(e) => setHours(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
            />
            <button
              onClick={handleAddToCart}
              className='bg-grey-2 text-white font-bold tracking-wider hover:text-black border-grey-2 hover:bg-white border-1 transition-all duration-300 ease-in rounded-full px-3 py-2 cursor-pointer'
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className='px-22 h-[30vh] relative bg-sec'>
        <div className='absolute -top-10 border-b-0 left-25 bg-white px-5 py-2 z-10 border-1 border-cstm-border rounded-sm'>
          <h3 className='font-semibold text-blue-6'>Description</h3>
        </div>
        <div className='border-t-1 border-cstm-border z-40 pt-14'>
          <h2 className='text-[32px] py-4 font-semibold'>Description</h2>
          <p>Nano Hair Strokes is a gentle, semi-permanent technique that creates incredibly fine, natural-looking brow strokes using a digital machine. It's perfect for anyone wanting fuller, beautifully shaped brows with a soft and natural finish. Unlike some other methods, this technique works well for all skin types, even oily skin.</p>
          <p>When you follow the aftercare instructions carefully, your stunning results can last up to 18–24 months, so you can enjoy hassle-free, gorgeous brows for the long term!</p>
        </div>
      </div>

      <Related />
      <Footer />
    </div>
  );
};

export default Product1;