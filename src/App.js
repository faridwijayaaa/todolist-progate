import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { List } from './components/List';
import './App.css';


function App() {  
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <Header />
      <div className='wrapper-add'>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div className='todos-list'>
        <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>

      <h5 className='author'>by: Farid Wijaya</h5>
    </div>
  );
}

export default App;
