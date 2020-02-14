import React, { Component } from 'react'
import logo from '../images/logo.png'
import './styles/footer.css'

class Footer extends Component{

 
    render(){
        
        return(
            <div className="contenedor-footer py-3">
                <div className="row">
                    <div className="col12 col-md">
                        <div className="contenedor-logo">
                            <div className="logo"
                            style={{
                                 backgroundImage: `url(${logo})`}}></div>
                        </div>
                    </div>
                    <div className="col12 col-md">
                        <p>Siguenos aqui</p>
                    </div>
                    <div className="col12 col-md">
                        <p>redes sociales </p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Footer