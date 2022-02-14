import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from "uuid";
import{TODOS_KEY} from "./settings";

function App() {
  const [todos, setTodos] = useState([]);
  
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (task) => {
    setTodos((prevState) => {
      return [...prevState, {id: uuidv4(), task}];
    });
  };

  useEffect(() => {
    //uvek i tokom 1. renderovanja i svakog update-a
  })

  useEffect(() => {
    //samo tokom 1. renderovanja
  }, [])

  useEffect(() => {
    //kad god se moj todos promeni
  }, [todos])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    setTodos(todos ? todos : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos.length]);


  return (
    <div className="App">
      <NavBar todos={todos}/>
      <TodoList todos={todos} handleDelete={handleDelete}/>
      <NewTodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
