import React, { useState } from "react";
import API from "../utils/API"
import { Link, Redirect } from "react-router-dom";
import "../styles/SignIn.css";
import BasicNav from "../components/Nav/basicNav";

function SignIn() {
    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        error: "",
        activites: []
    })

    function handleKeyup(event) {
            if(event.keyCode === 13) {

                event.preventDefault();
                document.getElementById("subBtn").click();
            }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSignUp({ ...signUp, error: "", [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (signUp.email && signUp.password && !signUp.error) {
            API.loginUser({
                email: signUp.email,
                password: signUp.password,
                activities: signUp.activites
            })
                .then((res) => {
                    localStorage.setItem("secret_token", res.data.token)
                })
                .then((res) => {
                    window.location.assign(`/home`)
                })
                .catch(err => {
                    setSignUp({ ...signUp, error: "Email or Password incorrect" })


                })

        }
    }


    return (
        <div>
            <BasicNav/>
            <div>
                {global.user && <Redirect to="" />}

                <div className="container h-100 justify-content-center align-items-center center-div" id="signininput">

                    <h4>Log in to start your fun!</h4>

                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange} name="email" />
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" onKeyUp={handleKeyup} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleInputChange} name="password" />
                    {signUp.error ? (<div style={{ fontsize: 12, color: "red" }}>{signUp.error}</div>) : null}
                    </div>

                    <div className="form-group form-check" id="btndiv">
                    <button type="submit" className="btn btn-primary" id="subBtn" onClick={handleFormSubmit}>Log In</button><Link to="/signin/home"></Link>
                    </div>
                    
                    <br/>

                    <small id="switchBtn">Don't have an account? Sign up <a href="/">here</a>.</small>
                </div>
            </div>
        </div>
    )
}

export default SignIn;