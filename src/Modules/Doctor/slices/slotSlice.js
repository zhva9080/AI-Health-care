import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice(
    {
        name : "doctor_slot_state",
        initialState :{
            doctorSlotSlice:[]
        },
        reducers:{
            set_slot_data :(state,action)=>{
                state.doctorSlotSlice = action.payload
            }
        }
    },

)

export default slotSlice.reducer
export  const {set_slot_data} = slotSlice.actions

