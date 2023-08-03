import React, { useState } from "react";
import './TodoForm.css';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

const TodoForm = ({ addFunction,  deleteFunction}) => {
    const [value, setValue] = useState("");

    const insertTodo = (e) => {
        e.stopPropagation();
        if (value.trim()) {
            addFunction(
                {
                    id: uuidv4(),
                    title: value.trim(),
                    done: false
                }
            );
            setValue("");
        }
    }

    return (
        <div className="todo-form">
            <input
                type="text"
                placeholder="Votre Todo..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={insertTodo}
            >
                Ajouter
            </button>
        </div>
    );
}

export default TodoForm;