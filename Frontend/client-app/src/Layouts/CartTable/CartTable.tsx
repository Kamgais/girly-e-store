import React,{FunctionComponent, useContext} from 'react'
import { useSelector } from 'react-redux'
import CartTableElement from '../../Components/CartTableElement/CartTableElement';
import { IPriceContext, priceContext } from '../../Context/PriceContext';
import './cartTable.styles/cartTable.css';

const CartTable:FunctionComponent = () => {
    const {items} = useSelector((state:any) => state.cart)
    const {totalPrice,handleCalculate} = useContext(priceContext)
  return (
    <div className='cart-table-container'>
        <table>
            <tr>
                <th>Product details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Color</th>
                <th>Liter</th>
                <th>Total price</th>
                <th>{totalPrice[1]}</th>
                </tr>
            {
                items.map((item:any,index:any) => (
                    <CartTableElement item={item} key={index} calculate={handleCalculate}/>
                ))
            }

            
        </table>
      
    </div>
  )
}

export default CartTable
