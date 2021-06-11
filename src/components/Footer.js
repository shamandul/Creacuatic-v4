import React, { Component } from 'react'
import logo from '../images/logo.png'
import Instagram from '../images/sociales/029-instagram.svg'
import Twitter from '../images/sociales/008-twitter.svg'
import Youtube from '../images/sociales/001-youtube.svg'
import Facebook from '../images/sociales/036-facebook.svg'
import './styles/footer.css'

class Footer extends Component{

 
    render(){
        
        return(                        
            <div className="contenedor-footer py-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md">
                        <div className="contenedor-logo">
                            <div className="logo"
                            style={{
                                 backgroundImage: `url(${logo})`}}>
                                 </div>
                        </div>
                    </div>
                    <div className="col-12 col-md">
                        <h4 className="px-5">Siguenos en </h4>
                        <div className="d-flex flex-row">
                            <a className="navbar-brand p-3" href="https://www.instagram.com/creacuatic/"><img src={Instagram} width="30" height="30" alt=""/></a>
                            <a className="navbar-brand p-3" href="/"><img src={Twitter} width="30" height="30" alt=""/></a>
                            <a className="navbar-brand p-3" href="/"><img src={Youtube} width="30" height="30" alt=""/></a>
                            <a className="navbar-brand p-3" href="https://www.facebook.com/creacuatic/"><img src={Facebook} width="30" height="30" alt=""/></a>
                        </div>
                    </div>

                </div>
                <div className="row">
                <div className="col-12 px-5">
                    Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from 
                <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
                </div>
                </div>
            </div>
        )
    }
}
export default Footer