import React, { Component } from 'react'

class Elemento extends Component{
    render(){
        const {texto, numero} = this.props
        return(
            <div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {texto}
                        <span class="badge badge-primary badge-pill">{numero}</span>
                    </li>
                    
                </ul>
            </div>
        )
    }
}
export default Elemento