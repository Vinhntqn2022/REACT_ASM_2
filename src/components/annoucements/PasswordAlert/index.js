import React from "react";
import { Alert } from 'react-bootstrap'
import './PasswordAlert.css'

import {useAuth} from "../../../Context"

export default function PasswordAlert() {
    const {showPasswordAlert, handlePasswordShow} = useAuth()
    return (
        <div className="password-alert">
            <Alert variant="success" show={showPasswordAlert} >
                 <button className="close" onClick={() => handlePasswordShow(false)}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Wrong password</p>
                <hr />
                <p className="mb-0">Please enter correct password</p>
            </Alert>
        </div>
    )
}
