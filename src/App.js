import './App.css';

function App() {  
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className='wrapper-add'>
        <input type='text' placeholder='Add you need'/>
        <input type='submit' value='ADD' />
      </div>

      <div className='content'>
        <input type='checkbox'/>
        <input type='text' disabled/>
        <input type='submit' value='CLEAR' /> 
      </div>  

      <div className='content'>
        <input type='checkbox'/>
        <input type='text' disabled/>
        <input type='submit' value='CLEAR' /> 
      </div>  
    </div>
  );
}

export default App;
