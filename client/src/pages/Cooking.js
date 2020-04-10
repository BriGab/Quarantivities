import React, { useEffect, useState } from "react";
import ActivityCard from "../components/Card";

import API from "../utils/API";
import DeveloperContext from "../utils/CardContext";

function Cooking () {
    // for (var i= 0; i < activity.length; i++){
        return (
            <div className ="container">
                <ActivityCard />
            </div>
        )
    // }

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