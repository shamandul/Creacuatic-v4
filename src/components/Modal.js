import React, { Component } from 'react'
import estadoColor from '../lib/funciones';

class Modal extends Component{
    render(){
        const {id, titulo, descripcion, estado} = this.props
        const respuesta = estadoColor.pasarEstadoColor(estado);
        return(
            <React.Fragment>
                <div className="modal" id={`modal-${id}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content" >
                            <div className="modal-header"style={{
                           backgroundImage: `linear-gradient(to right, ${'#ffffff'}  , ${respuesta.color|| '#246329'})`
                        }}>
                                <h5 className="modal-title">{titulo}</h5>
                                <span className="mx-auto">{respuesta.msg}</span>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{descripcion}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Modal