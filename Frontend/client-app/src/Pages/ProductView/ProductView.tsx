import React,{FunctionComponent, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ProductDto } from '../../DTOs/ProductDto';
import { ProductService } from '../../Services/ProductService';
import './productView.styles/productView.css';





const ProductView:FunctionComponent = () => {
  const {id} = useParams();
  const [product,setProduct] = useState<ProductDto|null>()
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await ProductService.getProductById(+id!);
      setProduct(response);
      console.log(response)

    }

    fetchProduct()
  },[id])




  return (
    <div className='product-view-container'>
      <div className="container-left-side">
        <img src={product?.product_image} alt="" />
      </div>
      <div className="container-right-side">
        <h1 className="right-side-title">{product?.name}</h1>
        {product?.rating && <p className="right-side-price">${(product?.price - (product.rating * product.price / 100)).toFixed(2)} <span>${product?.price}</span></p>}
        {!product?.rating && <p className="right-side-price">${product?.price}</p>}
        <div className="right-side-configurations">
          <select name="color" id="">
            <option value="blue">blue</option>
            <option value="blue">blue</option>
            <option value="blue">blue</option>
            <option value="blue">blue</option>
          </select>
          <select name="liter" id="">
            <option value="100">100</option>
            <option value="100">100</option>
            <option value="100">100</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="add-to-cart-container">
          <label htmlFor="number"></label> <input type="number" min={1} />
        <button className="add-to-cart">Add to cart</button>
        </div>
        
        <div className="product-description">
          <p className="right-side-description">
           {product?.description}
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default ProductView;
