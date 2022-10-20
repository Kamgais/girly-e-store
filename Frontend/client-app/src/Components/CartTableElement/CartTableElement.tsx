import React, { Dispatch, FunctionComponent, useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../../Redux/actions/cartItem.actions';
import { CartItemDto } from '../../DTOs/CartItemDto';
import { ProductDto } from '../../DTOs/ProductDto';
import { ProductService } from '../../Services/ProductService';
import './cartTableElement.styles/cartTableElement.css';
import { priceContext } from '../../Context/PriceContext';


type Props = {
    item:CartItemDto;
    calculate:(price:number) => void
}

const CartTableElement:FunctionComponent<Props> = ({item,calculate}) => {
   const [product,setProduct] = useState<ProductDto|null>()
   const [value,setValue] = useState<number>(item.qty!);
   const dispatch:Dispatch<(dispatch:any) => void> = useDispatch<any>();
   const {handleCalculate} = useContext(priceContext)


   const fetchProduct = async() => {
    try {
      const response = await ProductService.getProductById(item.productId!);
      setProduct(response)
    } catch (error) {
      console.log(error)  
    }
   }

 // increment value in cart
   const incrementValue = () => {
    if( value < product!.qtyInStock) {
      setValue(prevState => prevState+1)
      const newItem = {...item, qty: value+1, totalPrice: product?.price! * (value+1)}
      dispatch(updateItem(newItem,item.id))
    }
   
   }

   //decrement value in cart
   const decrementValue = () => {
    if(value > 1) {
      setValue(prevState=>prevState-1)
      const newItem = {...item, qty: value-1,totalPrice: product?.price! * (value-1) }
      dispatch(updateItem(newItem,item.id))
    }
    
   }

   //delete a item from cart
   const deleteFromCart = () => {
    dispatch(deleteItem(item.id!))
   }

   useEffect(()=>{
    
     handleCalculate(product?.price!)
   },[product?.price])
   
    useEffect(() => {
        fetchProduct()

      
    },[])
  return (
    <tr className='tr'>
   <td className='cart-table-element-product-infos'>
    <div className="products-infos">
        <img src={product?.product_image} alt="image product" />
        <div className="products-details">
            <h3>{product?.name}</h3>
            
            
        </div>
    </div>

   </td>

   <td className='cart-table-element-price'>
   {product?.rating && <p className="right-side-price">${(product?.price - (product.rating * product.price / 100)).toFixed(2)} <span>${product?.price}</span></p>}
    {!product?.rating && <p className="right-side-price">${product?.price}</p>}
   </td>

   <td className='cart-table-element-qty'>
    <div className="minus" onClick={decrementValue}>-</div>
    <div className="qty-to-change">{value}</div>
    <div className="plus" onClick={incrementValue}>+</div>

   </td>

   <td className='cart-table-element-color' style={{ display:'flex', justifyContent:'center'}}>
    <div style={{width:'20px', height:'20px', borderRadius:'50%', background:`${item.options![1]}`}}></div>
   </td>
   <td className='cart-table-element-liter'> 
   <p>{item.options![0]} ml</p>
   </td>

   <td className='cart-table-element-price'>
    <p>${product && (product.price * value).toFixed(2)}</p>
    
   </td>

   <td className='cart-table-element-delete'><i onClick={deleteFromCart} className="fa-sharp fa-solid fa-trash"></i></td>
   </tr>
  )
}

export default CartTableElement
