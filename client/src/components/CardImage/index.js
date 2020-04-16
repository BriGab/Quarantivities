import React from "react";

export function CardImage(category) {
    console.log(category);

    if(category === "Cooking"){

        return (
            <img src="../../../pages/images/cooking.png" className="card-img-top" alt="cooking image"></img>
        ) 
    }

    else if (category === "Crafts"){

        return (
            <img src="../../../pages/images/crafts.png" className="card-img-top" alt="crafts image"></img>
        ) 
    }

    else if (category === "Workouts"){

        return (
            <img src="../../../pages/images/fitness.png" className="card-img-top" alt="workout image"></img>
        ) 
    }

    else if (category === "Random"){

        return (
            <img src="../../../pages/images/random.png" className="card-img-top" alt="random image"></img>
        ) 
    }
  }

  export default CardImage;