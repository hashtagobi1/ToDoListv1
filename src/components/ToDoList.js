import React from 'react';
//Import Components
import Todo from "./Todo";

const ToDoList = ({todos, setTodos,filteredTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo todos=
                    {todos}
                    setTodos={setTodos}
                    key={todo.id}
                    text={todo.text}
                    todo={todo}
                    filteredTodos={filteredTodos}/>
                ))}

            </ul>
        </div>

    );

};

export default ToDoList;