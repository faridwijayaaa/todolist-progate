import React from 'react'

export const List = ({todos, setTodos, setEditTodo}) => {
    
    const handleCompleted = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
            )
        }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
        
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

  return (
    <div>
        {todos.map((todo) => (
            <li className='content' key={todo.id}>
                <input 
                    type='text'
                    className={`${todo.completed ? "completed" : ""}`}
                    value={todo.title} 
                    onChange={(event) => event.preventDefault()} 
                    disabled
                />
                <div class='btn'>
                    <button className='btn-complete task-btn' onClick={() => handleCompleted(todo)}>
                        <i class="fa-solid fa-circle-check"></i>
                    </button>

                    <button className='btn-edit task-btn' onClick={() => handleEdit(todo)}>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button className='btn-delete task-btn' onClick={() => handleDelete(todo)}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>    
        )

        )}
    </div>
  )
}
