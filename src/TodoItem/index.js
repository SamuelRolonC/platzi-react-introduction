import React from "react";
import "./styles.css";
import { TodoIcon } from "../TodoIcon";

function TodoItem(props) {    
    return (
        <li className="TodoItem">
            {/* If props.completed == false then adds Icon-check--active to className */}
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <TodoIcon iconName={'completed'} />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <TodoIcon iconName={'delete'} />
            </span>
        </li>
    )
}

export { TodoItem };