import React from "react";

function Todo(props) {
    return (
        <li>
            {props.item.id} - {props.item.name}
            <button onClick={() => props.deleteTodo(props.item)}>Delete</button>
        </li>
        
    );
}

export default Todo