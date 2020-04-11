import React from "react";
import ActivityCard from "../components/Card";
// import API from "../utils/API";
// import DeveloperContext from "../utils/CardContext";
import SMSForm from "../components/SMS"
function Cooking () {
    // for (var i= 0; i < activity.length; i++){
        return (
            <div className ="container">
                <ActivityCard />
                <SMSForm />
            </div>
        )
    // }
}
export default Cooking;