import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const onClickCreateButton = (msg) => {
        alert(msg);
    }

    return (
        <button 
            className="CreateTodoButton"
            // Events always wait for a function
            // onClick={() => console.log("click")}
            // Even if onClickCreateButton is a function I have to send it inside an 
            // arrow function.
            onClick={() => onClickCreateButton("Opening modal...")}
        >
            +
        </button>
    )
}

export { CreateTodoButton };