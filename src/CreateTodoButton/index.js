import React from "react";
import "./styles.css";

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
            // arrow function because it has an argument. Without arguments I can send 
            // it just as a variable.
            onClick={() => onClickCreateButton("Opening modal...")}
        >
            +
        </button>
    )
}

export { CreateTodoButton };