import React from "react";
import { AppUI } from "./AppUI";

const STORAGEKEY = 'TODOS_V1';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Ver curso de Introducción de React', completed: true },
//   { text: 'Sacar ciudadania Italiana', completed: false }
// ]

// Custom Hook
function useLocalStorage (itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 1000); 
  })


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);

      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  // if a Hook returns up to 2 variables it returns a [],
  // but if returns 3 or more it should returns a {}. Due to conventions
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {
    item: todos, // the var "item" returned by this Hook is named "todos" in App() scope.
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage(STORAGEKEY, []);
  const [searchValue, setSearchValue] = React.useState("");

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

  // Runs after render, it means after every DOM update.
  // With [] as second parameter it runs only after first render.
  // With [variable] as second parameter it runs after first render and
  // each time after that variable change.
  // React.useEffect(() => {
  //   console.log('use effect');
  // }, [totalTodos])

  return (
    <AppUI 
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodos={toggleCompleteTodos}
      deleteTodos={deleteTodos}
      error={error}
    />
  );
}

export default App;
