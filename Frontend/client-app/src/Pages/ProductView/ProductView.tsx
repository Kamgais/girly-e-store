import React,{Dispatch, FunctionComponent, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from '../../Components/Select/Select';
import { ProductDto } from '../../DTOs/ProductDto';
import { VariationDto } from '../../DTOs/VariationDto';
import { ProductService } from '../../Services/ProductService';
import { VariationService } from '../../Services/VariationService';

import './productView.styles/productView.css';
import { CartItemDto } from '../../DTOs/CartItemDto';
import { setCartItem, updateItem } from '../../Redux/actions/cartItem.actions';
import Footer from '../../Layouts/Footer/Footer';


type Notification = {
  message: string,
  isPresent: boolean
}




const ProductView:FunctionComponent = () => {
  const {id} = useParams();
  const [product,setProduct] = useState<ProductDto|null>()
  const [variations,setVariations] = useState<VariationDto[]|null>()
  const [item,setItem] = useState<CartItemDto|null>({
    qty: 1,
    productId: +id!,
    options : ["100","blue"]
  })
  const [notification,setNotification] = useState<Notification>({
    message: "",
    isPresent: false
  })
  const dispatch:Dispatch<(dispatch:any) => void> = useDispatch<any>();
  const {items, id:cartId} = useSelector((state:any) => state.cart);
  

  const fetchProduct = async () => {
    const response = await ProductService.getProductById(+id!);
    setProduct(response);
 

  }

  const fetchVariations = async(productId:number) => {
    const response = await VariationService.getVariationsByProductId(productId);
    setVariations(response);
    

  }


  const handleQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty:number|null = +e.target.value;
    const newItem:CartItemDto|null = {
      ...item,
      qty: qty
    }

    setItem(newItem)
  }


  const handleLiter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOptions = [...item?.options!];
    if(e.target.id === 'liter') {
      newOptions[0] = (e.target.value)
    }
    if(e.target.id === 'color') {
      newOptions[1] = e.target.value;
    }
     setItem({...item, options: newOptions})
    

    
  }

  const addToCart = () =>{
    let isPresent:boolean = false;
    let index: number = 0;
   const newItems:CartItemDto[] = items.filter((element:any) => element.productId === item?.productId)
   if(newItems[0]) {
    console.log(newItems[0])
    console.log(newItems[0].options![0] === item?.options![0] && newItems[0].options![1] === item?.options![1])
    for(let element= 0; element< newItems.length; element++) {
      if(newItems[element].options![0] === item?.options![0] && newItems[element].options![1] === item?.options![1]) {
        isPresent = true;
        index = element
      }
    }
    if(isPresent) {
      const newItem = {
        ...item,
        qty: item?.qty! + newItems[index].qty!,
        totalPrice: (item?.qty! + newItems[index].qty!)*product?.price!
      }
      dispatch(updateItem(newItem,newItems[index].id))
      console.log('UPDATE')
    } else {
      const newItem = {
        ...item,
        totalPrice: item?.qty! * product?.price!
      }
      dispatch(setCartItem(cartId,newItem!))
      console.log('NEW')
    }
   } else {
    const newItem = {
      ...item,
      totalPrice: item?.qty! * product?.price!
    }

    dispatch(setCartItem(cartId, newItem!))
   }
   setNotification({message:'placed in shoppingcart', isPresent:true})
   setTimeout(()=> {
    setNotification({message:"", isPresent: false})
   },1000)
   console.log(items)
  }


  useEffect(() => {
   fetchProduct()
   fetchVariations(+id!)
  },[id])

  




  return (
    <div>
    <div className='product-view-container'>
      <div className="container-left-side">
        <img src={product?.product_image} alt="" />
      </div>
      <div className="container-right-side">
        <h1 className="right-side-title">{product?.name}</h1>
        {product?.rating && <p className="right-side-price">${(product?.price - (product.rating * product.price / 100)).toFixed(2)} <span>${product?.price}</span></p>}
        {!product?.rating && <p className="right-side-price">${product?.price}</p>}
        <div className="right-side-configurations">

          {
            variations?.map((variation,index) => (
              <div className='variation-container' key={index}>
              <p style={{color: 'black', display: 'block'}}>{variation.name}</p>
              <Select id={variation.id} handleOptions={handleLiter} name={variation.name}/>
            </div>
            )
            
            )
}
  
        </div>
        <div className="add-to-cart-container">
          <label htmlFor="number"></label> <input  type="number" min={1} max={product?.qtyInStock}  onChange={(e)=> handleQty(e)} />
        <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
        </div>
        
        <div style={{display:'flex', flexDirection:'column'}} className="product-description">
          <p className="right-side-description">
           {product?.description}
          </p>
          {notification.isPresent && <p style={{color:'black', fontWeight:'bold', marginTop:'20px'}}>{notification.message}</p>}
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default ProductView;
