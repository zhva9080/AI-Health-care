import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    registerData: {
        request: "ai_health_user_register",
        name: "",
        email: "",
        phone: "",
        password: ""
    }
}

export const userRegisterSlice = createSlice({
    name: "userRegister",
    initialState: initialState,
    reducers: {
        register_details: (state, action) => {
            state.registerData = action.payload
        }
    }
})

export const { register_details } = userRegisterSlice.actions
export default userRegisterSlice.reducer