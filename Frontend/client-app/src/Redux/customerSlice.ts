import { createSlice } from "@reduxjs/toolkit";
import { CustomerDto } from "../DTOs/CustomerDto";

let INITIAL_STATE:CustomerDto = {
   firstname: null,
   lastname: null,
   id: null,
   userId: null 
}

if(sessionStorage.getItem('current_customer')) {
    INITIAL_STATE = {
        firstname: null,
        lastname: null,
        ...JSON.parse(sessionStorage.getItem('current_customer')!)}
} else {
    INITIAL_STATE = {
        firstname: null,
        lastname: null,
        id: null,
        userId: null 
    }
}

const customerSlice = createSlice({
    name: 'customer',
    initialState: INITIAL_STATE,
    reducers: {
        setCustomer: (state,action) => {
            console.log(action.payload)
           state.id = action.payload.id;
           state.userId = action.payload.userId; 
           sessionStorage.setItem('current_customer', JSON.stringify(state))
        }
    }

})


export const {setCustomer} = customerSlice.actions;

export default customerSlice.reducer;