import axios from "axios";
import { CartDto } from "../DTOs/CartDto";
import { BASE_URL } from "../utils/Constants/Url";



 export class CartService {

    
     static async getCartByCustomerId(id: number):Promise<CartDto|null> {
        try {
            const response = await axios.get(`${BASE_URL}carts/customer/${id}`);
            return response.data;
        } catch (error) {
           console.log(error);
           return null; 
        }
    }


    static async createCart(cart:CartDto):Promise<CartDto|null>{
        try {
         const response = await axios.post(`${BASE_URL}carts`,cart);
         return response.data;
        } catch (error) {
         console.log(error);
         return null;   
        }
    }
 }