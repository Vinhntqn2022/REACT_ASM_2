import React, { useState } from "react";
import { Alert } from 'react-bootstrap'
import './PasswordAlert.css'
import { useSelector, useDispatch } from "react-redux";
import { AlertActions } from "../../../redux/rootAction";



const PasswordAlert = () => {
    const showPasswordAlert = useSelector(state => state.AlertReducer.wrongPassAlert)
    const dispatch = useDispatch()
    
    return (
        <div className="password-alert">
            <Alert variant="success" show={showPasswordAlert} >
                 <button className="close" onClick={() => dispatch(AlertActions.setWrongPassAlert(false))}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Wrong password</p>
                <hr />
                <p className="mb-0">Please enter correct password</p>
            </Alert>
        </div>
    )
}

export default PasswordAlert
