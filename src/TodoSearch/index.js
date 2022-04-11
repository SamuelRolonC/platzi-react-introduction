import React from "react";
import { TodoContext } from "../TodoContext";
import "./styles.css";

function TodoSearch(){
    // Functions starting with React.use... are React Hooks. 
    // If I call setState, the component will be re-rendered.
    // const [searchValue, setSearchValue] = React.useState("");
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);

        // Set the state with the user input
        setSearchValue(event.target.value);
    }

    // If TodoSearch returns an array is no need to use React.Fragment, each element
    // can be separated with a comma. 
    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };