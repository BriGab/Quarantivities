import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import "../styles/Home.css"
import { Container, Card, Row, Col } from "react-bootstrap";
import UserActivity from "../components/UserActivity";
import { CardList } from "../components/CardList"
import { CardListItem } from "../components/CardList";

function Home() {

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

    function loadAct() {
        API.getActivity()
            .then(res => {
                let userAct = res.data[0].activity
                setUserCreatedActivity(userAct)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleDelete(id) {
        API.deleteActivity(id)
            .then(res => {
                loadAct()
            })
    }

    return (
        <div id="homeID">
            <Nav />
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12} md={12} lg={12} xl={6}>
                        <Card className="favorites-card overflow-auto">
                            <Card.Body>
                                <Card.Title className="card-title">TOP 5 MOST LIKED QUARANTIVITIES</Card.Title>
                                <CardList className="topFive">
                                    {popularactivity.map(popularactivity => {
                                        return (
                                        <Col sm={12} md={6} lg={4} xl={6} key={popularactivity._id}>
                                            <CardListItem
                                                key={popularactivity._id}
                                                id={popularactivity._id}
                                                title={popularactivity.title}
                                                href={popularactivity.href}
                                                description={popularactivity.description}
                                                likes={popularactivity.likes}
                                                category={popularactivity.category}
                                            />
                                        </Col>
                                        )
                                    })}
                                </CardList>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <div className="planner-card-container">
                        <Card className="planner-card">
                            <Card.Body>
                                <Card.Title>ADD YOUR OWN QUARANTIVITY</Card.Title>
                                <Card.Text>
                                    Found an activity you love and want to do again? Add it here!
                                </Card.Text>
                                <UserActivity />
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Card className="explore-card">
                        <Card.Body className="body">
                            <Card.Title className="card-title">YOUR QUARANTIVITIES</Card.Title> 
                            {!userCreatedActivity.length ? (
                            <h2 className="text-center">You Haven't Added Any Activities</h2>
                            ) : (
                            <CardList>
                                {userCreatedActivity.map(userAct => {
                                    return (
                                <Col sm={12} md={6} lg={4} xl={3} key={userAct._id}>          
                                        <CardListItem
                                            id={userAct._id}
                                            title={userAct.title}
                                            href={userAct.href}
                                            hasDelete={true}
                                            handleDelete={handleDelete}
                                            description={userAct.description}
                                            likes={userAct.likes}
                                            category={userAct.category}
                                        />
                                </Col>
                                    )
                                })}
                            </CardList>
                            )}
                        </Card.Body>
                    </Card>
                </Row>           
            </Container>
            <Footer />    
        </div>
    )
}

export default Home;