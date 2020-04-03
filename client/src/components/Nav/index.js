import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Cooking from "../../pages/Cooking";
import Crafts from "../../pages/Crafts";
import Workouts from "../../pages/Workouts";
import Random from "../../pages/Random";

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
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                } component={Home}
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
                to="/"
                className={
                  window.location.pathname === "/cooking"
                    ? "nav-link active"
                    : "nav-link"
                } component={Cooking}
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
                to="/"
                className={
                  window.location.pathname === "/crafts"
                    ? "nav-link active"
                    : "nav-link"
                } component={Crafts}
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
                to="/"
                className={
                  window.location.pathname === "/workouts"
                    ? "nav-link active"
                    : "nav-link"
                } component={Workouts}
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
                to="/"
                className={
                  window.location.pathname === "/random"
                    ? "nav-link active"
                    : "nav-link"
                } component={Random}
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