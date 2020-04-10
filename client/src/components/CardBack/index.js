import React, { useContext } from "react";
import DeveloperContext from "../../utils/CardContext";

function CardBack() {

    const { href, description } = useContext(DeveloperContext);
    
    return (
        <>
        <p className="card-text">{description}</p>
        <a href={href} className="card-link">Link to Website</a>
        </>
    )
}

export default CardBack;