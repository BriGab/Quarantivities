import React, { useState } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import BasicNav from "../components/Nav/basicNav";


function SignUp() {

    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        activites: []
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value)
        setSignUp({ ...signUp, [name]: value })
        console.log(signUp);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (signUp.email && signUp.password) {
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

    return ( <>
        <BasicNav />
        <div>
            <div className="container h-100 justify-content-center align-items-center center-div">
                <form />


                <h4>Create an account to start living your best quarantine life!</h4>

                <div className="form-group" />
                <label for="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} name="email" />
                {/* <input type="email" placeholder="email Here" onChange={handleInputChange} name="email"></input> */}


                <div className="form-group" />
                <label for="exampleInputPassword1">Password</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleInputChange} name="password"/>
                 {/* <input type="text" placeholder="Password Here" onChange={handleInputChange} name="password"></input> */}

                <div className="form-group form-check" />
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Up</button>
                {/* <button type="submit" onClick={handleFormSubmit}>Button</button> */}


                <br></br>
                <small>Already have an account? Log in <a href="/signin">here</a>.</small>
            </div>
        </div>
        // <div>
        //     <input type="email" placeholder="email Here" onChange={handleInputChange} name="email"></input>
        //     <input type="text" placeholder="Password Here" onChange={handleInputChange} name="password"></input>
        //     <button type="submit" onClick={handleFormSubmit}>Button</button>
        // </div>
    </>
    )
}

export default SignUp;