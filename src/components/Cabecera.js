import React, { Component } from 'react'
import './styles/Cabecera.css'

class Cabecera extends Component{
    

    render(){
        const { title, subtitle, img } = this.props
        return(
            <div className="container-head"
                style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="text-head">
                    <h1 className="text-sm-center text-uppercase text-md-right">{title}</h1>
                    <h3 className="text-sm-center text-md-right">{subtitle}</h3>
                </div>
                
            </div>
        )
    }
}

export default Cabecera