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
                    subtitle="Bienvenido a creacuatic"
                    img = {imagen}
                />
                <Description
                    title="!Bienvenidos a creacuatic!"
                    descripcion="Si estás interesado en aprender el mantenimiento de diferentes especies acuáticas a nivel aficionado o necesitas formación avanzada sobre temas específicos relacionados con la Biología Marina esta es tu página.
                    Somos un equipo multidisciplinar de profesionales apasionados por los ecosistemas acuáticos, trabajando para dar el mejor asesoramiento y formación online."
                />
                <Footer/>         
            </React.Fragment>
        )
    }
}
export default Formacion