import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Activity from "../../pages/Activities";
import "./Nav.css"
// import Cooking from "../../pages/Cooking";
// import Crafts from "../../pages/Crafts";
// import Workouts from "../../pages/Workouts";
// import Random from "../../pages/Random";



function Nav() {
  function loadCategory (category) {
    window.location= "/activities"
    console.log(category)
    //need a string of the category passed into the fetch activity function
    //show the activity page with the correct activity when any category is selected
  }
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
        <Link className="navbar-brand" to="/">
          Quarantivities
        </Link>
        </div>

        <div>
         <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/home"
                className={
                window.location.pathname === "/home"
                //   window.location.pathname === "/" || window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                } 
              >
                Home
              </Link>
              </li>
          </ul>
        </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
            <button onClick={()=> {loadCategory("Cooking")}}>Cooking</button>
            </li>
          </ul>
          </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button onClick={()=> {loadCategory("Crafts")}}>Crafts</button>
            </li>
        </ul>
        </div>

        <div>
        <ul className="navbar-nav">
            <li className="nav-item">
              <button onClick={() => {loadCategory("Fitness")}}>Workout</button>
            </li>
        </ul>
        </div>

        <div>
        <ul className="navbar-nav">
            <li className="nav-item">
            <button onClick={() => {loadCategory("Random")}}>Random</button>
            </li>
          </ul>
        </div>
        
      </nav>
    )
}

export default Nav;