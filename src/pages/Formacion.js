import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import Description from '../components/Description'
import Footer from '../components/Footer'
import imagen from '../images/aula.jpg'

class Formacion extends Component{
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Creacuatic"
                    subtitle="Formación"
                    img = {imagen}
                />
                <Description
                    title="Formación en Creacuatic"
                    descripcion="En CREACUATIC ofrecemos cursos online de formación en bilogía marina, acuariofilia y acuicultura."
                />
                <Description
                title="SUSCRIPCIÓN:"
                descripcion="Contenidos extra. Títulos certificados. Ofertas didácticas especiales."/>
                <Footer/>         
            </React.Fragment>
        )
    }
}
export default Formacion