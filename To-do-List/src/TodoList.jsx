import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleOnChange(event) {
        setNewTask(event.target.value);
    }
    function handleClick() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
        
    }
    
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


    return (
        <div className='to-do-container'>
            <h1>To-do List</h1>
            <input type="text" placeholder='Enter New Task' value={newTask} onChange={handleOnChange} 
            onKeyDown={(e) => {
            if (e.key === "Enter") {handleClick();}
            }}
            />
            <button onClick={handleClick} className='add-button'>Add</button>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete Task</button>
                    </li>)
                }
            </ol>
        </div>

        
    );
}
export default TodoList;