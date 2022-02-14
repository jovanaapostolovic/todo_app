import React from "react";

const NavBar = ({todos}) => {
    return (
        <div>
            <h2>Pending Todos</h2>
            <p>Ukupan broj preostalih zadataka je: {todos.length}</p>
        </div>
    )
};

export default NavBar;