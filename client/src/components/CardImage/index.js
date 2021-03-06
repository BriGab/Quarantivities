import React from "react";
import CookingImg from "./cooking.png"
import CraftsImg from "./crafts.png"
import FitnessImg from "./fitness.png"
import RandomImg from "./random.png"

export function CardImage(category) {
    if(category.category === "Cooking"){
        return (
            <img src={CookingImg} className="card-img-top" alt="cooking"></img>
        ) 
    }
    if (category.category === "Crafts"){
        return (
            <img src={CraftsImg} className="card-img-top" alt="crafts"></img>
        ) 
    }
    if (category.category === "Fitness"){
        return (
            <img src={FitnessImg} className="card-img-top" alt="workout"></img>
        ) 
    }
    if (category.category === "Random"){
        return (
            <img src={RandomImg} className="card-img-top" alt="workout"></img>
        ) 
    }
    else{
        return (
            <img src={RandomImg} className="card-img-top" alt="random"></img>
        ) 
    }
  }

  export default CardImage;