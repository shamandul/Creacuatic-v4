import React, { Component } from 'react'
import Cabecera from '../components/Cabecera'
import imagen from '../images/sunset-v2.jpg'
import Description from '../components/Description'
import Ultimos from '../components/Ultimos'

class Inicio extends Component{
    
    constructor(props){
        super(props)
        this.state={
            data:[{
                "id": 1,
                "curso": "Crea tu propio acuario",
                "alumnos": 20,
                "likes": 17
            },{
                "id": 2,
                "curso": "Cuidados en Acuarios",
                "alumnos": 30,
                "likes": 23
            },{
                "id": 3,
                "curso": "Acuarios Agua dulce",
                "alumnos": 100,
                "likes": 99
            }],
            noticias:[{
                "id": 1,
                "noticia": "Marrajo o Maco",
                "likes": 17
            },{
                "id": 2,
                "noticia": "Tiburón zorro",
                "likes": 116
            },{
                "id": 3,
                "noticia": "Caracola Tritón",
                "likes": 135
            }]
        }

    }

    render(){
        
        const elementosNoticias = this.state.noticias.map(elemento => {
            const ele ={}
            ele.curso = elemento.noticia
            ele.alumnos = elemento.likes   
            return ele
        })
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
                elementos = {this.state.data}
            />
            <Ultimos
                title="Últimas noticias"
                elementos = {elementosNoticias}
            />
            
            </div>
        )
    }
}
export default Inicio