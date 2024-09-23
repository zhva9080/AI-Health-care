import { createSlice } from "@reduxjs/toolkit";

export const doctorRegisterSlice = createSlice(
    {
        name: 'doctor_register',
        initialState: {
            doctor_register_data: {
                request: "create_candidate",
                name: "",
                email: "",
                password: "",
                aadhar: null,
                address: "",
                phone: "",
                city: "",
                area: "",
                pin: null
            }
        },
        reducers: {
            submit_Register: (state, action) => {
                state.doctor_register_data = action.payload
            }
        }
    }
)

export const { submit_Register } = doctorRegisterSlice.actions
export default doctorRegisterSlice.reducer