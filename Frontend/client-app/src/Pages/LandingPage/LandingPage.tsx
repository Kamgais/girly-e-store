import React from 'react'
import BurgerBar from '../../Components/BurgerBar/BurgerBar'
import Slider from '../../Components/Slider/Slider'
import AboutUs from '../../Layouts/AboutUs/AboutUs'
import Categories from '../../Layouts/Categories/Categories'
import Featured from '../../Layouts/Featured/Featured'

const LandingPage = () => {
  return (
    <div>
     <Slider/>
     <BurgerBar/>
     <Categories/>
     <AboutUs/>
     <Featured/>
     </div>
    
  )
}

export default LandingPage
