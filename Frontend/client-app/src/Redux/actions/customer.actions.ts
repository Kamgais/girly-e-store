import { CustomerService } from "../../Services/CustomerService"
import { setCustomer } from "../customerSlice";
import { fetchCart } from "./cart.actions";




export const getCustomer = (id:number) => async(dispatch: any) => {
 try {
    const response = await CustomerService.getCustomerByUserId(id);
    dispatch(setCustomer(response))
    dispatch(fetchCart(response?.id!))
    console.log(response)
 } catch (error) {
    console.log(error)
 }
}