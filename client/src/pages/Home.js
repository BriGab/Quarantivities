import React from "react";
import Nav from "../components/Nav";
// import { Link, useParams } from "react-router-dom";
import "../styles/Home.css"
import { Container, Card, Button, Row, Col, ListGroup, alertClicked, Modal, handleshow} from "react-bootstrap";
import { UserActivity, UserTitle } from "../components/UserActivity";

function Home () {

    return ( <>
        <Nav />
        <Container>
            <Row>
                <Col>
                    <Card className="favorites-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title className="card-title">TOP LIKED ACTIVITIES</Card.Title>
                            {/* <ListGroup defaultActiveKey="#link1" variant="flush,primary">  */}
                            {/* // onClick={handleShow}> */}
                                {/* <ListGroup.Item action href="#link1"> */}
                                    {/* Yoga */}
                                {/* </ListGroup.Item> */}
                                        {/* <Modal show={show} onHide={handleClose}/>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                        <Modal.Footer></Modal.Footer> */}
                                    {/* <ListGroup.Item action href="#link2"> */}
                                        {/* Acai Bowl */}
                                {/* </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Craft
                                </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Netflix
                                </ListGroup.Item> */}
                                    {/* <ListGroup.Item>
                                    This one is a button
                                </ListGroup.Item> */}
                            {/* </ListGroup> */}
                                {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>

                    <Col>
                        <Card className="planner-card">
                            <Card.Body>
                                <Card.Title>ADD YOUR OWN ACTIVITY</Card.Title>
                                <Card.Text>
                                    Found your own activity you love and want to do again? Add it here! 
                            </Card.Text>
                            <UserActivity />
                            
                            <ListGroup defaultActiveKey="#link1" variant="flush,primary"> 
                                <ListGroup.Item action href="#link1">
                                    {/* <UserTitle /> */}
                                    Activity
                                </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                    Acai Bowl
                                </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                    Craft
                                </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                    Netflix
                                </ListGroup.Item>
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