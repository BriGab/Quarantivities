import React from "react";
import ActivityCard from "../components/Card";
import SMSForm from "../components/SMS"
// import { Link, useParams } from "react-router-dom";


function Cooking () {
    return (
        <div className ="container">
            <ActivityCard />
            <SMSForm />
        </div>
    )
}

export default Cooking;