import React from "react";

const Todo = ({todo, handleDelete}) => {

    return (
        <li>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
        
    );

};

export default Todo;