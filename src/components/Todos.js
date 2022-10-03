import React from "react";
import Todo from "./Todo";

function Todos({todos, onDelete}) {
    return (
        <div className='row g-3 p-2 d-flex justify-content-center mt-2'>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Todos;