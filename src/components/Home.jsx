import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Courses from './Courses'
import Services from './Services'
import About from './About'
import Subscribe from './Subscribe'
import Explore from './Explore'
import Socials from './Socials'
import Reviews from './Reviews'
const Home = () => {
  return (
    <>
    <div className='font-roboto'>
    <Header></Header>
    <Hero></Hero>
    <Courses></Courses>
    <Services></Services>
    <About></About>
    <Subscribe></Subscribe>
    <Explore></Explore>
    <Socials></Socials>
    <Reviews></Reviews>
    </div>
   
    </>
  )
}

export default Home