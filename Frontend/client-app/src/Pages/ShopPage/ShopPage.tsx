import React, {FunctionComponent} from 'react'

const ShopPage:FunctionComponent = () => {
  return (
    <div className='shop-container'>
        <div className="shop-top-side">
            <div className="top-side-title">
                <h1>Shop All Products</h1>
            </div>
            <div className="top-side-filter">
                <select>
                    <option value="mascara">Mascara</option>
                    <option value="mascara">Mascara</option>
                    <option value="mascara">Mascara</option>
                    <option value="mascara">Mascara</option>
                </select>
            </div>
        </div>
        <div className="shop-product-list">
            
        </div>
      
    </div>
  )
}

export default ShopPage
