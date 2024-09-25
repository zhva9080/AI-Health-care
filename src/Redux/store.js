import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Modules/User/slices/CounterSlice'
import LoginSlice from '../Modules/admin/slices/LoginSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice,
    login:LoginSlice
  },
})