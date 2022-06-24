import React, { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { List } from './components/List';
import './App.css';


function App() {  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <Header />
      <div className='wrapper-add'>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className='todos-list'>
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
