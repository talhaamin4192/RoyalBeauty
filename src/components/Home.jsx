import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Courses from './Courses'
import Services from './Services'
const Home = () => {
  return (
    <>
    <div className='font-roboto '>
    <Header></Header>
    <Hero></Hero>
    <Courses></Courses>
    <Services></Services>
    </div>
   
    </>
  )
}

export default Home