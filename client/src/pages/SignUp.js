import React, { useState }  from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";


function SignUp () {
    
    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        activites: []
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value)
        setSignUp({...signUp, [name]: value})
        console.log(signUp);
    }

    function handleFormSubmit (event) {
        event.preventDefault();
        if(signUp.email && signUp.password) {
            API.saveUser({
                email: signUp.email,
                password: signUp.password,
                activities: signUp.activites
            })
            .then(res => {
                console.log("res", res)
                alert("You are now registered please login")
                window.location.assign("/signin")
            })
            .catch(err => console.log(err))
        }   

    }

    return (
        <div>
            <input type="email" placeholder= "email Here" onChange={handleInputChange} name="email"></input>
            <input type="text" placeholder= "Password Here" onChange={handleInputChange} name="password"></input>
            <button type="submit" onClick={handleFormSubmit}>Button</button>
        </div>
    )
}

export default SignUp;