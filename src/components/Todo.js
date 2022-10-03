import React from "react";


function Todo({todo, onDelete}) {
    return (
        <div className='col-md-3 bg-dark text-white p-3 border border-secondary rounded me-2'>
          <h5 className='fw-bold text-break'>{todo.title}</h5>
          <p className='text-break'>{todo.text}</p>
          <p className='text-end'>{todo.date}</p>
          <button className="btn bg-danger text-white me-3" onClick={() => onDelete(todo.id)}> Delete</button>
        </div>
    )
}

export default Todo;