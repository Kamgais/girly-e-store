import React,{FunctionComponent} from 'react'
import CartSummary from '../../Layouts/CartSummary/CartSummary'
import CartTable from '../../Layouts/CartTable/CartTable'
import './shoppingCart.styles/shoppingCart.css';

const ShoppingCart:FunctionComponent = () => {
  return (
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
  )
}

export default ShoppingCart
