import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const username= "Andries";
  return (
    <React.Fragment>
      <Header/>
      <div>App</div>
      <p className='active'>{username}</p>
      <Footer/>
    </React.Fragment>
  )
}

export default App
