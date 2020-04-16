import axios from "axios";


const accessQuery = () => "?secret_token=" + localStorage.getItem('secret_token')

export default {
  saveUser: function (userData) {
    return axios.post("/auth/signup", userData)
      .then(res => {
          console.log(res)
      })
  },  

  loginUser: function (userData) {
    return axios.post("/auth/login", userData)
  },

  setActivity: function(actData) {
    console.log(actData)
    return axios.post("/api/profile/home" + accessQuery(), actData)
  }, 

  fetchLikeUpdate: function(id) {
    return axios.put("/api/activities" + accessQuery(), {id})
  },

  fetchPopular: function() {
    return axios.get("/api/profile/home")
  },
  
  fetchActivity: function(category) {
    console.log(category)
    return axios.get("/api/activities/" + accessQuery(), 
    { params: { category: category } })
  },

  logout: function() {
    console.log("got here api")
    localStorage.setItem("secret_token", "")
    return axios.post("/auth/logout");
  },

  status: function() {
    console.log("got here local api")
    return axios.get("/auth/signup")
  }
}