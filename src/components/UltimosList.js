import React from 'react'
import Elemento from './Elemento'

function UltimosList(props){
    return(
        <React.Fragment>
            { props.elementos.map((elemento)=> {
                return(
                    <Elemento
                        key={elemento.id}
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
export default UltimosList