import React, { Component } from 'react'
import {pasarEstadoColor} from '../lib/funciones';

class Elemento extends Component{
    render(){
        const {id, titulo,  numero, estado} = this.props
        const respuesta = pasarEstadoColor(estado);
        const color = respuesta.color;
        const msg = respuesta.msg;
        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" >
                        <a href="/" className="navbar-brand color-link" data-toggle="modal" data-target={`#modal-${id}`}>{titulo}</a>
                      
                        <span style={{
                           backgroundColor: color
                        }}>{msg}</span>
                        
                        <span className="badge badge-primary badge-pill">{numero}</span>
                    </li> 
                </ul>

            </React.Fragment>
        )
    }
}
export default Elemento