import React from "react";
import Likes from "../Likes";
import Reminder from "../Reminder"
import CardImage from "../CardImage"
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

export function CardList({ children }) {
  return <ul className="list-group row" style={{ flexDirection: "row"}}>{children}</ul>;
}

export function CardListItem({
    id,   
    title,
    href,
    description,
    likes,
    category
}) {

  return (
    <Container className="activity-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <CardImage category={category} />
            <p className="card-text">{title}</p>
          </div>
          <div className="flip-card-back">
            <p className="card-text">{description}</p>
            <a href={href} className="card-link" target="blank">Link to Website</a>
            <Likes id={id} likes={likes}/>
            <Reminder/>
          </div>
        </div>
      </div>
    </Container>
      );
    }