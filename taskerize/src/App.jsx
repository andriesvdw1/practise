import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

function App() {
  
  return (
    <React.Fragment>
      <Header/>
      <TaskList title="Random" subtitle="subtitle"/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
