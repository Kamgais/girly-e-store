import axios from "axios";
import { OrderDto } from "../DTOs/OrderDto";
import { BASE_URL } from "../utils/Constants/Url";


export class OrderService {


    static async createOrder (id: number, order:OrderDto):Promise<OrderDto|null>{
        try {
          const response = await axios.post(`${BASE_URL}order/${id}`,order);
          return response.data;
        } catch (error) {
         console.log(error);
         return null;
        }
    }
}