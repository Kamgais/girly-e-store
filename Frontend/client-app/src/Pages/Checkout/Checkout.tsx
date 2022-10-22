import React, { FunctionComponent, useEffect,useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import CheckoutItem from '../../Layouts/ChechoutItem/CheckoutItem';
import { Navigate, useNavigate } from 'react-router-dom';
import './checkout.styles/checkout.css';
import { OrderDto } from '../../DTOs/OrderDto';
import { OrderService } from '../../Services/OrderService';
import { OrderItemService } from '../../Services/OrderItemService';
import Footer from '../../Layouts/Footer/Footer';
import { emptyCart } from '../../Redux/cartSlice';


const Checkout: FunctionComponent = () => {
    const {items} = useSelector((state:any) => state.cart);
    const {id} = useSelector((state:any) => state.customer);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const navigate = useNavigate();
    const [method,setMethod] = useState<string>("")
    const [order,setOrder] = useState<OrderDto|null>();
    const dispatch = useDispatch();


    useEffect(()=> {
        setTotalPrice(0)
     for(let element = 0; element <items.length; element++) {
    setTotalPrice(totalPrice => totalPrice +=  items[element].totalPrice ) 
     }
    },[items])

   const processToPay = async() => {
    console.log(method)
   

    const response = await OrderService.createOrder(id,{
        date: new Date(),
        total: totalPrice,
        method: method
    });
    setOrder(response);

    for(let element = 0; element< items.length; element++) {
      await OrderItemService.createOrderItem(response?.id!, {price: items[element].totalPrice, cartItemId: items[element].id});
    }
    navigate('/sucess');
    
    
    
   }


   const handleMethod = (e:React.ChangeEvent<HTMLInputElement>) => {
     if(e.target.checked) {
        setMethod(e.target.id);
     }
   }
    

    
  return (
  
    <div style={{display: 'flex', flexDirection:'column', minHeight:'100vh'}}>
    
        {items.length !== 0 ? (
            <>
            <div className='checkout-container'>
            <div className="checkout-title">
                <h1 className="title">Checkout</h1>
            </div>
            
            <div className="order-container">
                <div className="order-summary-title">
                    <h4>Your Order Summary</h4>
                </div>
                <div className="order-products">
                    {
                        items.map((item:any,index:any) => (
                            <CheckoutItem item ={item} key={index}/>
                        ))
                    }
                    
                </div>
                <div className="order-pricing">
                    <p>Total:</p>
                    <p>${totalPrice}</p>
                </div>
                <div className="order-payment-method">
                    <input onChange={(e) => handleMethod(e)} type="radio" id='credit' name='method' />
                    <label htmlFor="credit">Credit Card</label>
                    <input onChange={(e) => handleMethod(e)} type="radio" id='transfer' name='method' />
                    <label htmlFor="transfer">Bank Transfer</label>
                    <input onChange={(e) => handleMethod(e)} type="radio" id='paypal' name='method' />
                    <label htmlFor="paypal">Paypal</label>
                    
                </div>
                <div className="order-actions">
                <button onClick={processToPay}>Pay</button>
                <button onClick={() => navigate('/cart')}>Back to Cart</button>
                </div>
                
            </div>
          
        </div>
        <Footer/>
            </>
        ) : <Navigate to='/cart'/>}
       
        </div>
     
 
  )
}

export default Checkout;
