import React, {Component} from 'react';
class tasks extends Component{
    render (){
        
        return (
            <div>
                {this.props.tasks.map (e=> 
                    <div key = {e.id}>
                        <div>{e.tittle}</div>
                        <div>{e.description}</div>
                        <div>{e.id}</div>
                        <div>{e.done}</div>
                    </div>
                    
                    
                )}
            </div>
        )       
    }
}
export default tasks