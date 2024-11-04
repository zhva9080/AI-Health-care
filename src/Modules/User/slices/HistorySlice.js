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
        setpaymentHistory:(state,action)=>{ 
            state.paymentHistory=action.payload 
        },
        
    },
   
}
)
export const {setpatientHisory,setpaymentHistory} =patientHistorySlice.actions
export default patientHistorySlice.reducer