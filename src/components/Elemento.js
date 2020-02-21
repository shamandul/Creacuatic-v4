import React, { Component } from 'react'

class Elemento extends Component{
    render(){
        const {texto, numero} = this.props
        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" >
                        {texto}
                        <span className="badge badge-primary badge-pill">{numero}</span>
                    </li>
                    
                </ul>
            </React.Fragment>
        )
    }
}
export default Elemento