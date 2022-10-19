import React,{FunctionComponent} from 'react'
import { useSelector } from 'react-redux'
import CartTableElement from '../../Components/CartTableElement/CartTableElement';
import './cartTable.styles/cartTable.css';

const CartTable:FunctionComponent = () => {
    const {items} = useSelector((state:any) => state.cart)
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
                <th></th>
                </tr>
            {
                items.map((item:any,index:any) => (
                    <CartTableElement item={item} key={index}/>
                ))
            }

            
        </table>
      
    </div>
  )
}

export default CartTable
