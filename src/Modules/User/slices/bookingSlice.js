
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    dotor_slot_details:[]
}        

export const DoctorDetailsSlice=createSlice({
    name:"user_doctor_slot",
    initialState:initialState,  
    reducers:{
        setDoctorSlotDetails:(state,action)=>{
            state.dotor_slot_details=action.payload
        },
    }
}
)
export const {setDoctorSlotDetails} =DoctorDetailsSlice.actions
export default DoctorDetailsSlice.reducer