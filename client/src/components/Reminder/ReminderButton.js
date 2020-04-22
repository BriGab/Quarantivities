import React, {} from "react";
import "./style.css";


function ReminderButton(props) {

    return (
          
              <button  className="btn reminder btn-form btn-outline-secondary btn-sm" onClick={props.addReminder}>Remind Me!</button>
              
    )}

export default ReminderButton;