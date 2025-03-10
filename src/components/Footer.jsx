import React from 'react'
import RoyalLogo from '../assets/royal-beauty-logo1.png'
import phone from '../assets/phone1.svg'
import message from '../assets/message.svg'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='h-[73vh] w-full bg-white-2 font-roboto relative py-5' >
        <div className='border-t-1 border-brown-1 px-12 grid grid-cols-4 py-20  '>
            <div>
              <img src={RoyalLogo} alt="" />
            </div>
            <div>
              <h3 className='text-[28px] font-anton uppercase pb-3 tracking-wider' >Quick Links</h3>
              <ul className='flex flex-col gap-1 font-light  
              [&>*]:hover:opacity-70'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>In person trainings</Link></li>
                <li><Link to='/'>Online Classes</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Payment Plans</Link></li>
                <li><Link to='/'>Gallery</Link></li>
                <li><Link to='/'>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[28px] font-anton uppercase pb-3 tracking-wider' >WORKING HOURS</h3>
              <ul className='flex flex-col gap-1 font-light'>
                <li>Monday – Sunday</li>
                <li>09:00 am – 07:00 pm</li>
                <li>Sunday – 05:00 pm</li>
              </ul>
            </div>
            <div>
              <h3 className='text-[28px] font-anton uppercase pb-3 tracking-wider'>Contact Us</h3>
              <ul className='flex flex-col [&>*]:items-center font-light [&>*]:flex [&>*]:gap-2 '>
                <li><img className='size-3.5' src={phone} alt="" /> 647-323-1622</li>
                <li><img className='size-3.5' src={message} alt="" />info@royalbeautyeuropeanschool.com</li>
              </ul>
              <div>
                <h3 className='font-anton text-xl uppercase py-2 tracking-wider'>
                Social Links
                </h3>
                <div className='flex gap-2 [&>*]:hover:scale-90 [&>*]:hover:opacity-90
                [&>*]:transition-all [&>*]:ease-in'>
                  <Link to='/' ><img className='size-6.5' src={fb} alt="" /></Link> 
                  <Link to='/' ><img className='size-6.5' src={insta} alt="" /></Link> 
                </div>
              </div>
            </div>
        </div>
        <div className='bg-brown-1 py-3 absolute bottom-0 w-full text-center '>
            <p className='text-white uppercase  font-light'>© 2025 ROYAL BEAUTY EUROPEAN SCHOOL</p>
        </div>
    </div>
  )
}

export default Footer