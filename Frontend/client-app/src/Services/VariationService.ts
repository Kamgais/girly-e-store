import axios from "axios";
import { VariationDto } from "../DTOs/VariationDto";
import { BASE_URL } from "../utils/Constants/Url";



  export class VariationService {



    static async getVariationsByProductId(id:number):Promise<VariationDto[]|null> {
        try {
         const response = await axios.get(`${BASE_URL}variations/product/${id}`);
         return response.data;
        } catch (error) {
           console.log(error);
           return null;
        }
    }
  }