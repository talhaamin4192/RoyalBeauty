import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Courses from './Courses'
import Services from './Services'
import About from './About'
import Subscribe from './Subscribe'
const Home = () => {
  return (
    <>
    <div className='font-roboto overflow-hidden '>
    <Header></Header>
    <Hero></Hero>
    <Courses></Courses>
    <Services></Services>
    <About></About>
    <Subscribe></Subscribe>
    </div>
   
    </>
  )
}

export default Home