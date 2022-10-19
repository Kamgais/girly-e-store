import { CartService } from "../../Services/CartService"
import { getCart } from "../cartSlice";



 export const fetchCart = (id:number) => async(dispatch:any) => {
    try {
       const response = await CartService.getCartByCustomerId(id);
       dispatch(getCart(response))
    } catch (error) {
     console.log(error);
    }
 }