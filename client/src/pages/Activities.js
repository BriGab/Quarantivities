import React, {useState, useEffect } from "react";
import ActivityCard from "../components/Card";
import API from "../utils/API";
import DeveloperContext from "../utils/CardContext";
import SMSForm from "../components/SMS"

function Activity () {

    
    const activityArray = [];

    const [activity, setActivity] = useState({
        title: "",
        thumbnail: "",
        description: "",
        href: "",
        likes: 0,
        category: "",
        nav: ""
      });
    
      useEffect(() => {
        loadActivities();
      }, []);
        
      function loadActivities() {
        API.fetchActivity(activity)
        .then(activity => {
          setActivity(...activity, activity);
          console.log("activity array", activity)
        })
        .catch(err => console.log(err))
    }
    // for (var i= 0; i < activity.length; i++){

    // }
    // for (var i= 0; i < activity.length; i++){
        return (
            <div className ="container">
               <DeveloperContext.Provider value={activity}>
                <ActivityCard />
                <SMSForm />
                </DeveloperContext.Provider>
            </div>
            
        )
    // }
}
export default Activity;