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
                    <div className="col s6 offset-s3">
                         <h5 class="left-align">  Calcula el nivel de riesgo que presentas</h5>
                    </div>                    
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        Responde a las siguientes preguntas y obten un resultado verdadero
                    </div>                    
                </div>                
            </div>
        );

    }
}

export default Menu; // Don’t forget to use export default!