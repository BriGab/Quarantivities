import React, { useEffect, useState } from "react";
import CardFront from "../CardFront"
import CardBack from "../CardBack"
import "./style.css";

function ActivityCard () {
    return (
        <div className="card col-m-3 flip-card">
          <div className="flip-card-inner">
          <div className="flip-card-front">
              <CardFront />
          </div>
          <div className="flip-card-back">
            <CardBack />
          </div>
          </div>
        </div>
      )
};

export default ActivityCard;