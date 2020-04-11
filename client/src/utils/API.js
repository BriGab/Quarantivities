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

    fetchActivity: function(activity) {
      console.log("test")
      return axios
        .get("/api/activities/" + accessQuery())
        .then(res => {
          console.log(activity)
          const users = res.data;
          console.log("users", users)
          return users.map(users => {
            return {
              title: users.title,
              thumbnail: users.thumbnail,
              description: users.description,
              href: users.href,
              likes: users.likes,
              category: users.category
            };
          });
        });
    }
}