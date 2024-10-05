import { createSlice } from "@reduxjs/toolkit";
const initialState={
   doctorlist:[]
}        

export const DoctorlistSlice=createSlice({
    name:"DoctorList",
    initialState:initialState,  
    reducers:{
        setDoctorList:(state,action)=>{
            state.doctorlist=action.payload
        },
        
    },
   
}
)
export const {setDoctorList} =DoctorlistSlice.actions
export default DoctorlistSlice.reducer