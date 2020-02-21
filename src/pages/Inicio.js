import React, { Component } from 'react'
import Cabecera from '../components/Cabecera'
import imagen from '../images/sunset-v2.jpg'
import Description from '../components/Description'
import Ultimos from '../components/Ultimos'
import './Styles/inicio.css'
import Footer from '../components/Footer'
import Db from './FirebaseDB'



class Inicio extends Component{
    
    state ={
        data:[], 
        noticias: []
    }
    async componentDidMount(){
        await this.obtenerTodosCursos()
        await this.obtenerTodasNoticias()
    }
    /** Obtenemos todos los Cursos */
   async obtenerTodosCursos(){
        await Db.collection("Cursos")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            this.setState ({
                data
            })
        })
    }
    /** Obtenemostodas las noticas */
    async obtenerTodasNoticias(){
       await Db.collection("Noticias")
       .get()
       .then(querySnapshot => {
           let data = querySnapshot.docs.map(doc =>({ 
            id: doc.id,
            ...doc.data()} ))
           console.log(data);
           
           this.setState ({
               noticias: data
    
           })
       })
   }

    render(){
        /** preparamos los cursos para el componente */
        const elementosCursos = this.state.data.map(elemento => {
            const ele ={}
            ele.texto = elemento.nombre
            ele.numero = elemento.alumnos   
            ele.id = elemento.id
            return ele
        })
        /** preparamos las noticias para el componente */
        const elementosNoticias = this.state.noticias.map(elemento => {
            const ele ={}
            ele.texto = elemento.noticia
            ele.numero = elemento.likes   
            ele.id =elemento.id
            return ele
        })
        return(
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}
export default Inicio