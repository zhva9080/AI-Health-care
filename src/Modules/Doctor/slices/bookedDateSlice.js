import { createSlice } from "@reduxjs/toolkit";

const bookedDatesSlice = createSlice(
    {
        name : "patient_booked_all_date_state",
        initialState : {
                bookedAllDatesSlice :[]
        },
        reducers :{
            get_patients_booked_data:(state,action)=>{
                state.bookedAllDatesSlice = action.payload
            }
        }
    }
)

export const { get_patients_booked_data } = bookedDatesSlice.actions
export default bookedDatesSlice.reducer
