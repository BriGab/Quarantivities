import axios from "axios";
const accessQuery = () => "?secret_token=" + localStorage.getItem('secret_token')

export default {
  saveUser: function (userData) {
    return axios.post("/auth/signup", userData)
      .then(res => {
          // console.log(res)
      })
        
  },  
  loginUser: function (userData) {
    return axios.post("/auth/login", userData)
  },


  fetchLikeUpdate: function(id) {
    console.log("hello", id);
    return axios.put("/api/activities", {id})

  },

  fetchActivity: function(category) {
    console.log(category)

    // return axios.get("/api/activities")
    return axios.get("/api/activities/" + accessQuery(), { params: { category: category } })

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
  }
}