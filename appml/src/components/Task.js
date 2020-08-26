import './Task.css'
import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Task extends Component{
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: 'gray',
            textDecoration: 'none'
        }
    }
     render (){
        const repeat = this.props.task;        
         return <div style = {this.StyleCompleted()} className ="flexContainer">             
                  {                      
                     <div className = "cuadro" key = {repeat.id} >
                         <button className = "btn" onClick = {this.props.deleteTask.bind(this, repeat.id)}>x</button> 
                         <div className = "titulo">{repeat.tittle}</div>
                         <div>{repeat.description}</div>
                         <div>{repeat.id}</div>
                         <div>{repeat.done}  </div>
                         <input onChange = {this.props.checkDone.bind(this,repeat.id)} className = "checkbox" type = "checkbox"></input>
                                                
                     </div>
                 }
         </div>
     }
 }

 Task.propTypes = {
     task: PropTypes.object.isRequired
 }
 export default Task