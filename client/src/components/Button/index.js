import React, { useState } from "react";
import "./style.css";

function DeleteButton(props) {

    const [isShown, setIsShown] = useState(false)

    return (<>
        <div id="delete">
            <i className="fa fa-trash-o fa-2x"  onMouseEnter={() => setIsShown(true)}onMouseLeave={() => setIsShown(false)} onClick={()=>props.handleDelete(props.id)} />
        </div>
        {isShown && (
        <div>
          Delete your activity
        </div>
      )}
    </>)
}

export default DeleteButton;