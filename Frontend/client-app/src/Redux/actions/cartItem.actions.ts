import { CartItemDto } from "../../DTOs/CartItemDto";
import { CartItemService } from "../../Services/CartItemService"
import { addInCart, removeFromCart, updateInCart } from "../cartSlice";


export const getItems = (id: number) => async(dispatch:any) => {
  try {
    const response = await CartItemService.getAllItems(id);
    for (let element = 0; element < response!.length; element++) {
        dispatch(addInCart(response![element]))
    }
  } catch (error) {
    console.log(error);
    return null;
  }  
}


export const setCartItem = (id: number, item:CartItemDto) => async(dispatch:any) => {
    try {
       const response = await CartItemService.postItem(item,id);
       dispatch(addInCart(response))
    } catch (error) {
      console.log(error)
      return null;  
    }
}


export const updateItem = (item:CartItemDto|null, id?: number|null) => async(dispatch:any) => {
    try {
       const response = await CartItemService.updateItem(item,id);
       console.log(response)
       dispatch(updateInCart(response))
    } catch (error) {
     console.log(error)
     return null;   
    }
}


export const deleteItem = (id: number) => async(dispatch:any) => {
    try {
       const response = await CartItemService.deleteItem(id);
       dispatch(removeFromCart(id))
    } catch (error) {
      console.log(error);
      return null;  
    }
}