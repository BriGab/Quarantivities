import React from "react";
import Likes from "../Likes";
import Reminder from "../Reminder"
import CardImage from "../CardImage"
import DeleteButton from '../Button';
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";


export function CardList({ children }) {
  return <ul className="list-group row" style={{ flexDirection: "row" }}>{children}</ul>;
}

function CardListItem({
  id,
  title,
  href,
  description,
  likes,
  category,
  hasDelete,
  handleDelete
}) {

  const checkCategory = (categoryType) => {
    console.log(categoryType)
    if (categoryType === "Cooking") {
      return "cooking-activity"
    } else if (categoryType === "Fitness") {
      return "fitness-activity"
    } else if (categoryType === "Crafts") {
      return "crafting-activity"
    } else if (categoryType === "Random") {
      return "random-activity"
    }
  };

  return (
    <Container className="activity-card-container">
      
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <CardImage category={category} />
            <p className="card-text">{title}</p>
          </div>
          <div className="card-container">
            <div className={`flip-card-back ${checkCategory(category)}`}>
              <p className="card-text">{description}</p>
              {hasDelete && <DeleteButton handleDelete={handleDelete} id={id}/>}
              <a href={href} className="card-link" target="blank">Link to Website</a>
              <Likes id={id} likes={likes} />
              <Reminder title={title}/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
CardListItem.defaultProps = {
  hasDelete: false,
  handleDelete: () =>{}
}

export { CardListItem };