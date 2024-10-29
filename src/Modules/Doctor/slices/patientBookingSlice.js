import { createSlice } from "@reduxjs/toolkit";


const patientBookingSlice = createSlice(
    {
        name : 'patient_booking_state',
        initialState :{
            patientBooking:{}
        },
        reducers:{
            get_patient_data :(state,action)=>{
                state.patientBooking = action.payload
            }
        }
    }
)

export const { get_patient_data } = patientBookingSlice.actions
export default patientBookingSlice.reducer