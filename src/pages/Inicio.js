import React, { Component } from 'react'
import Cabecera from '../components/Cabecera'
import imagen from '../images/sunset-v2.jpg'
import Description from '../components/Description'
import Ultimos from '../components/Ultimos'

class Inicio extends Component{
    

    render(){
        return(
            <div>
            <Cabecera
                title="Cracuatic"
                subtitle="Bienvenido a creacuatic"
                img = {imagen}
            />
            <Description
                title="!Bienvenidos a creacuatic!"
                descripcion="Si estás interesado en aprender el mantenimiento de diferentes especies acuáticas a nivel aficionado o necesitas formación avanzada sobre temas específicos relacionados con la Biología Marina esta es tu página.
                Somos un equipo multidisciplinar de profesionales apasionados por los ecosistemas acuáticos, trabajando para dar el mejor asesoramiento y formación online."
            />
            <Ultimos
                title="Nuevos cursos"
            />
            
            
            </div>
        )
    }
}
export default Inicio