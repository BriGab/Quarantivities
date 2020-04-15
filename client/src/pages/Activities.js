import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import DeveloperContext from "../utils/CardContext";
import { CardList, CardListItem } from "../components/CardList";
import { Container, Row, Col } from "react-bootstrap";


function Activity() {

  const [activity, setActivity] = useState({
    title: "",
    thumbnail: "",
    description: "",
    href: "",
    likes: 0,
    category: ""
  });

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivities();
  }, []);

  console.log("useeffect", activities)

      const categoryName = localStorage.getItem("category")

      function loadActivities() {
        API.fetchActivity(categoryName)
        .then(dbactivity => {
          
          // setActivity(...activity, activity);
          setActivities(dbactivity.data);
        })
        .catch(err => console.log(err))
    }

    // const inputEl = useRef(null);

    // useEffect(() => {
    // if (inputEl.current) {
    //     inputEl.current.focus();
    // }
    // loadActivities();
    // }, []);

    // function handleFormSubmit(event) {
    // event.preventDefault();
    // API.setActivity()
    //     .then(() => {
    //     loadActivities();
    //     })
    //     .catch(err => console.log(err));
    // };

  return (
    <Container>
      <Row>
        <div className="container">
          <DeveloperContext.Provider value={activity}>
            <div>
              {!activities.length ? (
                <h1 className="text-center">No Activities to Display</h1>
              ) : (
                  <CardList>
                    {activities.map(activity => {
                      return (
                        <CardListItem
                          key={activity._id}
                          id={activity._id}
                          title={activity.title}
                          href={activity.href}
                          description={activity.description}
                          thumbnail={activity.thumbnail}
                          //instead of storing image, set an if statement for category and display the image dependent upon the category
                          // thumbnail={activity.thumbnail}
                          likes={activity.likes}
                          category={activity.category}
                        />
                      );
                    })}
                  </CardList>
                )}
            </div>
          </DeveloperContext.Provider>
        </div>

      </Row>
    </Container>

  )
}
export default Activity;