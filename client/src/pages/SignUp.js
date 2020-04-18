import React, { useState } from "react";
import API from "../utils/API";
import "../styles/SignUp.css";
import BasicNav from "../components/Nav/basicNav";


function SignUp() {

    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        emailErr: "", //these strings will represent the error message we will show the user 
        passwordErr: "", //these strings will represent the error message we will show the user
        activites: []
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value)
        setSignUp({ ...signUp, [name]: value })
        console.log(signUp);
    }

    function validate () {
        let emailErr= ""
        let passwordErr= ""
        if (!signUp.email.match(/.+@.+\..+/)) {
            emailErr = "Invalid email please try again"
        }

        if (signUp.password.length < 6) {
            passwordErr= "Must be at least six characters"
        }

        if (emailErr || passwordErr) {
            setSignUp({emailErr, passwordErr})
            console.log(signUp)
            return false;
        }

        return true;
    }


    function handleFormSubmit(event) {
        event.preventDefault();
        const isValid = validate();
        console.log(isValid)
        if (isValid) {
            setSignUp({...signUp, passwordErr: "", emailErr: ""})
            console.log(signUp)
            API.saveUser({
                email: signUp.email,
                password: signUp.password,
                activities: signUp.activites
            }) 
                .then(res => {
                    console.log("res", res)
                    window.location.assign("/signin")
                })
                .catch(err => {
                    console.log(err)
                    alert("Email is already in use please Login with current account")
                })
        }

    }

    return ( <>
        <BasicNav />
        <div id="signUp">
            <div className="container h-100 justify-content-center align-items-center center-div">

                <h4>Create an account to start living your best quarantine life!</h4>

                <div className="form-group" />
                <label for="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} name="email" />
                {signUp.emailErr ? (<div style={{ fontsize: 12, color: "red"}}name="emailErr">{signUp.emailErr}</div> ) : null}


                <div className="form-group" />
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleInputChange} name="password"/>
                {signUp.passwordErr ? (<div style={{ fontsize: 12, color: "red"}}name="passwordErr">{signUp.passwordErr}</div> ) : null}

                <div className="form-group form-check" />
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Up</button>
                
                <br></br>
                <small>Already have an account? Log in <a href="/signin">here</a>.</small>
            </div>
        </div>
    </>
    )
}

export default SignUp;