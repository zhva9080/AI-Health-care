import { createSlice } from "@reduxjs/toolkit";
const initialState={
    logindetails:{
        request : "candidate_login",
        email :"",
        password :""
    }
}        

export const Userloginslice=createSlice({
    name:"login",
    initialState:initialState,  
    reducers:{
        setloginUser:(state,action)=>{
            state.logindetails=action.payload
        },
    }
}
)
export const {setloginUser} =Userloginslice.actions
export default Userloginslice.reducer