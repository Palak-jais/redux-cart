import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
          state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=!state.isLoggedIn;
        },
    }
});
export const authActions=authSlice.actions;
export default authSlice;
