import React from 'react'
import { useState } from 'react';
import TaskCard from './TaskCard';
import './TaskList.css';
import BoxCard from './BoxCard';
function TaskList(props) {
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
    <section className='tasklist'>
    <div className='App'>
        <div className="box">
          <p>The current count is: {count}</p>
          <button onClick={handleAdd} className='add'>+</button>
          <button onClick={handleReset} className="reset">Reset</button>
          <button onClick={handleSub}className="subtract">-</button>
        </div>
      </div>
      <p className='active'>{username}</p>
      <h1>Task List ToDo: {props.title} {props.subtitle}</h1>
      <ul>
       <button className='trigger' onClick={() => setShow(!show)}>Toggle show todo list</button> 
      { show && tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
        )) }
      </ul>
      
      <BoxCard result="success">
      <h2>Warnings/ Messages:</h2>
      <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, neque?</p>
      
      </BoxCard>
      
      <BoxCard result ="warning">
        <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, neque?</p>
      </BoxCard>
      <BoxCard result ="alert">
        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium!</p>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, neque?</p>
      </BoxCard>
      </section>
  )
}

export default TaskList