import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
// import { Link, useParams } from "react-router-dom";
import "../styles/Home.css"
import { Container, Card, Button, Row, Col, ListGroup, alertClicked, Modal, handleshow} from "react-bootstrap";
import { UserActivity, UserTitle } from "../components/UserActivity";
import { CardList } from "../components/CardList"
import { CardListItem } from "../components/CardList";

function Home () {

    const [popularactivity, setActivities] = useState([]);
    const [userCreatedActivity, setUserCreatedActivity] = useState([]);

    useEffect(() => {
        loadPopular();
        loadAct();
      }, []);

    function loadPopular() {
        API.fetchPopular()
        .then(popularactivity => {
          setActivities(popularactivity.data);
        })
        .catch(err => console.log(err))
    }
    
    function loadAct () {
        API.getActivity()
        .then(userCreatedActivity=> {
            setUserCreatedActivity(userCreatedActivity.data)
            console.log("user activity", userCreatedActivity)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return ( 
    <div id="homeID">
        <Nav />
        <Container>
            <Row>
                <Col>
                    <Card className="favorites-card">
                        <Card.Body>
                            <Card.Title className="card-title">TOP 5 MOST LIKED QUARANTIVITIES</Card.Title>
                                <CardList className="topFive">
                                    {popularactivity.map(popularactivity => {
                                        return (
                                            <CardListItem
                                                key={popularactivity._id}
                                                id={popularactivity._id}
                                                title={popularactivity.title}
                                                href={popularactivity.href}
                                                description={popularactivity.description}
                                                likes={popularactivity.likes}
                                                category={popularactivity.category}
                                            />
                                            )
                                        })}
                                </CardList>
                        </Card.Body>
                    </Card>
                </Col>

             <Col>
                 <Card className="planner-card">
                    <Card.Body>
                        <Card.Title>ADD YOUR OWN ACTIVITY</Card.Title>
                        <Card.Text>
                                Found an activity you love and want to do again? Add it here! 
                        </Card.Text>
                        <UserActivity />
                        <ListGroup> 
                        {/* <ListGroup defaultActiveKey="#link1" variant="flush,primary">  */}
                        <div>
                            {!userCreatedActivity.length ? (
                                <h2 className="text-center">You havent Added Any Activities</h2>
                                ) : (
                                 <ListGroup.Item>
                                    {userCreatedActivity.map(userCreatedActivity => {
                                        return (
                                            <UserTitle 
                                            key={userCreatedActivity._id}
                                            title={userCreatedActivity.title} 
                                            href={userCreatedActivity.href}
                                            />
                                            )
                                })}
                                </ListGroup.Item>
                            )}
                        </div>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Home;