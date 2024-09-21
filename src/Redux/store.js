import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Modules/User/slices/CounterSlice'
export const store = configureStore({
  reducer: {
    counter:CounterSlice
  },
})