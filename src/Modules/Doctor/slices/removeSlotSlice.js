import { createSlice } from "@reduxjs/toolkit";


export const removeSlotSlice = createSlice(
    {
        name : "remove_slot_state",
        initialState :{
            remove_slot_slice: [
            ]
        },
        reducers :{ 
            deleteSlot:(state,action)=>{
                state.remove_slot_slice = action.payload
            }
        }
    }
)

export default removeSlotSlice.reducer
export const {deleteSlot} = removeSlotSlice.actions