import React, { Component } from 'react'
import './styles/description.css'

class Description extends Component{
    render(){
        const {title, descripcion} = this.props
        return(
            <div className="text-left margen">
                <h4>{title}</h4>
                <p>{descripcion}</p>
            </div>
        )
    }
}
export default Description