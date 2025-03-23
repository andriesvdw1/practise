import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import AddTask from './components/AddTask';
function App() {
  
  return (
    <React.Fragment>
      <Header/>
      <AddTask/>
      <Main/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
