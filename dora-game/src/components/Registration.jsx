import React from 'react';
import { Link } from "react-router-dom";
import { MatrixRainingLetters } from "react-mdr";

function Registration() {
  return (
    <>
        <MatrixRainingLetters key="foo-bar" custom_class="m-0 p-0" />
        <h1>Welcome to the App</h1>
        <p>Start your journey now!</p>
        <Link to="/Registration" className="register-button">Register</Link>
        
    </>
  )
}

export default Registration