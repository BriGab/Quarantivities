import axios from "axios";

export default {
  saveUser: function (userData) {
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

    fetchActivity: function(activity) {
      console.log("test")
      return axios
        .get("/api/activities", activity)
        .then(res => {
          console.log(activity);
          const users = res.data;
          console.log("users", users)
          return users.map(users => {
            return {
              title: users.title,
              thumbnail: users.thumbnail,
              description: users.description,
              // href: users.html_url
            };
          });
        });
    }
}