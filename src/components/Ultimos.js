import React, { Component } from 'react'
import UltimosList from './UltimosList'

class Ultimos extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[{
                "id": 1,
                "curso": "Crea tu propio acuario",
                "alumnos": 20,
                "likes": 17
            },{
                "id": 2,
                "curso": "Cuidados en Acuarios",
                "alumnos": 30,
                "likes": 23
            },{
                "id": 3,
                "curso": "Acuarios Agua dulce",
                "alumnos": 100,
                "likes": 99
            }]
        }

    }
    
    
    render(){
        
        const {title} = this.props
        return(
            <div className="margen">
                <h5>{title}</h5>
                <UltimosList
                    elementos={this.state.data}
                />
            </div>
        )
    }
}
export default Ultimos