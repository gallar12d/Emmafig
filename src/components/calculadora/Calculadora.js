import React, { Component } from 'react';
import Cuestionario from './cuestionario/Cuestionario';
import Inicio from './inicio/Inicio';
import './Calculadora.css';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: process.env.PUBLIC_URL + "/img/next-btn.svg"
        };
        this.CuestionarioStart = this.CuestionarioStart.bind(this);




        /*this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.nextHandleMouseOver = this.nextHandleMouseOver.bind(this);
        this.nextHandleMouseOut = this.nextHandleMouseOut.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.prevHandleMouseOver = this.prevHandleMouseOver.bind(this);
        this.prevHandleMouseOut = this.prevHandleMouseOut.bind(this);
        this.prevClick = this.prevClick.bind(this);*/
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
                
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!