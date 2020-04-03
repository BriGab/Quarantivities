import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Activities from "./components/Activities";
import Nav from "./components/Nav";

// This is just a starting point everything can be changed
function App () {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path={["/","/signup"]} component={SignUp}>
                        <SignUp />   
                    </Route>
                    <Route exact path="/signin" component={SignIn}>
                        <SignIn />
                    </Route>
                    <Route exact Path="/signin/:id" component={Home}>
                        <Home />
                    </Route>
                    {/* <Route exact Path="signin/:id/activites">
                        <Activities />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    )
}

export default App;