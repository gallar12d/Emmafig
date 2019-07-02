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
        this.state = {
            next: process.env.PUBLIC_URL + "/img/next-btn.svg"
        };
    }
    CuestionarioStart(props) {
        return <Cuestionario />;
    }
    render() {

        return (
            <div id="contenedor-calculadora">
                <Inicio></Inicio>
                <div className="row">
                    <div className="col s4 m4 l2 offset-s4 offset-m4 offset-l5">
                        <img id="btn_prev" src={this.state.next} onClick={this.CuestionarioStart} className="boton center"></img>
                    </div>
                </div>
                <Cuestionario></Cuestionario>
                <Resultado></Resultado>
                <Inscripcion></Inscripcion>
                <Detalle></Detalle>
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!