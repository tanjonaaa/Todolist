import React, { useEffect, useState } from "react";
import './Todo.css';

const Todo = ({ item, updateFunction }) => {
    const [id, setId] = useState(item.id);
    const [name, setName] = useState(item.title);
    const [isDone, setIsDone] = useState(item.done);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(
        () => {
            updateFunction(
                {
                    id: id,
                    title: name,
                    done: isDone
                }
            );
        }, [name, isDone]
    );

    const updateIsDone = (e) => {
        e.stopPropagation();
        setIsDone(!isDone);
    }

    const editTodo = (e) => {
        e.stopPropagation();
        const trimmed = name.trim();
        if (trimmed) {
            setIsEditing(false);
        }
    }

    if (!isEditing) {
        return (
            <li className={isDone ? "done" : ""}>
                {name} -
                <input
                    type="checkbox"
                    defaultChecked={isDone}
                    onChange={updateIsDone}
                />
                <button onClick={
                    e => {
                        e.stopPropagation();
                        setIsEditing(true);
                    }
                }>
                    Modifier
                </button>
                {/* <button
                    onClick={e => {
                        deleteFunction(item.id)
                    }}
                >
                    Supprimer
                </button> */}
            </li>
        );
    } else {
        return (
            <li>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="checkbox"
                    defaultChecked={isDone}
                    onChange={(e) => setIsDone(!isDone)}
                />
                <button
                    onClick={editTodo}
                >
                    Enregistrer
                </button>
            </li>
        )
    }
}

export default Todo;