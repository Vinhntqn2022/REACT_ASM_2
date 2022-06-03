import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import "./SignIn.css"
import { AuthActions, AlertActions } from "../../redux/rootAction";
import TextField from "../../components/TextField";


export default function SignIn () {
    const userData = useSelector(state => state.AuthReducer.userData)
    const dispatch = useDispatch()
    const handleLogin = (values) => {
        const corectUsername = userData.find(user => user.usename === values.usename)
        if(!corectUsername) {
            dispatch(AlertActions.setWrongUsernameAlert(true))
        } else if(corectUsername.password !== values.password) {
            dispatch(AlertActions.setWrongPassAlert(true))
        } else {
            dispatch(AuthActions.setToken('2342f2f1d131rf12'))
            dispatch(AlertActions.setSignUpSuccess(true))
            navigate('/dashboard')
            }
        }  
    const navigate = useNavigate()
    const handleSignUpShow = () => {
        navigate("/signup")
    }
    const initialValues = {
        usename: "",
        password: ""
    }
    const validate = Yup.object({
        usename: Yup.string()
        .max(15, "Must be 15 charaters or less")
        .required("required"),
        password: Yup.string()
        .min(6, "Password must be at least 6 charaters")
        .required("required")
    })
    return (
        <div className="constiner mt-3 ">
            <div className="row ">
                <div className="col-md-5 mx-auto">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validate}
                        onSubmit={values => {handleLogin(values)}}
                    >
                        {({values, handleSubmit}) => (
                            <div className="formik-singin my-5 py-5">
                                <h1 className="my-4 font-weight-bold-display-4 text-center">Sign In</h1>
                                <form onSubmit={handleSubmit}>
                                    <TextField label="usename" name="usename" type="text" />
                                    <TextField label="password" name="password" type="password" />
                                    <div className="mt-3  px-5 d-flex justify-content-between">
                                        <p className="mr-3">don't have an acount <a className="text-danger" type="button" onClick={handleSignUpShow}>Sign Up</a></p>
                                        <button className="btn btn-dark float-right" type="submit">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        )}                     
                    </Formik>
                </div>
            </div>         
        </div>
    )
}