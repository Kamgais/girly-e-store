import React from 'react'
import './landingpage.styles/landingPage.css';
import BurgerBar from '../../Components/BurgerBar/BurgerBar'
import Slider from '../../Components/Slider/Slider'
import AboutUs from '../../Layouts/AboutUs/AboutUs'
import Categories from '../../Layouts/Categories/Categories'
import Featured from '../../Layouts/Featured/Featured'
import Footer from '../../Layouts/Footer/Footer'

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
     <Slider/>
     <BurgerBar/>
     <Categories/>
     <AboutUs/>
     <Featured/>
     <Footer/>
     </div>
    
  )
}

export default LandingPage
