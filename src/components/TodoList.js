import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {task: "Vožnja bicikla", id: 0, complete: false},
        {task: "Kuvanje", id: 1, complete: false},
        {task: "Šetnja", id: 2, complete: false}
    ]);

    const addTodo = (task) => {
        setTodos([...todos, {task, id:uuidv4(), complete:false}]);
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h2>Todo lista:</h2>
            {todos.map((todo, index) => {
                return<div key={index}>
                    <li>{todo.task}</li>
                    <button onClick={(e) => handleDelete}>Delete</button>
                </div>
            })}

            <NewTodoForm addTodo={addTodo}/>
        </>
    )
}
export default TodoList;