import React, {FunctionComponent, useState, useEffect, useRef} from 'react'
import { CategoryDto } from '../../DTOs/CategoryDto';
import Footer from '../../Layouts/Footer/Footer';
import ProductList from '../../Layouts/ProductList/ProductList';
import { CategoryService } from '../../Services/CategoryService';
import './shop.styles/shop.css';

const ShopPage:FunctionComponent = () => {
     // ref form
     const formRef = useRef<HTMLFormElement|null>(null);
  // user is currently on this page
    const [currentPage, setCurrentPage] = useState<number>(1);
    //No of Records to be displayed on each Page
    const [recordsPerPage] = useState<number>(10);

    // categories 
    const [categories, setCategories] = useState<CategoryDto[]|null>(null);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const openFilter = () => {
      if(formRef.current!.style.display === 'none') {
        formRef.current!.style.display = 'block';
      } else {
        formRef.current!.style.display = 'none';
      }
    }

     // fetch the categories fields
    const fetchCategories = async() => {
      const response = await CategoryService.getAllCategories();
      setCategories(response);
    }

    // resize the filter part
    const resizeFilter = () => {
      window.addEventListener('resize', () => {
        if(window.innerWidth <= 946) {
         formRef.current!.style.display = 'block';
        }
       })
    }
    
    
    
    useEffect(()=> {
       resizeFilter();
       fetchCategories();
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
            {categories?.map((category,index) => (
              <div> <input type="checkbox" id={category.category_name} name={category.category_name} /> <span></span>
            &nbsp;  <label htmlFor={category.category_name}>{(category.category_name).charAt(0).toUpperCase() + category.category_name.slice(1) }</label>
              </div>
            ))}
             </div>
            
              <div className="prices">
              <label htmlFor='price'>Price</label>
            <div><input type="radio" id='price' name='price'/>&nbsp;$100</div> 
            <div><input type="radio" id='price' name='price' /> &nbsp;  $100-$199</div>  
            <div><input type="radio" id='price' name='price' />&nbsp;  <label htmlFor="#">$200-$599</label></div>
            <div><input type="radio" id='price' name='price' /> &nbsp; <label htmlFor="#">$600-$999</label></div>
            <div><input type="radio" id='price' name='price' /> &nbsp; <label htmlFor="#">$1000</label></div>
            </div>
            
              
            
           </form>
        </div>
        <div className="shop-container-right">
            <div className="container-left-top">
              <h3>Shop All Products</h3>
              <div className="filter-selection">
                <select name="" id="" className='selections'>
                  {categories?.map((category,index) => (
                   <option  key={index} value={category.category_name}>{category.category_name.charAt(0).toUpperCase() + category.category_name.slice(1)}</option>
                  ))}
                  
                  
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
