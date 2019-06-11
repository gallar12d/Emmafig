import React from 'react';
//import logo from './logo.svg';
import Menu from './components/menu/Menu';
import Seccion1 from './components/seccion1/Seccion1';
import Citas from './components/Citas/Citas';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu></Menu>      
      <Seccion1 ></Seccion1>
      <Citas ></Citas>
    </div>
  );
}

export default App;
