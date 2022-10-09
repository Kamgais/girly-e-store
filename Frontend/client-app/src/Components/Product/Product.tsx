import React, {FunctionComponent} from 'react';
import './product.styles/product.css'


type Props = {
    product : {
    productUrl: string,
    notes?:number,
    title:string,
    price:number;
    reduction: number;

    }
     // in percentage
}

const Product:FunctionComponent<Props> = ({product}) => {
  return (
    <div className='product-container'>
        <div className="product-container-img">
            <img src={product.productUrl} alt="product image" className="product-img" />
            <div className="product-container-actions">
                <div className="in-cart"><i className="fa-solid fa-cart-shopping"></i></div>
                <div className="like-product"><i className="fa-solid fa-thumbs-up"></i></div>
                <div className="share-product"><i className="fa-solid fa-share"></i></div>
            </div>
            <div className="product-reduction-label">{`-${product.reduction}%`}</div>
        </div>
        <div className="product-container-infos">
            <div className="product-note"></div>
            <div className="product-title">{product.title}</div>
            <div className="product-price">{(product.price - (product.price * product.reduction) / 100).toFixed(2)}$  <span className='old-price'>{product.price}$</span></div>
        </div>
      
    </div>
  )
}

export default Product;
