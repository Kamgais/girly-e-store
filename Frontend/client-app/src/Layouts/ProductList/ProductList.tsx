import React, {FunctionComponent,useState,useEffect} from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import Product from '../../Components/Product/Product';
import { ProductDto } from '../../DTOs/ProductDto'
import { ProductService } from '../../Services/ProductService';
import Footer from '../Footer/Footer';
import './products.styles/productList.css';

const ProductList: FunctionComponent = () => {
  const [products,setProducts] = useState<ProductDto[]|null>([]);

  //user is currently on this page
  const [currentPage,setCurrentPage] = useState(1);

  //No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord:number = currentPage * recordsPerPage;
  const indexOfFirstRecord:number = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductService.getAllProducts();
      setProducts(response!.data);
      console.log(response!.data);
    }

    fetchProducts()
  },[])


  //Records to be displayed of the current page
  if(products){
    const currentRecords:ProductDto[] = products!.slice(indexOfFirstRecord,indexOfLastRecord);
  }
  
  // number of pages
  const nPages = Math.ceil(products!.length / recordsPerPage);
  return (
    <div className='product-list-container'>
      <div className="product-list">
        {
          products!.map((product, index) => (
            <Product product={product}/>
          ))
        }
      </div>
      <Pagination nPages={nPages}  currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      
    </div>
  )
}

export default ProductList;
