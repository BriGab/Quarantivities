import React, { useContext } from "react";
import DeveloperContext from "../../utils/CardContext";

function CardTitleText() {

    const { title, thumbnail, href, description } = useContext(DeveloperContext);
    
    return (
        <div className="card">
            <div>
                Image: {thumbnail}
            </div>
            <div>
                Title: {title}
            </div>
            <div>
                URL: {href}
            </div>
            <div>
                Description: {description}
            </div>
        </div>
    )
}

export default CardTitleText;