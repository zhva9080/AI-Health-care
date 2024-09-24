import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  patientDetails:{
    request: "create_patient_details",
    patient_name: "",
    gender: "",
    blood_group: "",
    age: "",
    diseases: [],
    duration: "",
    existing_diseases: []
  }
}

export const patientSlice = createSlice({
    name: 'patientdetails',
    initialState,
    reducers: {
      setPatient:(state,action)=>{
        state.patientDetails=action.payload
      }
    },
  })
  
  export const {setPatient} = patientSlice.actions
  
  export default patientSlice.reducer