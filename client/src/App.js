import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Activities from "./pages/Activities";

function App () {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path={["/","/signup"]} component={SignUp} />

                    <Route exact path="/signin" component={SignIn} />

                    <Route exact path="/home" component={Home} />

                    <Route exact path="/activities" component={Activities} />
                    
                </Switch>
            </div>
        </Router>
    )
}

export default App;