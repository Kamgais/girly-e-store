import { createSlice } from "@reduxjs/toolkit";
import { CartDto } from "../DTOs/CartDto";


let INITIAL_STATE:CartDto ={
    id: null,
    customerId: null,
    items: [] 
};
if(sessionStorage.getItem('current_cart')) {
    INITIAL_STATE = {
    ...JSON.parse(sessionStorage.getItem('current_cart')!)
    }

    INITIAL_STATE.items = [...JSON.parse(sessionStorage.getItem('cart_items')!)]
    
    
} else {
    INITIAL_STATE = {
        id: null,
        customerId: null,
        items: []
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addInCart: (state,action) => {
            state.items!.push(action.payload)
            sessionStorage.setItem('cart_items', JSON.stringify(state.items))
        },

        removeFromCart: (state, action) => {
          state.items = state.items?.filter(item => item.id !== action.payload) 
          sessionStorage.setItem('cart_items', JSON.stringify(state.items)) 
        },

        
        updateInCart: (state,action) => {
            let index = state.items?.findIndex(item => item.id === action.payload.id)
            state.items![index!] = action.payload;
            sessionStorage.setItem('cart_items', JSON.stringify(state.items))
             
        },

        emptyCart: (state,action) => {
           state.items = [] ;
        },

        getCart: (state,action) => {
            console.log(action.payload)
            state.id = action.payload.id;
            state.customerId = action.payload.customerId;
            sessionStorage.setItem('current_cart', JSON.stringify(state));
            sessionStorage.setItem('cart_items', JSON.stringify(state.items))
            
            

        }

    }

})



// Action creators are generated for each case reducer function
export const {addInCart,removeFromCart,updateInCart,emptyCart, getCart} = cartSlice.actions;

export default cartSlice.reducer;