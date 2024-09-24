import { configureStore } from '@reduxjs/toolkit'
import  patientSlice from '../Modules/User/slices/PatientSlice'
import userRegisterSlice from '../Modules/User/slices/RegisterSlice'
import  Userloginslice from '../Modules/User/slices/Loginslice'
export const store = configureStore({
  reducer: {
    patientdetails:patientSlice,
    userRegister:userRegisterSlice,
    userlogin:Userloginslice
  },
})