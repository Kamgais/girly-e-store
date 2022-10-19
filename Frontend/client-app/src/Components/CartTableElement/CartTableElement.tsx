import React, { FunctionComponent, useEffect, useState } from 'react'
import { CartItemDto } from '../../DTOs/CartItemDto';
import { ProductDto } from '../../DTOs/ProductDto';
import { ProductService } from '../../Services/ProductService';
import './cartTableElement.styles/cartTableElement.css';


type Props = {
    item:CartItemDto;
}

const CartTableElement:FunctionComponent<Props> = ({item}) => {
   const [product,setProduct] = useState<ProductDto|null>()


   const fetchProduct = async() => {
    try {
      const response = await ProductService.getProductById(item.productId!);
      setProduct(response)
    } catch (error) {
      console.log(error)  
    }
   }

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
            <p>{product?.id}</p>
            
        </div>
    </div>

   </td>

   <td className='cart-table-element-price'>
   {product?.rating && <p className="right-side-price">${(product?.price - (product.rating * product.price / 100)).toFixed(2)} <span>${product?.price}</span></p>}
    {!product?.rating && <p className="right-side-price">${product?.price}</p>}
   </td>

   <td className='cart-table-element-qty'>
    <div className="minus">-</div>
    <div className="qty-to-change">{item.qty}</div>
    <div className="plus">+</div>

   </td>

   <td className='cart-table-element-color' style={{ display:'flex', justifyContent:'center'}}>
    <div style={{width:'20px', height:'20px', borderRadius:'50%', background:`${item.options![1]}`}}></div>
   </td>
   <td className='cart-table-element-liter'> 
   <p>{item.options![0]} ml</p>
   </td>

   <td className='cart-table-element-price'>
    <p>$10.50</p>
   </td>

   <td className='cart-table-element-delete'><i className="fa-regular fa-trash"></i></td>
   </tr>
  )
}

export default CartTableElement
