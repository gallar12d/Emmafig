import React, { Component } from 'react';
import './Inicio.css'

class Inicio extends Component {


    render() {

        return (
            <div id="contenedor-inicio">
                <div className="row">
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                        <h1 id="titulo-cal" className="flow-text">Calcula el nivel de riesgo que presentas</h1>
                        <h6 id="subtitulo-cal" className="center-align ">Responde a las siguientes preguntas y obten un resultado verdadero</h6>
                    </div>
                </div>
            </div >

        );

    }
}

export default Inicio; // Don’t forget to use export default!