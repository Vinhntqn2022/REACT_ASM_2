import React from "react";
import { NavLink } from "react-router-dom"



function Navigation () {
 
    return (
       <nav className="navbar bg-dark">
          <div className="container d-flex justify-content-start">        
            <NavLink className="navbar-item mx-5" to="/">Home</NavLink>
            <NavLink className="navbar-item" to="/dashboard">Dashboard</NavLink>
         </div> 
         
       </nav>
    );
}
export default Navigation;