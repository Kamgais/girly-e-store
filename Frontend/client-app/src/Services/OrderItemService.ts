import axios from "axios";
import { OrderItemDto } from "../DTOs/OrderItemDto";
import { BASE_URL } from "../utils/Constants/Url";




export class OrderItemService {


    static async createOrderItem(id: number, item: OrderItemDto):Promise<OrderItemDto|null> {
        try {
           const response = await axios.post(`${BASE_URL}orderitem/${id}`,item);
           return response.data;
        } catch (error) {
         console.log(error);
         return null;  
        }
    }
}