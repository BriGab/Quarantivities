import React from "react";
import Likes from "../Likes";
import Reminder from "../Reminder"
import CardImage from "../CardImage"
import "./style.css";

export function CardList({ children }) {
  return <ul className="list-group row" style={{ flexDirection: "row"}}>{children}</ul>;
}

export function CardListItem({
    id,   
    title,
    href,
    description,
    // thumbnail,
    likes,
    category
}) {

  return (
      <div className="col-m-3 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {/* <img src={thumbnail} className="card-img-top" alt={title}></img> */}
            <CardImage category={category} />
            <p className="card-text">{title}</p>
          </div>
          <div className="flip-card-back">
            <p className="card-text">{description}</p>
            <a href={href} className="card-link" target="blank">Link to Website</a>
            <Likes id={id} likes={likes}/>
            <Reminder />
          </div>
        </div>
      </div>
      );
    }