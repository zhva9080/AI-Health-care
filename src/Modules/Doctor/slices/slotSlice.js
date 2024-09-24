import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice(
    {
        name : "doctor_slot_state",
        initialState :{
            doctorSlotSlice:[]
        },
        reducers:{
            get_slot_data :(state,action)=>{
                state.doctorSlotSlice = action.payload
            }
        }
    },

)

export default slotSlice.reducer
export  const {get_slot_data} = slotSlice.actions

