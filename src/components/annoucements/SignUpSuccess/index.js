import React from "react";
import { Alert } from 'react-bootstrap'
import './SignUpSuccess.css'

import {useAuth} from "../../../Context"

export default function SignUpSuccess() {
    const {showSuccess, setShowSucess} = useAuth()
    return (
        <div className="alert">
            <Alert variant="success" show={showSuccess} >
                 <button className="close" onClick={() => setShowSucess(false)}>close</button>
                <Alert.Heading>Hey, nice to see you</Alert.Heading> 
                <p>Congratulation! </p>
                <hr />
                <p className="mb-0">Now you can Sign In and enjoy your daily routines</p>
            </Alert>
        </div>
    )
}
