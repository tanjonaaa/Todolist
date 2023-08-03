import React, { useEffect, useState } from "react";
import './Todolist.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";


const Todolist = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const updateTodo = (newTodo) => {
        const newTodos = todos;
        const index = todos.indexOf(
            (todos.filter(todo => todo.id == newTodo.id))[0]
        );
        newTodos[index] = newTodo;
        setTodos(newTodos);
    }

    return (
        <div className="todo-list">
            <TodoForm addFunction={addTodo}/>
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            item={todo}
                            updateFunction={updateTodo}
                        />
                    )
                })}
            </ul>
        </div>
    );  
}

export default Todolist;