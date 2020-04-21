import React, {} from "react";
// import Reminder from "./index"
import "./style.css";
// import Toast from "../ReminderToast";


function ReminderButton(props) {

    return (
          
              <button id="reminder-btn" onClick={props.addReminder}>Remind Me!</button>
              
    )}

export default ReminderButton;