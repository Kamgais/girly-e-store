import axios from "axios";
import { CountryDto } from "../DTOs/CountryDto";
import { BASE_URL } from "../utils/Constants/Url";




  export class CountryService {


    static async getAllCountries():Promise<CountryDto[]|null>{

        try {
            const response = await axios.get(`${BASE_URL}countries`);
            return  response.data;
        } catch (error) {
          console.log(error);
          return null;  
        }

    }
  }