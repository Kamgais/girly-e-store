import axios from "axios";
import { CategoryDto } from "../DTOs/CategoryDto";
import { ProductDto } from "../DTOs/ProductDto";
import { BASE_URL } from "../utils/Constants/Url";


export class ProductService {

    static async getAllProducts(categories:string[]|null,minPrice:number, maxPrice:number|undefined):Promise<{ data :ProductDto[]|null}| null> {

        try {
        const response = await axios.get(`${BASE_URL}products?categories=${categories!.join(",")}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
        
        return response.data;
            
        } catch (error) {
          console.log(error); 
         return null;
        }
        
    }


    static async getProductById (id: number):Promise<ProductDto|null> {
        try {
           const response = await axios.get(`${BASE_URL}products/${id}`);
           return response.data;
        } catch (error) {
          console.log(error);
          return null;  
        }
    }
}