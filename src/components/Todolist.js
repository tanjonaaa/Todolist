import React, { useEffect, useState } from "react";
import './Todolist.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";


const Todolist = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = (toDelete) => {
        const newTodos = todos.filter(
            todo => {
                if(todo.id !== toDelete){
                    return todo;
                }
            }
        );
        
        setTodos(newTodos);
    }

    const deleteAllDone = () => {
        const newTodos = todos.filter(
            todo => {
                if(todo.done === false){
                    return todo;
                }
            }
        );
        
        setTodos(newTodos);
    }

    return (
        <div className="todo-list">
            <TodoForm addFunction={setTodos} deleteFunction={deleteAllDone}/>
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            item={todo}
                            deleteFunction={deleteTodo}
                        />
                    )
                })}
            </ul>
        </div>
    );  
}

export default Todolist;