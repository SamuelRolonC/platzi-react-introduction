import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const onComplete = () => {
        alert('You completed ' + props.text + ' task.');
    };
    const onDelete = () => {
        alert('You deleted ' + props.text + ' task.');
    };
    
    return (
        <li className="TodoItem">
            {/* If props.completed == false then adds Icon-check--active to className */}
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                /
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem };