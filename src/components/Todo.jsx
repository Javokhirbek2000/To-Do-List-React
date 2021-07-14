import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {
    return (
        <div className="todo">
            <p>{props.name}</p>
            <button onClick = { () => {
                props.onDelete(props.id);
            }}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Todo;