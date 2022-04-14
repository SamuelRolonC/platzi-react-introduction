import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();
const STORAGEKEY = 'TODOS_V1';

// Runs after render, it means after every DOM update.
// With [] as second parameter it runs only after first render.
// With [variable] as second parameter it runs after first render and
// each time after that variable change.
// React.useEffect(() => {
//   console.log('use effect');
// }, [totalTodos])

function TodoProvider(props) {
    const {
        item: todos, // the var "item" returned by this Hook is named "todos" in App() scope.
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage(STORAGEKEY, []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    // !!todo.completed is a short way of todo.completed == true 
    // using double negation.
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    let searchedTodos = [];
    
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
    
        return todoText.includes(searchText);
        })
    }
    
    
    
    const toggleCompleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos); // Triggers re-render
    }
    
    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos); // Triggers re-render
    }

    // console.log("TodoContext");
    // console.log(setSearchValue);

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }