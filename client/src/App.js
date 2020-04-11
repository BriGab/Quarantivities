import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Cooking from "./pages/Cooking";
import Crafts from "./pages/Crafts";
import Workouts from "./pages/Workouts";
import Random from "./pages/Random";
import DeveloperContext from "./utils/CardContext";
import API from "./utils/API";

function App () {

    const activityArray = [];

    const [activity, setActivity] = useState({
        title: "",
        thumbnail: "",
        description: "",
        href: "",
        likes: 0,
        category: ""
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

    return (
        <Router>
            <div>
                <DeveloperContext.Provider value={activity}>
                <Nav />
                <Switch>
                    <Route exact path={["/","/signup"]} component={SignUp} />

                    <Route exact path="/signin" component={SignIn} />

                    <Route exact path="/home" component={Home} />

                    <Route exact path="/cooking" component={Cooking} />

                    <Route exact path="/crafts"component={Crafts} />

                    <Route exact path="/workouts" component={Workouts} />

                    <Route exact path="/random" component={Random} />
                    
                </Switch>
                </DeveloperContext.Provider>
            </div>
        </Router>
    )
}

export default App;