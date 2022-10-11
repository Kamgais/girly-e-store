import axios from "axios";
import { ProductDto } from "../DTOs/ProductDto";
import { BASE_URL } from "../utils/Constants/Url";


export class ProductService {

    static async getAllProducts():Promise<ProductDto[] | void> {

        try {
        const response = await axios.get(`${BASE_URL}products`);
        return response.data;
            
        } catch (error) {
          console.log(error); 
          return;
        }
        
    }
}