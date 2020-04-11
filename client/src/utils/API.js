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

  fetchActivity: function() {
    return axios.get("/api/activities" + accessQuery())
      .then(res => {
        console.log()
        const activity = res.data;
        console.log("activities", activity)
         return activity.map(act => {
            return {
              title: act.title,
              thumbnail: act.thumbnail,
              description: act.description,
              href: act.href,
              likes: act.likes,
              category: act.category
            };
          });
      });
  }
}