import React,{FunctionComponent, useEffect, useState} from 'react'
import { CartItemDto } from '../../DTOs/CartItemDto'
import { ProductDto } from '../../DTOs/ProductDto'
import { ProductService } from '../../Services/ProductService'


type Props = {
    item: CartItemDto
}

const CheckoutItem:FunctionComponent<Props> = ({item}) => {
    const[product,setProduct] = useState<ProductDto|null>();


    const fetchProduct = async() => {
    const response = await ProductService.getProductById(item.productId!)
    setProduct(response);
    }

    useEffect(()=> {
        fetchProduct();
    },[])
  return (
    <div className="order-item">
        <p>{item.qty}{'x'} {product?.name}</p>
        { !product?.rating && <p>${product?.price}</p>}
        { product?.rating && <p>${((product?.price) - (product.price * product.rating / 100)).toFixed(2)}</p>}
    </div>
  )
}

export default CheckoutItem;
