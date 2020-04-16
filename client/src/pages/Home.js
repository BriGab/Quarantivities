import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
// import { Link, useParams } from "react-router-dom";
import "../styles/Home.css"
import { Container, Card, Button, Row, Col, ListGroup, alertClicked, Modal, handleshow} from "react-bootstrap";
import UserActivity from "../components/UserActivity";
import { CardList } from "../components/CardList"
import { CardListItem } from "../components/CardList";

function Home () {

    const [popularactivity, setActivities] = useState([]);
    
    useEffect(() => {
        loadPopular();
      }, []);

    function loadPopular() {
        API.fetchPopular()
        .then(popularactivity => {
          setActivities(popularactivity.data);
        })
        .catch(err => console.log(err))
    }

    return ( <>
        <Nav />
        <Container>
            <Row>
                <Col>
                    <Card className="favorites-card">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title className="card-title">TOP 5 MOST LIKED QUARANTIVITIES</Card.Title>
                            {/* <ListGroup defaultActiveKey="#link1" variant="flush,primary">  */}
                            {/* // onClick={handleShow}> */}
                                {/* <ListGroup.Item action href="#link1"> */} 

                                <CardList>
                    {popularactivity.map(popularactivity => {
                        return (
                            <CardListItem
                          key={popularactivity._id}
                          id={popularactivity._id}
                          title={popularactivity.title}
                          href={popularactivity.href}
                          description={popularactivity.description}
                        //   thumbnail={popularactivity.thumbnail}
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