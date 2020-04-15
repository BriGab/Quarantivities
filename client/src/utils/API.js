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
    return axios.post("/api/activities/", actData)
  }, 

  fetchLikeUpdate: function(id) {
    return axios.put("/api/activities" + accessQuery(), {id})
  },

  
  fetchActivity: function(category) {
    console.log(category)

    // return axios.get("/api/activities")
    return axios.get("/api/activities/" + accessQuery(), 
    { params: { category: category } })

      // .then(res => {
      //   console.log()
      //   const activity = res.data;
      //    return activity.map(act => {
      //       return {
      //         title: act.title,
      //         thumbnail: act.thumbnail,
      //         description: act.description,
      //         href: act.href,
      //         likes: act.likes,
      //         category: act.category
      //       };
      //     });
      // });
  },

  logout: function() {
    console.log("got here api")
    localStorage.setItem("secret_token", "")
    console.log(localStorage.getItem("secret_token"))
    return axios.post("/auth/logout");
  },

  status: function() {
    console.log("got here local api")
    return axios.get("/auth/signup")
  }
}