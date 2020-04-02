import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import imagen from '../images/coral.jpg'
import FormularioContacto from '../components/FormularioContacto'
import Descripcion from "../components/Description"
import Footer from '../components/Footer'

class Contacto extends Component{
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Creacuatic"
                    subtitle="Contacto"
                    img = {imagen}
                />
                <FormularioContacto/>
                <Descripcion
                title=""
                descripcion="Nuestro equipo te responderá cualquier duda en la mayor brevedad posible."></Descripcion>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Contacto