import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./SignUp.css"
import TextField from "../../components/TextField";
import { AlertActions, AuthActions } from "../../redux/rootAction";


export default function SignUp () {

    const navigate = useNavigate();
    const userData = useSelector(state => state.AuthReducer.userData)
    const dispatch = useDispatch()
    const handlecreateAcount =(values) => {
        const corectUsername = userData.find(user => user.usename === values.usename);
        if (corectUsername) {
            dispatch(AlertActions.setSignUpFail(true))
        } else {
            dispatch(AuthActions.setUserData(values))
            dispatch(AlertActions.setSignUpSuccess(true))
            navigate("/signin")
        }
    }
    const showSignIn = () => {
        navigate("/signin")
    }
    const initialValues = {
        usename: "",
        password: "",
    }
    const validate = Yup.object({
        usename: Yup.string()
        .max(15, "Must be 15 charaters or less")
        .required("required"),
        password: Yup.string()
        .min(3, "Password must be 3 charaters or more")
        .max(8, "Password must be 8 charaters or less")
        .required("required")
    })
    return (
        <div className="constiner mt-3">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validate}
                        onSubmit={values => {
                            handlecreateAcount(values)
                        }}
                    >
                        {({values, handleSubmit}) => (
                            <div className="formik-signup py-5 my-5">
                                <h1 className="my-4 font-weight-bold-display-4 text-center">Sign Up</h1>
                                <form onSubmit={handleSubmit} >
                                    <TextField label="usename" name="usename" type="text" />
                                    <TextField label="password" name="password" type="password" />

                                    <div className="mt-3  px-5 d-flex justify-content-between">
                                        <p className="mr-3">Already have an acount <a className="text-danger" type="button" onClick={showSignIn}>Sign In</a></p>
                                        <button className="btn btn-dark float-right" type="submit">Sign Up</button>
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