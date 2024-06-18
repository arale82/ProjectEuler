import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(){
  return (
    <div className="p-3 bg-body-tertiary" style={{width: "280px"}}>
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">Projects realized</span>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis"to="/multiplesof35">Multiples of 3 or 5 </NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/fibonacci">Even Fibonacci Numbers</NavLink></li>
      </ul>
    </div>
  );
}

export default Navigation;