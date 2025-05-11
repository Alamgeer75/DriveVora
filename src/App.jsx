import React from 'react'
import Navbar from './components/Navbar'
import NavbarHero from './components/hero.jsx'
import FeaturedCars from './components/Features'
import LatestNews from './components/LatestNews'
import TopBrands from './components/TopBrands'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/ChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <NavbarHero/>
      <FeaturedCars/>
      <TopBrands/>
      <LatestNews/>
      <Testimonials/>
      <WhyChooseUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
