import { createSlice } from "@reduxjs/toolkit";
const initialState={
   patienthistory:[]
}        

export const patientHistorySlice=createSlice({
    name:"userhistory",
    initialState:initialState,  
    reducers:{
        setpatientHisory:(state,action)=>{
            state.patienthistory=action.payload
        },
        
    },
   
}
)
export const {setpatientHisory} =patientHistorySlice.actions
export default patientHistorySlice.reducer