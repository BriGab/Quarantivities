import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// import Home from "../../pages/Home";
// import Cooking from "../../pages/Cooking";
// import Crafts from "../../pages/Crafts";
// import Workouts from "../../pages/Workouts";
// import Random from "../../pages/Random";

function Nav() {
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
              <Link
                to="/cooking"
                className={
                  window.location.pathname === "/cooking"
                    ? "nav-link active"
                    : "nav-link"
                } 
              >
                Cooking
              </Link>
            </li>
          </ul>
          </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/crafts"
                className={
                  window.location.pathname === "/crafts"
                    ? "nav-link active"
                    : "nav-link"
                } 
              >
                Crafts
              </Link>
            </li>
        </ul>
        </div>

        <div>
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/workouts"
                className={
                  window.location.pathname === "/workouts"
                    ? "nav-link active"
                    : "nav-link"
                } 
              >
                Workouts
              </Link>
            </li>
        </ul>
        </div>

        <div>
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/random"
                className={
                  window.location.pathname === "/random"
                    ? "nav-link active"
                    : "nav-link"
                } 
              >
                Random
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    )
}

export default Nav;