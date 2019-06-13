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
                        <h1 id="titulo-cal" className="flow-text">Calcula el nivel de riesgo que presentas</h1>
                        <h6 id="subtitulo-cal" className="center-align ">Responde a las siguientes preguntas y obten un resultado verdadero</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col s2 left item-cuestionario center-align"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="30"
                            fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D"/>
                            <text x="28" y="45" fontSize="25" fill="#6f6f6e">1</text>
                    </svg></div>
                    <div className="col s2 left item-cuestionario center-align"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="30"
                            fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D"/>
                            <text x="28" y="45" fontSize="25" fill="#6f6f6e">2</text>
                    </svg></div>
                    <div className="col s2 left item-cuestionario center-align"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="30"
                            fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D"/>
                            <text x="28" y="45" fontSize="25" fill="#6f6f6e">3</text>
                    </svg></div>
                    <div className="col s2 left item-cuestionario center-align"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="30"
                            fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D"/>
                            <text x="28" y="45" fontSize="25" fill="#6f6f6e">4</text>
                    </svg></div>
                    <div className="col s2 left item-cuestionario center-align"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="30"
                            fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D"/>
                            <text x="28" y="45" fontSize="25" fill="#6f6f6e">5</text>
                    </svg></div>
                    <div className="col s2 left item-cuestionario center-align"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70" viewBox="0 0 70 70">
                        <circle cx="35" cy="35" r="30"
                            fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D"/>
                            <text x="28" y="45" fontSize="25" fill="#6f6f6e">6</text>
                    </svg></div>
                </div>
            </div>
        );

    }
}

export default Menu; // Don’t forget to use export default!