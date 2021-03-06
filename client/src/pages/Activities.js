import React, { useState, useEffect } from "react";
import Nav from '../components/Nav'
import API from "../utils/API";
import Footer from "../components/Footer"
import DeveloperContext from "../utils/CardContext";
import { CardList, CardListItem } from "../components/CardList";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Activities.css"

function Activity(props) {

  const [activity, setActivity] = useState({
    title: "",
    description: "",
    href: "",
    likes: 0,
    category: ""
  });
  
  console.log(setActivity)
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


  return (<div className={route}>
    <Nav page={route}/>

    <Container>
      <Row>
        <div className="container">
          <DeveloperContext.Provider value={activity} >
            <div>
              {!activities.length ? (
               <div style={{ padding: "100px 50%", width: 16, height: 300 }}>
                  <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true" />
               </div>
                ) : (
                  <CardList>
                    {activities.map(act => {
                      return (
                    <Col sm={12} md={6} lg={4} xl={3} key={act._id}>
                        <CardListItem
                          id={act._id}
                          title={act.title}
                          href={act.href}
                          description={act.description}
                          likes={act.likes}
                          category={act.category}
                        />
                    </Col>
                      );
                    })}
                  </CardList>
                )}
            </div>
          </DeveloperContext.Provider>
        </div>
      </Row>
    </Container>
    <Footer />    
  </div>
  )
}
export default Activity;