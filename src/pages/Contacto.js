import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import imagen from '../images/coral.jpg'
import formulario from '../components/FormularioContacto'
import FormularioContacto from '../components/FormularioContacto'

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
                <FormularioContacto></FormularioContacto>
            </React.Fragment>
        )
    }
}
export default Contacto