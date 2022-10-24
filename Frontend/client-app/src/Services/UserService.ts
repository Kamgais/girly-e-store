import axios from "axios";
import { UserDto } from "../DTOs/UserDto";
import { BASE_URL } from "../utils/Constants/Url";



export class UserService {


    static async updateUser(id:number, user:UserDto|null):Promise<UserDto|null>{
        try {
            const response = await axios.put(`${BASE_URL}users/${id}`, user);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}