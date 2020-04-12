import React, {Component} from "react";
import SMSForm from "../SMS";
import ReminderButton from "./ReminderButton";
import "./style.css";


class Reminder extends Component {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true }
    }

    triggerAddReminderState = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isAddReminderState: true
        })
    }

    showForm = () => {
        
    }

    render() {
        return (
            <div>
                {this.state.isEmptyState && <ReminderButton addReminder={this.triggerAddReminderState} />}

                {this.state.isAddReminderState && <SMSForm />}
            </div>
        )
    }

}

export default Reminder;