import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import Description from '../components/Description'
import Footer from '../components/Footer'
import imagen from '../images/proyectos.jpg'
import './Styles/servicios.css'

class Proyectos extends Component{
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Creacuatic"
                    subtitle="Proyectos"
                    img = {imagen}
                />
                <Description
                    title="Proyectos"
                    descripcion="En CREACUATIC damos vida a tus ideas.

                    A partir de nuestros conocimientos sobre la vida acuática, le ofrecemos la mejor solución para llevar a cabo su proyecto"
                >
                </Description>
                
                <Footer/>         
            </React.Fragment>
        )
    }
}

export default Proyectos