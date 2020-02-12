import React from 'react'
import Elemento from './Elemento'

function UltimosList(props){
    return(
        <div>
            { props.elementos.map((elemento)=> {
                return(
                    <Elemento
                        elementos={elemento.curso}
                        alumnos={elemento.alumnos}
                     />
                    )
                })
            }
        </div>
    )
}
export default UltimosList