import axios from "axios";
import { VariationDto } from "../DTOs/VariationDto";
import { VarOption } from "../DTOs/VarOptionDto";
import { BASE_URL } from "../utils/Constants/Url";



 export class VarOptionService {


    static async getVarOptionByVarId(id: number):Promise<VarOption[]|null>{
     try {
        const response = await axios.get(`${BASE_URL}varoptions/variation/${id}`);
        return response.data;
     } catch (error) {
       console.log(error);
       return null; 
     }
    }
 }