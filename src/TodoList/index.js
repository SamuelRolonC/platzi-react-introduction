import React from "react";
import "./styles.css";

function TodoList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export { TodoList };