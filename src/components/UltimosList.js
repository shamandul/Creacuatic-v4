import React from 'react'
import Elemento from './Elemento'

function UltimosList(props){
    return(
        <React.Fragment>
            { props.elementos.map((elemento)=> {
                return(
                    <Elemento
                        key={elemento.id}
                        texto={elemento.texto}
                        numero={elemento.numero}
                     />
                    )
                })
            }
        </React.Fragment>
    )
}
export default UltimosList