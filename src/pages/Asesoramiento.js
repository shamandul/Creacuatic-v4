import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import Description from '../components/Description'
import Footer from '../components/Footer'
import imagen from '../images/fish.jpg'
import './Styles/servicios.css'

class Asesoramiento extends Component{
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Creacuatic"
                    subtitle="Asesoramiento"
                    img = {imagen}
                />
                <Description
                    title="Asesoramiento"
                    descripcion="Nuestro equipo ofrece un amplio servicio de orientación y asesoramiento en todo lo relacionado con los ecosistemas acuáticos. 
                    Podrás consultarnos sobre la realización de proyectos (acuarios, terrarios, etc.), proporcionando datos técnicos, biológicos, temáticos, de equipamiento y materiales necesarios.
                    Además, si tienes problemas en tus instalaciones, nosotros podemos solucionarlos. Si solo quieres mejorarlas, te ofreceremos las mejores opciones."
                >
                </Description>
                
                <Footer/>         
            </React.Fragment>
        )
    }
}

export default Asesoramiento