import React from 'react';
//import logo from './logo.svg';
import Menu from './components/menu/Menu';
import Seccion1 from './components/seccion1/Seccion1';
import Calculadora from './components/calculadora/Calculadora';
import Testimonios from './components/testimonios/Testimonios';
import './App.css';
function App() {
  return (
    <div className="App">
     
      <Menu></Menu>      
      <Seccion1 ></Seccion1>
      <Calculadora></Calculadora>
      <Testimonios></Testimonios>   
       
    </div>
  );
}

export default App;
