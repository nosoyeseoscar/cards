/* Componente encargado de la Navegación, que solo es un menú superior. */
import React, { Component } from "react";

export default class Navegacion extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div class="text-white">
                    Delegación SEMARNAT B.C.S.
                </div>
            </nav>
        );
    }
}
