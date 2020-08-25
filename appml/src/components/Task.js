import './Task.css'
import React, {Component} from 'react';

class Task extends Component{
     render (){
        const repeat = this.props.task;
         console.log(this.props.task.tittle);
         return <div className ="flexContainer">             
                  {                      
                     <div className = "cuadro" key = {repeat.id} >
                         <button className = "btn">x</button> 
                         <div className = "titulo">{repeat.tittle}</div>
                         <div>{repeat.description}</div>
                         <div>{repeat.id}</div>
                         <div>{repeat.done}  </div>
                         <input type = "checkbox"></input>
                                                
                     </div>
                 }
         </div>
            //  <div>
            //      {
            //         <div key = {e.id}>
            //             <div>{e.tittle}</div>
            //             <div>{e.description}</div>
            //             <div>{e.id}</div>
            //             <div>{e.done}  </div>
            //             <input type = "checkbox"></input>
            //             <button>x</button>
            //         </div>
            //     }
            //  </div>         
     }
 }
 export default Task