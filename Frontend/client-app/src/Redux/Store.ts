import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import customerReducer from './customerSlice';


export const store = configureStore({
    reducer: {
     auth : authReducer,
     cart: cartReducer,
     customer: customerReducer
    }
})