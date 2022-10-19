import axios from "axios";
import { CustomerDto } from "../DTOs/CustomerDto";
import { BASE_URL } from "../utils/Constants/Url";



export class CustomerService {


    static async createCustomer(customer:CustomerDto):Promise<CustomerDto|null>{
        try {
            const response = await axios.post(`${BASE_URL}customer`,customer);
            console.log(response.data)
            return response.data;
            
        } catch (error) {
         console.log(error);
         return null;   
        }
    }


    static async getCustomerByUserId(id:number):Promise<CustomerDto|null> {
        try {
          const response = await axios.get(`${BASE_URL}customer/user/${id}`);
          return response.data;
        } catch (error) {
         console.log(error);
         return null; 
        }
    }
}