import React, { Component } from 'react'

class Elemento extends Component{
    render(){
        const {elementos, alumnos} = this.props
        return(
            <div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {elementos}
                        <span class="badge badge-primary badge-pill">{alumnos}</span>
                    </li>
                    
                </ul>
            </div>
        )
    }
}
export default Elemento