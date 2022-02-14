import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import NavBar from "./components/NavBar";


function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <NavBar todos={todos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
