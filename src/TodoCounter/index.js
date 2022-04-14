import React from "react";
import { TodoContext } from "../TodoContext";
import "./styles.css";

// Html attributes can be added as variables. 
// const style = {
//     color: 'red'
// }

function TodoCounter() {
    // Using "props" as parameter of TodoCounter I can access "totalTodos" and "completedTodos"
    // with the following line
    // const { totalTodos, completedTodos } = props
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounterTitle">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        // Html attributes can be added in line
        // <h2 style={{
        //     color: 'red'
        // }}>Has completado 2 de 3 TODOs</h2>
    )
}

export { TodoCounter };