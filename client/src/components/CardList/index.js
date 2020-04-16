import React from "react";
import Likes from "../Likes";
import Reminder from "../Reminder"
import "./style.css";

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

//  const imageThumb = () => {
//   if( category === "cooking"){
//   setActivity([description], "../../pages/images/cooking.png")
// } else if ( category === "crafts"){
//   setActivity([description], "../../pages/images/crafts.png")
// } else if ( category === "workouts"){
//   setActivity([description], "../../pages/images/fitness.png")
// } else {
//   setActivity([description], "../../pages/images/random.png")
// }
// }

// const imageThumb = () => {
//   if( categorySelected === "cooking"){
//       newActivity.thumbnail = "../../../pages/images/cooking.png"
//     } 
//     else if ( categorySelected === "crafts"){
//       newActivity.thumbnail = "../../../pages/images/crafts.png"
//     } 
//     else if ( categorySelected === "workouts"){
//       newActivity.thumbnail = "../../../pages/images/fitness.png"
//     } 
//     else if ( categorySelected === "random"){
//       newActivity.thumbnail = "../../../pages/images/random.png"
//     } 
//     };

  return (
      <div className="col-m-3 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={thumbnail} className="card-img-top" alt={title}></img>
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