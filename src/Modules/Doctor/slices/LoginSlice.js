import { createSlice } from "@reduxjs/toolkit";

export const doctorLoginSlice = createSlice(
    {
        name: "doctor_login_state",
        initialState :{
            doctorLogin :{
                request : "candidate_login",
                email : "",
                password : ""
            }},
        reducers :{
            get_login_data : (state, action)=>{
                state.doctorLogin = action.payload
            }
        } 
        
    }
)

export const { get_login_data } = doctorLoginSlice.actions
export default doctorLoginSlice.reducer