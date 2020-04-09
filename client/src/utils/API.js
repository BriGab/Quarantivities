import axios from "axios";

export default {
    saveUser: function (userData) {
        return axios.get("/api", userData);
    }
    ,

    fetchActivity: function(userData) {
      return axios
        .get("/api", userData)
        .then(res => {
          console.log("res", res);
          const users = res.data;
          console.log("users", users)
          return users.map(user => {
            return {
              title: users.title,
              thumbnail: users.thumbnail,
              description: users.description,
              href: users.html_url
            };
          });
        });
    }
}