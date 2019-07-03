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
  borrarTarjeta(index){
    if (window.confirm('¿Borro ésta tarea?')){
      this.setState({
        ejemplos:this.state.ejemplos.filter((e, i)=>{
          /* filtramos el indice que no queremos en el arreglo */
          return i !==index
        })
      });
    }
  }
  
  render(){
    const contactos = this.state.ejemplos.map((tarjeta, i) => {
      return ( <Tarjetas tarjeta={tarjeta} key= {i} index={i} borrarTarjeta={this.borrarTarjeta.bind(this)}/>);
    });
    return (
      <div className="App">
        <Navegacion/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 border-right mt-2">
            <Captura />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="text-white">Contactos</h3>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Busqueda"></input>
                </div>
              </div>
            </div>
            <div className="row">
              {contactos}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
/* fin class */
}


