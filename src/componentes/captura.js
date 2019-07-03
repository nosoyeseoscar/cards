/* ******** Componente relacionado con el formulario de captura del contacto ******** */
import React, { Component } from "react";

export default class Captura extends Component {
    render(){
        return(
            <div className="card my-1">
                <form className="card-body">
                    <h5 className="card-title text-center mx-1">
                        Datos del contacto
                    </h5>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="nombre" 
                            className="form-control"
                            placeholder="Nombre del Contacto"
                            onChange={this.capturaTeclado}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="tel" 
                            className="form-control"
                            placeholder="Teléfono"
                            onChange={this.capturaTeclado}                       
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="correo" 
                            className="form-control"
                            placeholder="Correo Electrónico"
                            onChange={this.capturaTeclado}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </form>                
            </div>
        );
    }
}