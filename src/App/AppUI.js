import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { Modal } from "../Modal/index.js";
import { ThreeDots } from "../ThreeDots/index.js";

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
            openModal,
            setOpenModal
          }) => (
            <React.Fragment>
              <TodoList>
                {/* && could be an AND operator or could be used as "then" to execute 
                an action */}
                {error && <p>Hubo un error.</p>}
                {loading && (
                  <ThreeDots />
                )}
                {(!loading && searchedTodos.lenght) && <p>Creá tu primer tarea!</p>}
        
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

              {openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
              
              <CreateTodoButton 
                setOpenModal={setOpenModal}
              />
            </React.Fragment>
          )}
      </TodoContext.Consumer>
    </React.Fragment>
  );
}

export { AppUI };
