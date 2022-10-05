import { UserDto } from "../DTOs/UserDto";
import { BASE_URL } from "../utils/Constants/Url";
import axios from 'axios';




   export class AuthService {



     static async createAccount(user: UserDto):Promise<UserDto|any> {
      try {
       const response=  await axios.post(`${BASE_URL}auth/register`, user);
       return response.data;

    } catch (error:any) {
       console.log(error)
      }  
    }

    static async signIn(user: UserDto):Promise<UserDto|any> {
        try {
          const response = await axios.post(`${BASE_URL}auth/login`, user)
          return response.data;  
        } catch (error) {
          console.log(error)
        }
    }
   }