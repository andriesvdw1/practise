import './App.css';
import React from 'react'

function App() {
  const username= "Andries";
  return (
    <React.Fragment>
    <div>App</div>
    <p className='active'>{username}</p>

    </React.Fragment>
  )
}

export default App
