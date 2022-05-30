import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";

import TextField from "../../components/TextField";
import {useAuth} from "../../Context"

export default function SignIn () {
    const { cancelSetup, createAcount } = useAuth()
    const validate = Yup.object({
        usename: Yup.string()
        .max(15, "Must be 15 charaters or less")
        .required("required"),
        password: Yup.string()
        .min(6, "Password must be at least 6 charaters")
        .required("required")
    })
    return (
        <div className="constiner mt-3">
            <div className="row">
                <div className="col-md-7">
                    <Formik
                        initialValues={{
                            usename: "",
                            password: "",

                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log(values)
                            createAcount(values)
                        }}
                    >
                        {({values, handleSubmit}) => (
                            <div>
                                <h1 className="my-4 font-weight-bold-display-4 text-center">Sign Up</h1>
                                <form onSubmit={handleSubmit}>
                                    <TextField label="usename" name="usename" type="text" />
                                    <TextField label="password" name="password" type="password" />

                                    <div className="mt-3 mr-5">
                                        <button className="btn btn-dark float-right" type="submit">Sign Up</button>
                                        <button className="btn btn-dark float-right" type="reset"onClick={cancelSetup}>Cancel</button>
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