import React, {Component} from 'react'

export default class TaskForm extends Component{
state = {
    tittle: '',
    description: ''
}
onSubmit = event => {    
    console.log(this.state);
    event.preventDefault();
}

onChange = event => {
    this.setState({
        [event.target.name]: event.target.value,        
    })
} //Acá me esta permitiendo diferenciar en los campos de texto y description mas todos los campos que quiera ingresar, solo tengo que agregarle a cada uno la propiedad name = "nombre"

    render(){
        return <div>
            <form onSubmit = {this.onSubmit} >
                <input onChange = {this.onChange} 
                    name = "tittle"
                    value = {this.state.tittle} 
                    type = "text" 
                    placeholder = "Write a Task"/><br/>
                <textarea onChange = {this.onChange} 
                    name = "description"
                    value = {this.state.description} 
                    placeholder = "Write a HomeWork"/><br/>
                <input type= "submit" value = "Add a Task"/>
            </form>
        </div>
    }
}