import React, { Component } from 'react';
import './Calculadora.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig1.png"

        };
    }

    render() {
        return (
            <div id="contenedor-calculadora">
                <div className="row">                                        
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                         <h1 id="titulo-cal" className="center-align flow-text">Calcula el nivel de riesgo que presentas</h1>
                         <h6 id="subtitulo-cal" className="center-align ">Responde a las siguientes preguntas y obten un resultado verdadero</h6>
                    </div>                    
                </div>
                <div className="row">                                        
                                     
                </div>       
            </div>
        );

    }
}

export default Menu; // Don’t forget to use export default!