// Pendiente desde la hora 1:30:00
import React, { useState, Component } from 'react';
import './App.css';
import tasks from "./sample/tasks.json"
import Tasks from './components/tasks.js'
//  console.log(tasks.map(e => e.id ));

class App extends Component{  
  
  state = {
    tasks: tasks
  }  
  render(){
    
    return (
      <div className="App">
        <h1>Tareas a Realizar</h1>        
        <Tasks tasks = {this.state.tasks}/>        
      </div>)
    
  }
}
export default App;