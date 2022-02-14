import React from "react";

const Todo = ({todo, handleDelete}) => {
    handleDelete(todo.id);

    const handleDeleteClick = () => {
        handleDelete(todo.id);
    }

    return (
        <div>
            <li>{todo.task}</li>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )

}

export default Todo;