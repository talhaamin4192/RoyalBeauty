import React from 'react';
import { useCart } from './CartContextt';
import Header from './Header';
import Footer from './Footer';
import { FaAngleDown } from 'react-icons/fa6';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  
  const subtotal = getTotal();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleQuantityChange = (productId, change) => {
    const product = cartItems.find(item => item.id === productId);
    if (product) {
      const newQuantity = product.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
      } else {
        removeFromCart(productId);
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='font-roboto'>
      <Header />
      <div className='h-max w-full px-22 py-15 bg-sec'>
        <h2 className='text-[58px] font-anton tracking-widest'>CART</h2>
        
        {cartItems.length === 0 ? (
          <div className='py-10 text-center'>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-20'>
            {/* Cart Items */}
            <div className='col-span-2'>
              <div className='flex w-full justify-between border-t-1 border-b-1 border-border-grey px-2 py-1 text-cstm03 font-anton font-bold'>
                <h3 className='tracking-[5px]'>PRODUCT</h3>
                <h3 className='tracking-[5px]'>TOTAL</h3>
              </div>
              
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.date}`} className='px-2 py-5 grid grid-cols-5 border-b-1 border-border-grey'>
                  <div>
                    <img src={item.image} className='size-20 object-cover' alt={item.name} />
                  </div>
                  <div className='col-span-3 flex flex-col gap-2'>
                    <h2 className='font-anton text-sm font-semibold tracking-widest'>
                      {item.name}
                    </h2>
                    <div>
                      <span className='text-cstm03 font-semibold border-1 rounded-sm p-1'>
                        {item.paymentMethod === 'deposit' ? 'DEPOSIT' : 'FULL PAYMENT'}
                      </span>
                    </div>
                    <h3 className='font-anton text-[12px] tracking-wide1'>
                      ${item.price.toFixed(2)}/hour
                    </h3>
                    <h4 className='text-cstm03 tracking-normal'>
                      <strong>Booking Date:</strong> {formatDate(item.date)}
                    </h4>
                    <div className='flex items-center'>
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className='px-3 border-1 border-r-0 rounded-tl-sm rounded-bl-sm border-border-grey'
                      >
                        -
                      </button>
                      <span className='px-5 border-y-1 border-border-grey'>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className='px-3 border-1 border-l-0 rounded-tr-sm rounded-br-sm border-border-grey'
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className='text-cstm03 underline hover:no-underline cursor-pointer w-fit'
                    >
                      Remove item
                    </button>
                  </div>
                  <div className='flex justify-end'>
                    <h3 className='font-anton tracking-wide1 text-[12px]'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div>
              <h3 className='font-anton text-[12px] tracking-wide1 font-bold py-2'>
                CART TOTALS
              </h3>
              
              <div className='border-y-1 border-border-grey flex py-4 justify-between px-2'>
                <h2>Add a coupon</h2>
                <button className='cursor-pointer'>
                  <FaAngleDown />
                </button>
              </div>
              
              <div className='flex py-2 justify-between'>
                <h2>Subtotal</h2>
                <h2 className='font-anton font-bold tracking-wide1'>
                  ${subtotal.toFixed(2)}
                </h2>
              </div>
              
              <div className='flex py-2 justify-between'>
                <h2>Tax (10%)</h2>
                <h2 className='font-anton font-bold tracking-wide1'>
                  ${tax.toFixed(2)}
                </h2>
              </div>
              
              <div className='border-t-1 border-border-grey flex py-4 justify-between font-anton text-xl font-bold'>
                <h1 className='tracking-wide1'>Total</h1>
                <h1 className='tracking-wide1'>${total.toFixed(2)}</h1>
              </div>
              
              <button className='w-full bg-black text-white hover:bg-white hover:text-black transition-all ease-in duration-100 py-3 px-7 mt-2 rounded-full font-semibold border-1'>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;