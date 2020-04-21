import axios from "axios";
const accessQuery = () => "?secret_token=" + localStorage.getItem('secret_token')

export default {
  // post route to register a new user
  saveUser: function (userData) {
    return axios.post("/auth/signup", userData)
      .then(res => {
          console.log(res)
      })
  },  

  // post route to login a user
  loginUser: function (userData) {
    return axios.post("/auth/login", userData)
  },

  // post route for user adding their own activity
  setActivity: function(actData) {
    console.log(actData)
    return axios.post("/api/profile/home" + accessQuery(), actData)
  }, 

  // get route for user added activities
  getActivity: function() {
    return axios.get("/api/profile/act" + accessQuery())
  },

  // put route to update the likes on each card
  fetchLikeUpdate: function(id) {
    console.log(id)
    return axios.put("/api/activities" + accessQuery(), {id})
  },

  // get route to get the top five liked cards
  fetchPopular: function() {
    return axios.get("/api/profile/home" + accessQuery())
  },
  
  // get route to put all activities on their category pages
  fetchActivity: function(category) {
    console.log(category)
    return axios.get("/api/activities/" + accessQuery(), 
    { params: { category: category } })
  },

  // delete route for a user removing an activity they added 
  deleteActivity: function(id) {
    console.log(id)
    return axios.delete("/api/profile/home" + accessQuery(), {params: {id:id}})
  },

  // post route to logout a user
  logout: function() {
    console.log("got here api")
    localStorage.setItem("secret_token", "")
    return axios.post("/auth/logout");
  },
}