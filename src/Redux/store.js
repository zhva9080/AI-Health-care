import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Modules/User/slices/CounterSlice'
import userRegisterSlice from '../Modules/User/slices/RegisterSlice'
import  Userloginslice from '../Modules/User/slices/Loginslice'
export const store = configureStore({
  reducer: {
    counter:CounterSlice,
    register:userRegisterSlice,
    login:Userloginslice
  },
})