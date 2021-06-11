import React, { Component } from 'react'
import UltimosList from './UltimosList'

class Ultimos extends Component{

 
    render(){
        
        const {title, elementos} = this.props

        return(
            <div className="margen my-3">
                <h5>{title}</h5>
                <UltimosList
                    elementos={elementos}
                />
            </div>
        )
    }
}
export default Ultimos