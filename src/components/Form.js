import React , { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
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
            setTodos([...todos, {id: uuidv4(), title: transcript || input, completed: false}]);
            setInput("");
        } else {
            updateTodo(transcript || input, editTodo.id, editTodo.completed);
        }
        resetTranscript();
    };

    const {transcript, resetTranscript, listening, browserSupportsSpeechRecognition} = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true });

  return (
        <form onSubmit={handleSubmit}>
            <p>Microphone: {!browserSupportsSpeechRecognition ? "Browser doesn't support speech recognition." : listening ? 'on' : 'off'} </p>
            <input 
            type='text' 
            placeholder='Add you need' 
            value={transcript || input}
            onChange={handleInput}
            required
            />

            <button type='button' className='task-btn btn-microphone'
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={SpeechRecognition.stopListening}
            onMouseUp={SpeechRecognition.stopListening}>
                <i class="fa-solid fa-microphone"></i>
            </button>
            
            <button type='submit'>
                {editTodo ? "OK" : "ADD"}
            </button>
        </form>

  )
}
