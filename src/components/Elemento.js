import React, { Component } from 'react'

class Elemento extends Component{
    render(){
        const {id, titulo,  numero, estado} = this.props

        let color='#d11820', msg='nuevo';
        //let style={ color: '$(color)'}
        switch (estado){
            case 1:
                // estado 1, Proximamente
                color = '#fbdd05';
                msg = 'Proximamente';
                break;
            case 2:
                // estado 2, Empezado
                color = '#05f140';
                msg = 'Abierto';
                break;
            case 3:
                // estado 3, Terminado
                color = '#d11820';
                msg = 'Cerrado';
                break;
            default:
        }
        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" >
                        <a href="/" data-toggle="modal" data-target={`#modal-${id}`}>{titulo}</a>
                      
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