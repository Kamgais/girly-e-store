import { UserDto } from "../../DTOs/UserDto"
import { UserService } from "../../Services/UserService"
import { changeUser } from "../authSlice";

export const updateUser = (id:number, user:UserDto|null) => async(dispatch:any) => {
  try {
    const response = await UserService.updateUser(id, user);
    dispatch(changeUser(response))
  } catch (error) {
    console.log(error)
  }
}