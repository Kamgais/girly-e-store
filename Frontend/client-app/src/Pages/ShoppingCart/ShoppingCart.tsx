import React,{FunctionComponent} from 'react'
import PriceContext from '../../Context/PriceContext';
import CartSummary from '../../Layouts/CartSummary/CartSummary'
import CartTable from '../../Layouts/CartTable/CartTable'
import Footer from '../../Layouts/Footer/Footer';
import './shoppingCart.styles/shoppingCart.css';

const ShoppingCart:FunctionComponent = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', minHeight:'100vh'}}>
    <div className='shopping-cart-container'>
      <div className="shopping-cart-title">
        <h1>Your Cart</h1>
        </div>
        <div className="shopping-cart-table">
          <CartTable/>
        </div>
        <div className="shopping-cart-summary">
          <CartSummary/>
        </div>
    </div>
    <Footer/>
    </div>
   
   
  )
}

export default ShoppingCart
