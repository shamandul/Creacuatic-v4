import React, { Component } from 'react'
import './styles/description.css'

class Description extends Component{
    render(){
        const {title, descripcion} = this.props
        return(
            <div className="margen my-3 d-flex flex-row align-items-center justify-content-between">
                <div className="text-left ">
                    <h4>{title}</h4>
                    <p>{descripcion}</p>
                </div>
                {this.props.children}
            </div>
            
        )
    }
}
export default Description