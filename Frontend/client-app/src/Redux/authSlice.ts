import {createSlice} from '@reduxjs/toolkit';
import {UserDto} from '../DTOs/UserDto';




let INITIAL_STATE ;
if(sessionStorage.getItem('current_user')) {
   INITIAL_STATE = {
    user : JSON.parse(sessionStorage.getItem('current_user')!),
    logged: true
   }
} else {
    INITIAL_STATE = {
        user: null,
        logged:false
    }
}
export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE ,
    reducers: {
     signIn: (state,action) => {
        state.user = action.payload;
        state.logged = true;
        sessionStorage.setItem('current_user',JSON.stringify(state.user!))
     },
     signOut: (state) => {
        state.user = null;
        state.logged = false;
        sessionStorage.removeItem('current_user')
     },
     changeUser: (state,action) => {
        state.user = action.payload;
        sessionStorage.setItem('current_user',JSON.stringify(state.user!))

     }
    }
});

// Action creators are generated for each case reducer function
export const {signIn, signOut, changeUser} = authSlice.actions;


export default authSlice.reducer;