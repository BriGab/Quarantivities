import React, { useState, useRef, useEffect } from "react";
import Activity from "../../pages/Activities";

export function UserActivity () {

    const [activity, setActivity] = useState({
        title: "",
        thumbnail: "",
        description: "",
        href: "",
        likes: 0,
        category: ""
      });

    const inputEl = useRef(null);

    useEffect(() => {
    if (inputEl.current) {
        inputEl.current.focus();
    }
    Activity.loadActivities();
    }, []);

    function handleFormSubmit(event) {
    event.preventDefault();
    API.setActivity()
        .then(() => {
        Activity.loadActivities();
        })
        .catch(err => console.log(err));
    };

    return(
        <div className="container">
           <input type="input" className="form-control" placeholder="Activity Title" name="title" value={activity.title} ref={inputEl}/>
           <input type="input" className="form-control" placeholder="Description" name="title" value={activity.description} ref={inputEl}/>
           <p>Select a Category: </p>
            <div className="form-group" value={activity.category}>
            <select className="form-control" id="recordNumber">
                <option>Cooking</option>
                <option>Crafts</option>
                <option>Random</option>
                <option>Workouts</option>
            </select>
            </div>
            <button type="submit" onClick={handleFormSubmit}>Add Activity</button>
        </div>
    )
}

export default UserActivity;