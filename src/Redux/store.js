import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Modules/User/slices/CounterSlice'
import LoginSlice from '../Modules/admin/slices/LoginSlice'
import  patientSlice from '../Modules/User/slices/PatientSlice'
import userRegisterSlice from '../Modules/User/slices/RegisterSlice'
import  Userloginslice from '../Modules/User/slices/Loginslice'
import patientHistorySlice  from '../Modules/User/slices/HistorySlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice,
    login:LoginSlice,
    patientdetails:patientSlice,
    userRegister:userRegisterSlice,
    userlogin:Userloginslice,
    userhistory:patientHistorySlice

  },
})