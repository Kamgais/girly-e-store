import React, {FunctionComponent, useState, useEffect, useRef} from 'react'
import Footer from '../../Layouts/Footer/Footer';
import ProductList from '../../Layouts/ProductList/ProductList';
import './shop.styles/shop.css';

const ShopPage:FunctionComponent = () => {
     // ref form
     const formRef = useRef<HTMLFormElement|null>(null);
    // user is currently on this page
    const [currentPage, setCurrentPage] = useState<number>(1);
    //No of Records to be displayed on each Page
    const [recordsPerPage] = useState<number>(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const openFilter = () => {
      if(formRef.current!.style.display === 'none') {
        formRef.current!.style.display = 'block';
      } else {
        formRef.current!.style.display = 'none';
      }
    }
    useEffect(()=> {
       
    },[])
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div className="shop-container">
        <div className="shop-container-left">
           <h3>Filter</h3>
           <i className="fa-solid fa-bars" onClick={openFilter}></i>
           <form action="#" ref={formRef}>
            <div className="categories">
            <h4>Category</h4>
            <div> <input type="checkbox" id='cosmetics' name='cosmetics' /> <label htmlFor="cosmetics">Cosmestics</label></div> 
            <div> <input type="checkbox" id='makeup' name='makeup' /> <label htmlFor='makeup'>Makeup</label></div>
            <div> <input type="checkbox" id='powder' name='powder' /> <label htmlFor="powder">Powder</label></div> 
            <div> <input type="checkbox" id='lotions' name='lotions' /> <label htmlFor='lotions'>Lotions</label></div>
            <div><input type="checkbox" id='lipstick' name='lipstick' /> <label htmlFor="lipstick">Lipstick</label></div>
            <div><input type="checkbox" id='mascara' name='mascara' /> <label htmlFor="mascara">Mascara</label></div>
            </div>
            
              <div className="prices">
              <h4>Price</h4>
            <div><input type="checkbox" id='100' name='100'/> <label htmlFor="">100$</label></div> 
            <div><input type="checkbox" id='price' name='price' />   <label htmlFor="#">$100-$199</label></div>  
            <div><input type="checkbox" id='price' name='price' /> <label htmlFor="#">$200-$599</label></div>
            <div><input type="checkbox" id='price' name='price' /> <label htmlFor="#">$600-$999</label></div>
            <div><input type="checkbox" id='price' name='price' /> <label htmlFor="#">$1000</label></div>
            </div>
            
              <div className="liters">
              <h4>Liter</h4>
            <div><input type="checkbox" id='100' name='100'/> <label htmlFor="">100ml</label></div> 
            <div><input type="checkbox" id='200' name='200' />   <label htmlFor="#">200ml</label></div>  
            <div><input type="checkbox" id='price' name='300' /> <label htmlFor="#">300ml</label></div>
            <div><input type="checkbox" id='price' name='400' /> <label htmlFor="#">400ml</label></div>
            <div><input type="checkbox" id='price' name='500' /> <label htmlFor="#">500ml</label></div>
            </div>
            
           </form>
        </div>
        <div className="shop-container-right">
            <div className="container-left-top">
              <h3>Shop All Products</h3>
              <div className="filter-selection">
                <select name="" id="" className='selections'>
                  <option value="">Cosmetcis</option>
                  <option value="">Cosmetcis</option>
                  <option value="">Cosmetcis</option>
                  <option value="">Cosmetcis</option>
                </select>
              </div>
            </div>
            <div className="container-left-list">
                <ProductList/>
            </div>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default ShopPage
