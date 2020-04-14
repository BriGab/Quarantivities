import React, { useState } from "react";
import API from "../utils/API"
import { Link, Redirect } from "react-router-dom";
import "../styles/SignUp.css";

function SignIn() {
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
            API.loginUser({
                email: signUp.email,
                password: signUp.password,
                activities: signUp.activites
            })
                .then((res) => {
                    console.log(res)
                    localStorage.setItem("secret_token", res.data.token)
                })
                .then((res)=>{
                    console.log(res)
                    window.location.assign(`/home`)
                })
                .catch(err => console.log(err))
        }
    }


    return (
        <div>
                        {global.user && <Redirect to="" />}

                        <div className="container h-100 justify-content-center align-items-center center-div">
                        <form/>
                        
                        
                        <h4>Log in to start your fun!</h4>
                        
                        <div className="form-group"/>
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} name="email"/>
                        
                        <div className="form-group"/>
                            <label for="exampleInputPassword1">Password</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleInputChange}name="password"/>
                
                        <div className="form-group form-check"/>
                        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Log In</button><Link to="/signin/home"></Link>
 
        
                        <br></br>
                        <small>Don't have an account? Sign up <a href="/">here</a>.</small>
                        </div>
                </div>
        // <div>
            // {/* {global.user && <Redirect to="" />} */}
        //     <h1>Log In</h1>
        //     <input type="email" placeholder="email Here" onChange={handleInputChange} name="email"></input>
        //     <input type="text" placeholder="Password Here" onChange={handleInputChange} name="password"></input>
        //     <button type="submit" onClick={handleFormSubmit}>Button</button><Link to="/signin/home"></Link>

        // </div>
    )
}

export default SignIn;