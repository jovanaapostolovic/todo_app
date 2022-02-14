import React, {useState} from "react";

const NewTodoForm = ({addTodo}) => {
    const[todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo("");
    };

    return ( 
        <form style={{marginTop: 20}} onSubmit={handleSubmit}>
            <lable style={{marginRight: 5}}>
                Todo:
            </lable>
            <input type="text" onChange={(e) => setTodo(e.target.value)}/>
            <input style={{marginLeft: 10}} type="submit" value="Add"/>
        </form>
    );
    
};
export default NewTodoForm;