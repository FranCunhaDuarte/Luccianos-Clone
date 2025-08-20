import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Masters from '../components/Masters/Masters.jsx'
import Products from '../components/Products/Products.jsx'
import OurShops from '../components/OurShops/OurShops.jsx'
import News from '../components/News/News.jsx'
import Partners from '../components/Partners/Partners.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <Masters />
        <Products />
        <OurShops />
        <News />
        <Partners />
    </>
  )
}

export default Home