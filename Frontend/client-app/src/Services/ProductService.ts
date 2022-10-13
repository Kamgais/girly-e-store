import axios from "axios";
import { ProductDto } from "../DTOs/ProductDto";
import { BASE_URL } from "../utils/Constants/Url";


export class ProductService {

    static async getAllProducts():Promise<{ data :ProductDto[]}| null> {

        try {
        const response = await axios.get(`${BASE_URL}products`);
        console.log(response.data)
        return response.data;
            
        } catch (error) {
          console.log(error); 
         return null;
        }
        
    }
}