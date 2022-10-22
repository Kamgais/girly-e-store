import React, {FunctionComponent, useState, useEffect, useRef} from 'react'
import { CategoryDto } from '../../DTOs/CategoryDto';
import { ProductDto } from '../../DTOs/ProductDto';
import Footer from '../../Layouts/Footer/Footer';
import ProductList from '../../Layouts/ProductList/ProductList';
import { CategoryService } from '../../Services/CategoryService';
import { ProductService } from '../../Services/ProductService';
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

    // selected Categories
    const [selectedCategories, setSelectedCategories] = useState<string[]|null>([])

    // min price
    const [minPrice, setMinPrice] = useState<number>(0);

    // max price
    const [maxPrice, setMaxPrice] = useState<number|undefined>()

    // products 
    const [productList, setProductList] = useState<ProductDto[]|null>([]);

    // selected categories
    



    //add oder remove from selectedCategories
    const addOrRemoveFromArray = (category: string) => {
       if(selectedCategories?.includes(category)) {
     const newSelectedCategories = selectedCategories.filter(element => element !== category);
   console.log(newSelectedCategories)  
     setSelectedCategories(newSelectedCategories);
       } else {
        let newSelectedCategories = [...selectedCategories!,category]
        setSelectedCategories(newSelectedCategories)
       }
    }


    const findMinAndMaxPrice = (term:string) => {
      switch(term) {
        case 'alpha' : return {minPrice:0, maxPrice:100};  break;
        case 'beta' : return {minPrice:100, maxPrice:199}; break;
        case 'teta' : return {minPrice:200, maxPrice:299}; break;
        case 'omega' : return {minPrice:299, maxPrice:400}; break;
        case 'lambda' : return {minPrice:400, maxPrice:undefined}; break;
        case 'all' : return {minPrice:0 , maxPrice:undefined}; break;
        default : return {minPrice:0, maxPrice:0};
      }
    }


    // handle the filter event
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      if(e.target.type === 'checkbox') {
        addOrRemoveFromArray(e.target.name);
        console.log(e.target.name)
      } else if( e.target.type === 'radio') {
       const value = findMinAndMaxPrice(e.target.id);
      setMinPrice(value.minPrice) ;
       setMaxPrice(value.maxPrice);
      }

      
     

       
    }

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

    // fetch data products from api
    const fetchProducts = async(categories:string[]|null,minPrice:number,maxPrice:number = 1000) => {
      const response = await ProductService.getAllProducts(categories,minPrice,maxPrice);
      setProductList(response!.data);
     // console.log(response?.data)
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
       fetchProducts(selectedCategories,minPrice,maxPrice);
    },[selectedCategories, minPrice, maxPrice])


    
  
  
  
  
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
              <div key={index}> <input   type="checkbox" id={category.category_name} name={category.category_name} onChange={(e)=>handleFilter(e)} /> <span></span>
            &nbsp;  <label htmlFor={category.category_name}>{(category.category_name).charAt(0).toUpperCase() + category.category_name.slice(1) }</label>
              </div>
            ))}
             </div>
            
              <div className="prices">
              <label htmlFor='price'>Price</label>
              <div><input type="radio" id='all' name='price' onChange={(e) => handleFilter(e)}/>&nbsp;All prices</div>
            <div><input type="radio" id='alpha' name='price' onChange={(e) => handleFilter(e)}/>&nbsp;{'<'}&nbsp;$100</div> 
            <div><input type="radio" id='beta' name='price' onChange={(e) => handleFilter(e)} />&nbsp;$100-$199</div>  
            <div><input type="radio" id='teta' name='price' onChange={(e) => handleFilter(e)} />&nbsp;$200-$299</div>
            <div><input type="radio" id='omega' name='price' onChange={(e) => handleFilter(e)} />&nbsp;$300-$399</div>
            <div><input type="radio" id='lambda' name='price' onChange={(e) => handleFilter(e)} />&nbsp;{'>'}&nbsp;$400</div>
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
                <ProductList productList={productList}/>
            </div>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default ShopPage
