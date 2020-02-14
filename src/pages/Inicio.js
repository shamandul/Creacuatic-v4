import React, { Component } from 'react'
import Cabecera from '../components/Cabecera'
import imagen from '../images/sunset-v2.jpg'
import Description from '../components/Description'
import Ultimos from '../components/Ultimos'
import './Styles/inicio.css'
import Footer from '../components/Footer'
//import * as firebase from 'firebase'
import Db from './FirebaseDB'



class Inicio extends Component{
    
    constructor(props){
        super(props)
        this.state={
            data:[],
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
            }],
            nombre: '',
            cursos:[]
        }

    }

    async componentDidMount(){
        await this.fetchCursos()
    }
    fetchCursos = async () =>{
         
          
    }

    render(){
        Db.collection("Cursos")
        .get()
        .then(querySnapshot => {
            this.setState({
                data: querySnapshot.docs.map(doc => doc.data())
            })
            //this.setState.data = data
            
        })
        const elementosCursos = this.state.data.map(elemento => {
            const ele ={}
            ele.texto = elemento.nombre
            ele.numero = elemento.alumnos   
            return ele
        })
        
        const elementosNoticias = this.state.noticias.map(elemento => {
            const ele ={}
            ele.texto = elemento.noticia
            ele.numero = elemento.likes   
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
                elementos = {elementosCursos}
            />
            <Ultimos
                title="Últimas noticias"
                elementos = {elementosNoticias}
            />
            <Footer/>            
            </div>
        )
    }
}
export default Inicio