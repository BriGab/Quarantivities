import React, { useState, useRef, useEffect } from "react";
import Activity from "../../pages/Activities";
import API from "../../utils/API";

export function UserActivity () {
    
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("button clicked")
        console.log("Event Target", event.target);

        let newActivity = {
            title: document.getElementById("titlesubmit").value,
            thumbnail: "test",
            description: document.getElementById("dessubmit").value, 
            href: "Href Test",
            likes: 0,
            category: document.getElementById("categorysubmit").value
        }
            API.setActivity(newActivity)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => console.log(err))
    }

    return(
        <form>
           <input type="text" className="form-control" placeholder="Activity Title" id="titlesubmit" name="title" />
           <input type="text" className="form-control" placeholder="Description" name="title" id="dessubmit" />
           <p>Select a Category: </p>
            <div className="form-group">
            <select className="form-control" id="categorysubmit">
                <option>Cooking</option>
                <option>Crafts</option>
                <option>Random</option>
                <option>Workouts</option>
            </select>
            </div>
            <button type="submit" onClick={handleFormSubmit}>Add Activity</button>
        </form>
    )
}

export default UserActivity;