import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";



const TodoList = ({todos, handleDelete}) => {
    

    return (
        <ul>
            {todos.length
                ? todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                    />
                ))
            : "You are finished with your todos!"}
            </ul>
    )
}
export default TodoList;