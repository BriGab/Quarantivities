import React from "react";

export function UserActivity () {
    return(
        <div className="container">
           <input type="input" className="form-control" placeholder="Activity Title" name="title"/>
           <input type="input" className="form-control" placeholder="Description" name="title"/>
           <p>Select a Category: </p>
            <div className="form-group">
            <select className="form-control" id="recordNumber">
                <option>Cooking</option>
                <option>Crafts</option>
                <option>Random</option>
                <option>Workouts</option>
            </select>
            </div>
            <button type="submit">Add Activity</button>
        </div>
    )
}

export default UserActivity;