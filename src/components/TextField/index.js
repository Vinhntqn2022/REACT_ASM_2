import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css";

export default function TextField({ label, ...props}) {
    const [field, meta] = useField(props)
    return(
        <div className="mb-2 px-5">
            <label htmlFor={field.name}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props} autoComplete="off" type="text" />
            <ErrorMessage name={field.name} className="error"/>
        </div>
    )
}