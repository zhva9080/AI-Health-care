import { createSlice } from "@reduxjs/toolkit";

const patient_payment_historySlice = createSlice(
    {
        name : "patient_payment_history_state",
        initialState:{
            patientPayment_historySlice :[]
        },
        reducers:{
            calculateTotalAmount : (state,action)=>{
                state.patientPayment_historySlice = action.payload
            }
        }
        

    }
)

export const { calculateTotalAmount } = patient_payment_historySlice.actions
export default patient_payment_historySlice.reducer