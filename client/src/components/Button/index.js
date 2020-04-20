import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

function DeleteButton(props) {
    return (<>
        <div id="delete">
            <i class="fa fa-trash-o" onClick={()=>props.handleDelete(props.id)} />
        </div>
    </>)
}

export default DeleteButton;