import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Modules/User/slices/CounterSlice'
import registerSlice from '../Modules/Doctor/slices/registerSlice'
import doctorLoginSlice  from '../Modules/Doctor/slices/LoginSlice'


export const store = configureStore({
  reducer: {
    counter : CounterSlice,
    doctor_register : registerSlice,
    doctor_login_state : doctorLoginSlice

  },
})