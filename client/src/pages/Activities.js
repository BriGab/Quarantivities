import React, { useState, useEffect, useRef } from "react";
import Nav from '../components/Nav'
import API from "../utils/API";
import DeveloperContext from "../utils/CardContext";
import { CardList, CardListItem } from "../components/CardList";
import { Container, Row } from "react-bootstrap";

function Activity(props) {

  const [activity, setActivity] = useState({
    title: "",
    description: "",
    href: "",
    likes: 0,
    category: ""
  });
  
  const [activities, setActivities] = useState([]);
  const route = props.location.state ? props.location.state.category : 'Cooking'

  useEffect(() => {
    function loadActivities(categoryName) {
      API.fetchActivity(categoryName)
        .then(dbactivity => {
          setActivities(dbactivity.data);
        })
        .catch(err => console.log(err))
    }
    loadActivities(route);
  }, [route]);


  return (<>
    <Nav />
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
  </>
  )
}
export default Activity;