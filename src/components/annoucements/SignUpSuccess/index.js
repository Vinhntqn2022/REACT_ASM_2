import React, { useState } from "react";
import { Alert } from 'react-bootstrap'
import './SignUpSuccess.css'
import { useSelector, useDispatch } from "react-redux";
import { AlertActions } from "../../../redux/rootAction";


 const SignUpSuccess = () => {
     const showSuccess = useSelector(state => state.AlertReducer.signUpSuccess)
     const dispatch = useDispatch()
    
    return (
        <div className="alert">
            <Alert variant="success" show={showSuccess} >
                 <button className="close" onClick={() => dispatch(AlertActions.setSignUpSuccess(false))}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Congratulation! </p>
                <hr />
                <p className="mb-0">Now you can enjoy your daily routines</p>
            </Alert>
        </div>
    )
}

export default SignUpSuccess
