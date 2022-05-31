import React from "react";

import {useAuth} from "../../Context"
import './Home.css'

export default function Home() {
    const {showSignUp, showSignIn} = useAuth()
    return (
        <div className="home-container">
            <h1>Planning your day</h1>
            <div className="home-authentication">
                <p className="mb-5">Already have an acount<a className="ml-3" onClick={showSignIn}>Sign In</a></p>
                <p>Don't have an acount<a className="ml-3"onClick={showSignUp}>Sign Up</a></p>
            </div>
        </div>
    )
}