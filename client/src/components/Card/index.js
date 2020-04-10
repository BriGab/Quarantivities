import React, { useEffect, useState, useReducer } from "react";
import CardTitleText from "../CardContent"
import API from "../../utils/API";
import "./style.css";

// import CardContext from "../../utils/CardContext";
// import { Link, useParams } from "react-router-dom";
// import { List, ListItem } from "../components/List";


function ActivityCard () {

  const [activity, setActivity] = useState({
    title: "",
    thumbnail: "",
    description: "",
    href: "",
    likes: 0,
    category: ""
  });

  // const [activities, setActivities] = useState([]);
  // const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    loadActivities();
  }, []);
    
  function loadActivities() {
    API.fetchActivity(activity)
    .then(activity => {
      console.log("fetch activity", activity)
      setActivity(...activity, activity);
    })
    .catch(err => console.log(err))
  }

    return (
        
        <div className="card col-sm-3 flip-card">
          <div className="flip-card-inner">
          <div className="flip-card-front">
              <img src="../../public/images/cooking.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <CardTitleText />
            </div>
            <p className="card-text">Will insert each activity title</p>
          </div>
          <div className="flip-card-back">
            <p className="card-text">Will insert each activity description here</p>
              <a href="#" className="card-link">Link to website</a>
          </div>
          </div>
        </div>

      )
};

export default ActivityCard;