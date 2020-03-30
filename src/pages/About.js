import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import Description from '../components/Description'
import Footer from '../components/Footer'
import imagen from '../images/pez-sierra.jpg'
import './Styles/servicios.css'

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Creacuatic"
                    subtitle="Sobre nosotros"
                    img = {imagen}
                />
                <Description
                    title="Sobre nosotros"
                    descripcion="Somos un equipo multidisciplinar de profesionales apasionados por
                     los ecosistemas acuáticos, trabajando para dar el mejor asesoramiento y formación online."
                >
                </Description>
                
                <Footer/>         
            </React.Fragment>
        )
    }
}

export default About