import React from "react";
import "./styles.css";

function CreateTodoButton(props) {
    const onClickCreateButton = () => {
        props.setOpenModal(true);
    }

    return (
        <button 
            className="CreateTodoButton"
            // Events always wait for a function
            // onClick={() => console.log("click")}
            // Even if onClickCreateButton is a function I have to send it inside an 
            // arrow function because it has an argument. Without arguments I can send 
            // it just as a variable.
            onClick={onClickCreateButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton };