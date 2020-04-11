import React, { useState } from "react";
import API from "../utils/API"
import { Link, Redirect } from "react-router-dom";

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
                    localStorage.setItem("secret_token", res.data.token)
                })
                // .then((res)=>{
                //     console.log(res)
                //     // window.location.assign(`/signin/${id}`)
                // })
                .catch(err => console.log(err))
        }
    }


    return (
        <div>
            {/* {global.user && <Redirect to="" />} */}
            <h1>Log In</h1>
            <input type="email" placeholder="email Here" onChange={handleInputChange} name="email"></input>
            <input type="text" placeholder="Password Here" onChange={handleInputChange} name="password"></input>
            <button type="submit" onClick={handleFormSubmit}>Button</button><Link to="/signin/home"></Link>

        </div>
    )
}

export default SignIn;