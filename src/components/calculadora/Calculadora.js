import React, { Component } from 'react';
import './Calculadora.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            btn_next: process.env.PUBLIC_URL +"/img/next-btn.svg",
            btn_prev: process.env.PUBLIC_URL +"/img/prev-btn.svg",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
        /*var elemento = document.getElementById('circulo1');
        var posicion = elemento.getBoundingClientRect();
        alert(posicion.top);*/
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
                <div className="row wrapper" >
                    <div>
                    </div>
                    <div className="item-cuestionario">
                        <svg id="circulo1" className="circulo" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle cx="34" cy="34" r="32.6"
                                fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D" />
                            <text x="27" y="44" fontSize="25" fill="#6f6f6e">1</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg id="linea1" className="linea" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C83B8D" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg id="circulo1" className="circulo" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle cx="34" cy="34" r="32.6"
                                fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D" />
                            <text x="27" y="44" fontSize="25" fill="#6f6f6e">2</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg id="linea1" className="linea" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C83B8D" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg id="circulo1" className="circulo" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle cx="34" cy="34" r="32.6"
                                fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D" />
                            <text x="27" y="44" fontSize="25" fill="#6f6f6e">3</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg id="linea1" className="linea" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C83B8D" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg id="circulo1" className="circulo" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle cx="34" cy="34" r="32.6"
                                fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D" />
                            <text x="27" y="44" fontSize="25" fill="#6f6f6e">4</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg id="linea1" className="linea" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C83B8D" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg id="circulo1" className="circulo" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle cx="34" cy="34" r="32.6"
                                fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D" />
                            <text x="27" y="44" fontSize="25" fill="#6f6f6e">5</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg id="linea1" className="linea" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C83B8D" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg id="circulo1" className="circulo" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle cx="34" cy="34" r="32.6"
                                fill="#C6C8C7" strokeWidth="2" stroke="#C83B8D" />
                            <text x="27" y="44" fontSize="25" fill="#6f6f6e">6</text>
                        </svg>
                    </div>
                    <div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div id="cont-pregunta1" className="row">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta_1" className="center-align contenido-pregunta">1. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta1" className="row">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input className="with-gap" name="group1" type="radio" />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input className="with-gap" name="group1" type="radio" />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta2" className="row">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta_1" className="center-align contenido-pregunta">2. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta2" className="row">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input className="with-gap" name="group1" type="radio" />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input className="with-gap" name="group1" type="radio" />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                </form>
                <div className="row">
                    <img id="btn_prev" src={this.state.btn_prev} className="col s1 offset-s5 btn"></img>
                    <img id="btn_next" src={this.state.btn_next} className="col s1 btn"></img>
                </div>
            </div >
        );

    }
}

export default Menu; // Don’t forget to use export default!