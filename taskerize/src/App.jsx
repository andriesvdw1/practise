import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const [count, setcount] = useState(0);
  const [tasks, setTasks] = useState([{id: 1, name:"learn components", completed: true},
    {id: 2, name:"learn about dynamic content", completed: true},
    {id: 3, name:"learn about state", completed: true},
    {id: 4, name:"learn about other React hooks", completed: false}  
  ]);
  function handleAdd(){
    setcount(count + 1);
  }
  function handleSub(){
    setcount(count - 1);
  }
  function handleReset(){
    setcount(0);
  }
  const username= "Andries";
  return (
    <React.Fragment>
      <Header/>
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
        { tasks.map(({id, name, completed}) => (
          <li key={id}>
            <span>{id} - {name}</span>
            <button>Remove task</button>
          </li>
        )) }
      </ul>
      <Footer/>
    </React.Fragment>
  )
}

export default App
