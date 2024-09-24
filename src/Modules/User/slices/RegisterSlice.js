import { createSlice } from "@reduxjs/toolkit";
const initialState={
    registerData:{
        request:"create_candidate",
        name:"",
        email:"",
        password:"",
        aadhar:"",
        address:"",
        phone:989349,
        city:"",
        area:"",
        pin:"",
}}

export const userRegisterSlice=createSlice({
    name:"userRegister",
    initialState:initialState,
    reducers:{
        register_details:(state,action)=>{
            state.registerData=action.payload
        }
    }
})

export const {register_details}=userRegisterSlice.actions
export default userRegisterSlice.reducer