import React from "react";
import { NavLink } from "react-router-dom"

function Navigation () {
 
    return (
       <nav className="navbar bg-dark">
          <div className="container d-flex justify-content-around">        
            <NavLink className="navbar-item" to="/">Home</NavLink>
            <NavLink className="navbar-item" to="/dashboard">Dashboard</NavLink>
         </div> 
         
       </nav>
    );
}
export default Navigation;