/* Componente de las tarjetas de los datos de contacto */
import React, { Component } from "react";

export default class Tarjetas extends Component {
    render(){
        return(
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.tarjeta.nombre}</h3>
                    </div>
                    <div className="card-body">
                        <p>{this.props.tarjeta.tel}</p>
                        <p>{this.props.tarjeta.correo}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.props.borrarTarjeta.bind(this, this.props.index)}>Borrar</button>
                    </div> 
                </div>
            </div>
        );
    }
}