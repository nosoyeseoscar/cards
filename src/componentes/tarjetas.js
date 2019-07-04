/* Componente de las tarjetas de los datos de contacto */
import React, { Component } from "react";
import './tarjetas.css';


{/* {this.props.tarjeta.tel}
    {this.props.tarjeta.correo}
    <div className="mx-auto">
        <button className="btn btn-danger" onClick={this.props.borrarTarjeta.bind(this, this.props.index)}>Borrar</button>
    </div>  */}

export default class Tarjetas extends Component {
    render(){
        return(           
            <div className="col-md-6 col-lg-4 mb-2">
                <div className="dropdown col-12 px-0">
                    {/* La clave de que tuviera el mismo with el menu y el botón es el padding x en cero: px-0 */}
                    <button className="btn btn-justifica btn-lg btn-block btn-secondary  px-1" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p>{this.props.tarjeta.nombre}</p>
                    </button>
                    <div className="dropdown-menu w-100 px-1 text-center" aria-labelledby="dropdownMenu2">
                        <p >Teléfono: {this.props.tarjeta.tel}</p>
                        <p >{this.props.tarjeta.correo}</p>
                        <div className="dropdown-divider"></div>
                        <button className="btn btn-danger" onClick={this.props.borrarTarjeta.bind(this, this.props.index)}>Borrar</button>
                    </div>
                </div>
            </div>
        );
    }
}