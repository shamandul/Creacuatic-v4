import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navegador extends Component{
render(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/formacion">Formación</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/servicios">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Sobre nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
}

export default Navegador