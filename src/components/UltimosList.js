import React from 'react'
import Elemento from './Elemento'

function UltimosList(props){
    return(
        <div>
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
        </div>
    )
}
export default UltimosList