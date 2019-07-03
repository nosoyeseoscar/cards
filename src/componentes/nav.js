/* Componente encargado de la Navegación, que solo es un menú superior. */
import React, { Component } from "react";

export default class Navegacion extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <h5 className="text-white mt-1">
                    Delegación SEMARNAT B.C.S.
                </h5>
            </nav>
        );
    }
}
