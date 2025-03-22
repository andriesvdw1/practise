import React from 'react'
import { useState } from 'react';
function TaskList() {
    const [count, setcount] = useState(0);
  const [tasks, setTasks] = useState([{id: 1, name:"learn components", completed: true},
    {id: 2, name:"learn about dynamic content", completed: true},
    {id: 3, name:"learn about state", completed: true},
    {id: 4, name:"learn about other React hooks", completed: false}, 
    {id: 5, name:"learn conditional templates", completed: false},  
  ]);
  const [show, setShow] = useState(true);
  function handleAdd(){
    setcount(count + 1);
  }
  function handleSub(){
    setcount(count - 1);
  }
  function handleReset(){
    setcount(0);
  }
  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id));
  }
  const username= "Andries";
  return (
    <>
    <div className='App'>
        <div className="box">
          <p>The current count is: {count}</p>
          <button onClick={handleAdd} className='add'>+</button>
          <button onClick={handleReset} className="reset">Reset</button>
          <button onClick={handleSub}className="subtract">-</button>
        </div>
      </div>
      <p className='active'>{username}</p>
      <h1>Task List ToDo:</h1>
      <ul>
       <button className='trigger' onClick={() => setShow(!show)}>Toggle show todo list</button> 
      { show && tasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : "pending"}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)}>Remove task</button>
          </li>
        )) }
      </ul>
      </>
  )
}

export default TaskList