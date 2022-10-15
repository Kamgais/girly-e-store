import React, {FunctionComponent,useState,useEffect} from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import Product from '../../Components/Product/Product';
import { ProductDto } from '../../DTOs/ProductDto'
import { ProductService } from '../../Services/ProductService';
import Footer from '../Footer/Footer';
import './products.styles/productList.css';


type Props = {
  productList: ProductDto[]|null
}

const ProductList: FunctionComponent<Props> = ({productList}) => {
  

  //user is currently on this page
  const [currentPage,setCurrentPage] = useState(1);

  //No of Records to be displayed on each page
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord:number = currentPage * recordsPerPage;
  const indexOfFirstRecord:number = indexOfLastRecord - recordsPerPage;

let currentRecords:ProductDto[];
  //Records to be displayed of the current page
  if(productList){
     currentRecords = productList!.slice(indexOfFirstRecord,indexOfLastRecord);
  }
  
  // number of pages
  const nPages = Math.ceil(productList!.length / recordsPerPage);
  return (
    <div className='product-list-container'>
      <div className="product-list">
        {
          currentRecords!.map((product, index) => (
            <Product key={index} product={product}/>
          ))
        }
      </div>
      <Pagination nPages={nPages}  currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      
    </div>
  )
}

export default ProductList;
