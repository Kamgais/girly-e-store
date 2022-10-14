import axios from "axios";
import { CategoryDto } from "../DTOs/CategoryDto";
import { BASE_URL } from "../utils/Constants/Url";



export class CategoryService {




    static async getAllCategories():Promise<CategoryDto[]|null>{
      try {
        const response = await axios.get(`${BASE_URL}categories`);
        return response.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
}