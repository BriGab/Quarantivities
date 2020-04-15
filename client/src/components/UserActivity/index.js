import React, { useState, useRef, useEffect } from "react";
import Activity from "../../pages/Activities";
import API from "../../utils/API";

export function UserActivity () {

    const [activity, setActivity] = useState({
        title: "",
        thumbnail: "n/a",
        description: "",
        href: "n/a",
        likes: 0,
        category: ""
      });
    
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("button clicked")
        const { title, description, category } = event.target;
        // if (event.title && event.description && event.category) {
            // console.log("all params met")
            API.setActivity({activity, 
                title: title,
                description: description,
                category: category
            })
            .then(res => {
                console.log("res", res)
            })
            .catch(err => console.log(err))
        // }
    }

    return(
        <form>
        {/* <form action="/api/activities/" method="POST"> */}
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