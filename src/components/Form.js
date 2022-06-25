import React , { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

export const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const handleInput = (event) =>  {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

  return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Add you need' 
            value={input}
            onChange={handleInput}
            required
            />
            <button type='submit'>
                {editTodo ? "OK" : "ADD"}
            </button>
        </form>

  )
}
