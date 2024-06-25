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
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/largestprimefactor">Largest Prime Factor</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/largestpalindromeproduct">Largest Palindrome Product</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/smallestmultple">Smallest Multiple</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/sumsquaredifference">Sum Square Difference</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/tenthousandsfirstprime">10001st Prime</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link link-body-emphasis" to="/specialpythagoreantriplet">Special Pythagorean Triplet Prime</NavLink></li>

        
      </ul>
    </div>
  );
}

export default Navigation;