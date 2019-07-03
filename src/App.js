import React, {Component} from 'react';
import './App.css';

/* Componentes */
import Navegacion from './componentes/nav'
import Captura from './componentes/captura'
import Tarjetas from './componentes/tarjetas'

/* datos dummie */
import {ejemplos} from './ejemplos.json';


export default class App extends Component {
  constructor(){
    /* se ejecuta antes que los otros métodos */
    super(); /* con esto heredamos los procedimientos de la clase extends, y no marque error */
    this.state = {ejemplos}
  }

  /* Funciones Generales de la App */
  borrarTarjeta(i){
  
  }
  
  render(){
    const contactos = this.state.ejemplos.map((tarjeta, i) => {
      return ( <Tarjetas tarjeta={tarjeta} key= {i} index={i} borrarTarjeta={this.borrarTarjeta.bind(this)}/>);
    });
    return (
      <div className="App">
        <Navegacion/>
      <div className="row">
        <div className="col-md-3 border-right">
          <Captura />
        </div>
        <div className="col-md-9">
          <div className="row">
            {contactos}
          </div>
        </div>
      </div>
    </div>
    );
  }
/* fin class */
}


