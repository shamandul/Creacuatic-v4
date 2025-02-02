import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Formacion from '../pages/Formacion'
import Servicios from '../pages/Servicios'
import Proyectos from '../pages/Proyectos'
import Asesoramiento from '../pages/Asesoramiento'
import About from '../pages/About'
import Contacto from '../pages/Contacto'

function App(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={ Inicio }/>
            <Route exact path="/formacion" component={ Formacion }/>
            <Route exact path="/servicios" component={ Servicios }/>
            <Route exact path="/servicios/asesoramiento" component={ Asesoramiento }/>
            <Route exact path="/se'rvicios/proyectos" component={ Proyectos }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/contacto" component={ Contacto }/>
        </BrowserRouter>
    )
}
export default App