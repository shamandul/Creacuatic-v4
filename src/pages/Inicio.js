import React, { Component } from 'react'
import Cabecera from '../components/Cabecera'
import imagen from '../images/sunset-v2.jpg'
import Description from '../components/Description'
import Ultimos from '../components/Ultimos'
import UltimosModal from '../components/UltimosModal'
import './Styles/inicio.css'
import Footer from '../components/Footer'
import Navegador from '../components/Navegador'



class Inicio extends Component{
    
    state ={
        cursos:[], 
        noticias: []
    }
    async componentDidMount(){
        await this.obtenerTodosCursos();
        await this.obtenerTodasNoticias();
    }
    /** Obtenemos todos los Cursos */
    obtenerTodosCursos = async () => {
        let res = await fetch('http://localhost:4000/cursos/all', {
	        'mode': 'cors',
	        'headers': {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials" : true ,
        	}
    	});
        let cursos =  await res.json();
        this.setState({
            cursos
        });
    }
        
    /** Obtenemostodas las noticas */
    obtenerTodasNoticias = async () =>{
        let res = await fetch('http://localhost:4000/noticias/all', {
	        'mode': 'cors',
	        'headers': {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials" : true ,
        	}
    	});
        let noticias =  await res.json();
        this.setState({
            noticias
        });
    }


    render(){
        /** preparamos los cursos para el componente */
        const elementosCursos = this.state.cursos.map(elemento => {
            const ele ={}
            ele.titulo = elemento.nombre_curso
            ele.descripcion = elemento.descripcion 
            ele.numero = elemento.alumnos
            ele.estado = elemento.estado
            ele.id = elemento.id
            return ele
        })
        /** preparamos las noticias para el componente */
        const elementosNoticias = this.state.noticias.map(elemento => {
            const ele ={}
            ele.texto = elemento.titular
            ele.numero = elemento.likes   
            ele.id =elemento.id
            return ele
        })
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
                    descripcion="Si estás interesado en aprender el mantenimiento de diferentes especies acuáticas a nivel aficionado o necesitas 
                    formación avanzada sobre temas específicos relacionados con la acuariología, esta es tu página."
                />
                <Ultimos
                    title="Nuevos cursos"
                    elementos = {elementosCursos}
                />
                <UltimosModal
                    elementos = { elementosCursos }
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