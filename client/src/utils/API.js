import axios from "axios";

export default {
    saveUser: function (userData) {
        console.log(userData)
        return axios.post("/auth/signup", userData)
        .then(res => {
            console.log(res)
        })
    },   
    loginUser: function(userData) {
        console.log(userData)
        return axios.post("/auth/login", userData)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("secret_token", res.data.token)
        })
        
    },
}