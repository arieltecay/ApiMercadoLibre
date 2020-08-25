// Pendiente desde la hora 2:31:07
import React, { Component } from 'react';
import './App.css';
import tasks from "./sample/tasks.json"
import Tasks from './components/Tasks.js'
import Form from './components/TaskForm'
//  console.log(tasks.map(e => e.id ));

class App extends Component{    
  state = {
    tasks: tasks
  }  
  render(){
    
    return (
      <div className = "App">
        <h1>Tareas a Realizar</h1>  
        <Form />      
        <Tasks tasks = {this.state.tasks}/>        
      </div>)
    
  }
}
export default App;