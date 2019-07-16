import React, { Component } from 'react';



import Cuestionario from './cuestionario/Cuestionario';
import Detalle from './detalle/Detalle';
import Inicio from './inicio/Inicio';
import Inscripcion from './inscripcion/Inscripcion';
import Resultado from './resultado/Resultado';
import './Calculadora.css';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        
    }
    
    CuestionarioStart(props) {
        return <Cuestionario />;
    }
    render() {
        
        return (
            <div id="contenedor-calculadora">
                <Inicio></Inicio>                
                <Cuestionario></Cuestionario>
                <Resultado></Resultado>
                <Inscripcion></Inscripcion>
                <Detalle></Detalle>
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!