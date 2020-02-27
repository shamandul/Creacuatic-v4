import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import imagen from '../images/coral.jpg'
import FormularioContacto from '../components/FormularioContacto'
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
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Contacto