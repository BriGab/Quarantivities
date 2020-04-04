import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Activities from "./componentss/Activities";
import Nav from "./components/Nav";
import Cooking from "./pages/Cooking";
import Crafts from "./pages/Crafts";
import Workouts from "./pages/Workouts";
import Random from "./pages/Random";

// This is just a starting point everything can be changed
function App () {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path={["/","/signup"]} component={SignUp} />

                    <Route exact path="/signin" component={SignIn} />

                    <Route exact path="/signin/:id" component={Home} />

                    <Route exact path="/cooking" component={Cooking} />

                    <Route exact path="/crafts"component={Crafts} />

                    <Route exact path="/workouts" component={Workouts} />

                    <Route exact path="/random" component={Random} />

                    {/* <Route exact path="signin/:id/activites">
                        <Activities />
                    </Route> */}
                    
                </Switch>
            </div>
        </Router>
    )
}

export default App;