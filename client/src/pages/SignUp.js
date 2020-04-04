import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function SignUp () {
    
    const [signUp, setSignUp] = useState({
        userName: "",
        password: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value)
        setSignUp({...signUp, [name]: value})
        console.log(signUp);
    }

    function handleFormSubmit (event) {
        event.preventDefault();
        if(signUp.userName && signUp.password) {
            
        }
    }

    return (
        <div>
            <input type="text" placeholder= "userName Here" onChange={handleInputChange} name="userName"></input>
            <input type="text" placeholder= "Password Here" onChange={handleInputChange} name="password"></input>
            <button type="submit" onClick={handleFormSubmit}>Button</button>
        </div>
    )
}

export default SignUp;