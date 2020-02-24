import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import imagen from '../images/coral.jpg'

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
            </React.Fragment>
        )
    }
}
export default Contacto