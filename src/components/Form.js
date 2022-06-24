import React from 'react'
import {v4 as uuidv4} from 'uuid'

export const Form = ({input, setInput, todos, setTodos}) => {
    const handleInput = (event) =>  {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }

  return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Add you need' 
            value={input}
            onChange={handleInput}
            required
            />
            <button>ADD</button>
        </form>

  )
}
