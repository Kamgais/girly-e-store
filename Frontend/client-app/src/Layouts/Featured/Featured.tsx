import React, {FunctionComponent} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './featured.styles/featured.css'
import Product from '../../Components/Product/Product';
import { productList } from '../../utils/Constants/ProductList';


const Featured:FunctionComponent = () => {


  const swipeLeft = () => {
    
  }
  return (
    <div className='featured-container'>
      <h1 className="featured-container-title">Featured Products</h1>
      <p className="featured-container-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eaque tempora quae 
      et quaerat magni necessitatibus ipsam excepturi mollitia vel!</p>
      <div className="featured-container-products">
        <div className="swipe-left" onClick={swipeLeft}><i className="fa-solid fa-angle-left"></i></div>
        <div className="swipe-right"><i className="fa-solid fa-chevron-right"></i></div>
      {
        productList.map((product:any, index) => (
          <Product product={product} key={index}/> 
        ))
      }
      
      </div>
      
     
    </div>
  )
}

export default Featured
