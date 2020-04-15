import React from "react";
import Likes from "../Likes";
import Reminder from "../Reminder"
import "./style.css";
// import { Container, Row, Col } from "react-bootstrap";

//this code would make card, card front, card back no longer necessary

export function CardList({ children }) {
  return <ul className="list-group row" style={{ flexDirection: "row"}}>{children}</ul>;
}

export function CardListItem({
    id,   
    title,
    href,
    description,
    thumbnail,
    likes
}) {

  return (
    // <Container>
      // <Row>

    <div className="col-m-3 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={thumbnail} className="card-img-top" alt={title}></img>
          <p className="card-text">{title}</p>
        </div>
        <div className="flip-card-back">
          <p className="card-text">{description}</p>
          <a href={href} className="card-link">Link to Website</a>
          <Likes id={id} likes={likes}/>
          <Reminder />
        </div>
      </div>
    </div>
      );
    }




    {/* //   <Card className="card flip-card">
    //     <Card.Img/>
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the bulk of
    //         the card's content.
    // </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card> */}