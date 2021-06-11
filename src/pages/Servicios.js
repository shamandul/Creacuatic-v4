import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Cabecera from '../components/Cabecera'
import Description from '../components/Description'
import Footer from '../components/Footer'
import imagen from '../images/playa.jpg'
import { Link } from 'react-router-dom'
import './Styles/servicios.css'

class Servicios extends Component{
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Creacuatic"
                    subtitle="Servicios"
                    img = {imagen}
                />
                <Description
                    title="ASESORAMIENTO"
                    descripcion="Nuestro equipo ofrece un amplio servicio de orientación y asesoramiento en todo lo relacionado con los ecosistemas acuáticos. 
                    Podrás consultarnos sobre la realización de proyectos (acuarios, terrarios, etc.), proporcionando datos técnicos, biológicos, temáticos, de 
                    equipamiento y materiales necesarios.
                    Además, si tienes problemas en tus instalaciones, nosotros podemos solucionarlos. Si solo quieres mejorarlas, te ofreceremos las mejores opciones."
                >
                    <Link className="enlaces" to="/servicios/asesoramiento"><h4>+Info</h4></Link>
                </Description>
                <Description
                title="PROYECTOS"
                descripcion="En CREACUATIC damos vida a tus ideas.

                Si prefieres que realicemos tu proyecto por ti, simplemente tienes que explicarnos qué es lo que quieres y nosotros lo haremos realidad.">
                    <Link className="enlaces" to="/servicios/proyectos"><h4>+Info</h4></Link>   
                </Description>
                <Description
                title="MANTENIMIENTO"
                descripcion="El mantenimiento de nuestras instalaciones es fundamental para que se vean saludables y bonitas.">
                    <Link className="enlaces" to="/"><h4>+Info</h4></Link>
                </Description>
                <Description
                title="SALUD"
                descripcion="La salud de los organismos que contienen nuestros acuarios es algo fundamental para poder disfrutar de ellos.
                Inquilinos sanos, refleja un acuario sano. Cualquier muestra de estrés o enfermedad, indica la existencia de algún problema.">
                    <Link className="enlaces" to="/"><h4>+Info</h4></Link>
                </Description>
                <Description
                title="SOFTWARE A MEDIDA"
                descripcion="Gracias a la estrecha colaboración con profesionales informáticos, podemos proporcionarte el programa de control o gestión que necesites, 
                adaptándolo a tus necesidades.
                Los programas de gestión específicos cuentan con plan de mantenimiento, recordatorios y avisos para que siempre estés informado.">
                    <Link  className="enlaces" to="/"><h4>+Info</h4></Link>
                </Description>
                <Footer/>         
            </React.Fragment>
        )
    }
}

export default Servicios