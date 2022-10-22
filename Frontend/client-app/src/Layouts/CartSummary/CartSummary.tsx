import React,{FunctionComponent, useEffect,useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { forEachTrailingCommentRange } from 'typescript';
import { priceContext } from '../../Context/PriceContext';
import './cartSummary.styles/cartSummary.css';

const CartSummary:FunctionComponent = () => {
    const {items} = useSelector((state:any) => state.cart)
    const [totalPrice,setTotalPrice] = useState<number>();
    const navigate = useNavigate();
    
    useEffect(()=> {
        setTotalPrice(0)
     for(let element = 0; element <items.length; element++) {
    setTotalPrice(totalPrice => totalPrice +=  items[element].totalPrice ) 
     }
    },[items])
     

    
  return (
    <div className='cart-summary-container'>
        <h1 className="cart-summary-title">Cart Summary</h1>
        <div className="cart-summary-subtotal">
            <p>Subtotal:</p>
               <p>${totalPrice?.toFixed(2)}</p>
        </div>
        <div className="cart-summary-sale">
            <p>Coupon:</p>
            <p>$00.00</p>
        </div>
        <div className="cart-summary-total">
            <p>Grand Total:</p>
            <p>${totalPrice?.toFixed(2)}</p>
        </div>
        <div className="cart-summary-actions">
            <button onClick={() => navigate('/products')}>Keep shooping</button>
            <button disabled={items.length === 0} onClick={() => navigate('/checkout')}>Checkout -{'>'} </button>
        </div>
      
    </div>
  )
}

export default CartSummary
