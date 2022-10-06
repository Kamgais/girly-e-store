import {createSlice} from '@reduxjs/toolkit';




let INITIAL_STATE;
if(localStorage.getItem('current_user')) {
    INITIAL_STATE = {
    user: localStorage.getItem('current_user'),
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
        localStorage.setItem('current_user',state.user!)
     },
     signOut: (state,action) => {
        state.user = null;
        state.logged = false;
        localStorage.removeItem('current_user')
     }
    }
});

// Action creators are generated for each case reducer function
export const {signIn, signOut} = authSlice.actions;


export default authSlice.reducer;