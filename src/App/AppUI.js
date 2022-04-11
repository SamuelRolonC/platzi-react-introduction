import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoSearch } from "../TodoSearch/index.js";

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          toggleCompleteTodos,
          deleteTodos,
        }) => (
          <TodoList>
            {/* && could be an AND operator or could be used as "then" to execute 
            an action */}
            {error && <p>Hubo un error.</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedTodos.lenght) && <p>Creá tu primer tarea!</p>}
    
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                onComplete={() => toggleCompleteTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
