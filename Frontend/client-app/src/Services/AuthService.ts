import { UserDto } from "../DTOs/UserDto";
import { BASE_URL } from "../utils/Constants/Url";
import axios from 'axios';
axios.defaults.withCredentials = true;




   export class AuthService {

      
     
     static async createAccount(user: UserDto):Promise<UserDto|any> {
      try {
       const response=  await axios.post<UserDto|null>(`${BASE_URL}auth/register`, user);
       return response.data;

    } catch (error:any) {
       console.log(error);
      }  
    }

    static async signIn(user: UserDto):Promise<UserDto|any> {
        try {
          const response = await axios.post<UserDto|null>(`${BASE_URL}auth/login`, user)
          console.log(response.data)
          return response.data;  
        } catch (error) {
          console.log(error);
        }
    }


    static async getUser():Promise<UserDto|any> {
      try {
        const response = await axios.get<UserDto|null>(`${BASE_URL}auth/user`, {
          withCredentials: true
        });
        return response.data;
      } catch (error) {
       console.log(error);
      }
    }
   }