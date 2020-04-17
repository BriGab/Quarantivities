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
        .then(res=> {
            let userAct = res.data[0].activity
            console.log("user activity", userAct)
            setUserCreatedActivity(userAct)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return ( <>
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
                                    {userCreatedActivity.map(userAct => {
                                        return (
                                            <UserTitle 
                                            key={userAct._id}
                                            title={userAct.title} 
                                            href={userAct.href}
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
    </>
    )
}

export default Home;