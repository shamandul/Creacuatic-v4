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
                        likes={elemento.likes}
                     />
                    )
                })
            }
        </div>
    )
}
export default UltimosList