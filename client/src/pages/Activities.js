import React, { useState, useEffect, useRef } from "react";
import Nav from '../components/Nav'
import API from "../utils/API";
import DeveloperContext from "../utils/CardContext";
import { CardList, CardListItem } from "../components/CardList";
import { Container, Row } from "react-bootstrap";


function Activity(props) {
  console.log(props)
  const [activity, setActivity] = useState({
    title: "",
    thumbnail: "",
    description: "",
    href: "",
    likes: 0,
    category: ""
  });

  
  const [activities, setActivities] = useState([]);
  const route = props.location.state ? props.location.state.category : 'Cooking'
  
      // if( category === "cooking"){
      //   setActivity([thumbnail], "../../pages/images/cooking.png")
      // } else if ( category === "crafts"){
      //   setActivity([thumbnail], "../../pages/images/crafts.png")
      // } else if ( category === "workouts"){
      //   setActivity([thumbnail], "../../pages/images/fitness.png")
      // } else {
      //   setActivity([thumbnail], "../../pages/images/random.png")
      // };

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
  </>
  )
}
export default Activity;