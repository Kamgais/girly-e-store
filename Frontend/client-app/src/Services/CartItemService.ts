import axios from "axios";
import { CartItemDto } from "../DTOs/CartItemDto";
import { BASE_URL } from "../utils/Constants/Url";




export class CartItemService {


    static async postItem(item:CartItemDto, id:number):Promise<CartItemDto|null> {
        try {
            const response = await axios.post(`${BASE_URL}cartitem/${id}`, item);
            return response.data;
        } catch (error) {
         console.log(error);
         return null;   
        }
    }


    static async updateItem(item:CartItemDto|null, id?:number|null):Promise<CartItemDto|null> {
        try {
           const response = await axios.put(`${BASE_URL}cartitem/${id}`, item);
           return response.data;
        } catch (error) {
          console.log(error);
          return null;  
        }
    }



    static async deleteItem(id:number):Promise<any> {
        try {
           const response = await axios.delete(`${BASE_URL}cartitem/${id}`);
           return response.data;
        } catch (error) {
         console.log(error);
         return null;   
        }
    }



    static async getAllItems(id: number):Promise<CartItemDto[]|null> {
        try {
            const response = await axios.get(`${BASE_URL}cartitem/${id}`);
            return response.data;
        } catch (error) {
          console.log(error);
          return null;
        }
    }
}