import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice(
    {
        name : "doctor_slot_state",
        initialState :{
            doctorSlotSlice:[],
            getSlotListSlice:[]
        },
        reducers:{
            set_slot_data :(state,action)=>{
                state.doctorSlotSlice = action.payload
            },
            get_slot_data :(state,action)=>{
                state.getSlotListSlice = action.payload
            }
        }
    },

)

export default slotSlice.reducer
export  const {set_slot_data, get_slot_data} = slotSlice.actions

