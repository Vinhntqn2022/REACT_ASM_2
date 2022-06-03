import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    userData: [
        {
            usename: "admin",
            password: "adminadmin"
        },
        {
            usename: "vinh",
            password: "vinhvinh"
        }
    ]
}
const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        },
        setUserData(state, action) {
            state.userData = [...state.userData, action.payload]
        }
    }
});
const {actions, reducer} = authSlice;
export {actions as AuthActions, reducer as AuthReducer}