import React from "react";
import { Alert } from 'react-bootstrap'
import './Alert.css'

import {useAuth} from "../../../Context"

export default function UsenameAlert() {
    const {showUsenameAlert, setShowMessage} = useAuth()
    return (
        <div className="username-alert">
            <Alert variant="success" show={showUsenameAlert} >
                 <button className="close" onClick={() => setShowMessage(false)}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Wrong username </p>
                <hr />
                <p className="mb-0">Please enter correct username</p>
            </Alert>
        </div>
    )
}
