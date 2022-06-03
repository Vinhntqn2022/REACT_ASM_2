import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wrongPassAlert: false,
    wrongUsernameAlert: false,
    signUpFail: false,
    signUpSuccess: false,
}
const alertSlice = createSlice({
    name: "alertSlice",
    initialState: initialState,
    reducers: {
        setSignUpFail(state, action) {
            state.signUpFail = action.payload
        },
        setSignUpSuccess(state, action) {
            state.signUpSuccess = action.payload
        },
        setWrongPassAlert(state, action) {
            state.wrongPassAlert = action.payload
        },
        setWrongUsernameAlert(state, action) {
            state.wrongUsernameAlert = action.payload
        },
        
    }
});
const {actions, reducer } = alertSlice;
export {actions as AlertActions, reducer as AlertReducer}