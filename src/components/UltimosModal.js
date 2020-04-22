import React from 'react'
import Modal from './Modal'

function UltimosModal(props){
    return(
        <React.Fragment>
            { props.elementos.map((elemento)=> {
                const key = elemento.id + 10000;
                return(
                        <Modal
                            id = {elemento.id}
                            key= {key.toString()}
                            titulo={elemento.titulo}
                            descripcion={elemento.descripcion}
                            numero={elemento.numero}
                            estado={elemento.estado}
                        />
                    )
                })
            }
        </React.Fragment>
    )
}
export default UltimosModal