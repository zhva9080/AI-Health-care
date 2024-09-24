import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Modules/User/slices/CounterSlice'
import registerSlice from '../Modules/Doctor/slices/registerSlice'
import doctorLoginSlice  from '../Modules/Doctor/slices/loginSlice'
import slotSlice from '../Modules/Doctor/slices/slotSlice'
import patientBookingSlice from '../Modules/Doctor/slices/patientBookingSlice'

export const store = configureStore({
  reducer: {
    counter : CounterSlice,
    doctor_register : registerSlice,
    doctor_login_state : doctorLoginSlice,
    doctor_slot_state : slotSlice,
    patient_booking_state: patientBookingSlice
  },
})