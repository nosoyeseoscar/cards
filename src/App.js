import React from 'react';
import './App.css';

/* Componentes */
import Navegacion from './componentes/nav'
import Captura from './componentes/captura'

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <div className="row">
        <div className="col-md-3 border-right">
          <Captura />
        </div>
        <div className="col-md-9">
          <div className="row">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
