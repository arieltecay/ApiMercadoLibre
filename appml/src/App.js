// Pendiente desde la hora 2:53:42 ==> Fetching Data!!!
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
  addTask = (tittle, description) => {
    const newTask = {
      tittle: tittle,
      description: description,
      id:this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
}

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)    
    this.setState({tasks: newTask})
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }
  render(){    
    return (
      <div className = "App">
        <h1>Tareas a Realizar</h1>  
        <Form addTask = {this.addTask} />      
        <Tasks 
          tasks = {this.state.tasks}
          deleteTask = {this.deleteTask}
          checkDone = {this.checkDone}
        />        
      </div>)    
  }
}
export default App;