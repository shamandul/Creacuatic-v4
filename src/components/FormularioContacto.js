import React, { Component } from 'react'
import img from '../images/undraw_contact_us_15o2.svg'
import axios from 'axios'

class FormularioContacto extends Component{
  handleSubmit(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const texto = document.getElementById('texto').value;
    axios({
        method: "POST", 
        url: "http://localhost:4000/mail", 
        data: {
            nombre,   
            email,  
            telefono,
            texto 
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Mensaje envido"); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            console.log()
            alert("No se ha enviado el mensaje");
        }
    })
  }
  
  resetForm(){
    document.getElementById("formulario").reset();
  }
  
    render(){
        return(
            <React.Fragment>
              <div className="col-md-4 mx-auto mt-4 mb-4">
                <div className="card text-left">
                  .<div className="card">
                    <div className="card-header">
                    <img className="card-img-top" src={img} alt=""/>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Contacto</h4>
                      <form method="POST" onSubmit={this.handleSubmit.bind(this)} id="formulario">
                        <div className="form-group">
                          <input type="text"  id="nombre" name="nombre" className="form-control" placeholder="Introduce tu nombre" required/>
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" id="email" className="form-control" placeholder="ejemplo@ejemplo.com" required/>
                        </div>
                        <div className="form-group">
                          <input type="tel" name="telefono" id="telefono" className="form-control" placeholder="Teléfono"/>
                        </div>
                        <div className="form-group">
                          <textarea name="texto" id="texto" className="form-control"/>
                        </div>
                        <div className="card-footer">
                          <button type="submit" className="form-control btn btn-success" >Enviar</button>
                        </div>
                      </form>
                    </div> 
                  </div>
                </div>
              </div>
            
          
                
            </React.Fragment>
        )
    }
}

export default FormularioContacto

