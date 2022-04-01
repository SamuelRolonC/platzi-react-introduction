import React from "react";
import "./styles.css";

// Html attributes can be added as variables. 
// const style = {
//     color: 'red'
// }

function TodoCounter({ total, completed }) {
    // Using "props" as parameter of TodoCounter I can access "total" and "completed"
    // with the following line
    // const { total, completed } = props

    return (
        <h2 className="TodoCounterTitle">Has completado {completed} de {total} TODOs</h2>
        // Html attributes can be added in line
        // <h2 style={{
        //     color: 'red'
        // }}>Has completado 2 de 3 TODOs</h2>
    )
}

export { TodoCounter };