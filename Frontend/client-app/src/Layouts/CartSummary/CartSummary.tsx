import React,{FunctionComponent} from 'react'
import './cartSummary.styles/cartSummary.css';

const CartSummary:FunctionComponent = () => {
  return (
    <div className='cart-summary-container'>
        <h1 className="cart-summary-title">Cart Summary</h1>
        <div className="cart-summary-subtotal">
            <p>Subtotal:</p>
            <p>$44.25</p>
        </div>
        <div className="cart-summary-sale">
            <p>Sales:</p>
            <p>$10.00</p>
        </div>
        <div className="cart-summary-total">
            <p>Grand Total:</p>
            <p>$49.25</p>
        </div>
        <div className="cart-summary-actions">
            <button>Keep shooping</button>
            <button>Checkout -{'>'} </button>
        </div>
      
    </div>
  )
}

export default CartSummary
