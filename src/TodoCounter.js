import React from "react";
import './TodoCounter.css';

// Html attributes can be added as variables. 
// const style = {
//     color: 'red'
// }

function TodoCounter() {
    return (
        <h2 className="TodoCounterTitle">Has completado 2 de 3 TODOs</h2>
        // Html attributes can be added in line
        // <h2 style={{
        //     color: 'red'
        // }}>Has completado 2 de 3 TODOs</h2>
    )
}

export { TodoCounter };