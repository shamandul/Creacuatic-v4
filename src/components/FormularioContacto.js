import React, { Component } from 'react'
import img from '../images/undraw_contact_us_15o2.svg'

class FormularioContacto extends Component{
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
                      <form method="POST">
                        <div className="form-group">
                          <input type="text" name="nombre" className="form-control" placeholder="Introduce tu nombre" required/>
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" className="form-control" placeholder="ejemplo@ejemplo.com" required/>
                        </div>
                        <div className="form-group">
                          <input type="tel" name="telefono" className="form-control" placeholder="Teléfono"/>
                        </div>
                        <div className="form-group">
                          <textarea name="texto" className="form-control"/>
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

