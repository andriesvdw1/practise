import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const [count, setcount] = useState(0);
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

      <Footer/>
    </React.Fragment>
  )
}

export default App
