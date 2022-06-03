import React from "react";
import { useNavigate } from "react-router-dom"

import './Home.css'

export default function Home() {
    const navigate = useNavigate()

    const handleSignUpShow = () => {
        navigate("/signup")
    }
    const handleSignInShow = () => {
        navigate("/signin")
    }
    return (
        <div className="home-container">
            <div className="homepage">
                <h1>Planning your day</h1>
                <div className="home-authentication">
                    <p className="mb-3">Already have an acount<a className="ml-3" onClick={handleSignInShow}>Sign In</a></p>
                    <p>Don't have an acount<a className="ml-3"onClick={handleSignUpShow}>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}