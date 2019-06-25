import React, { Component } from 'react';
import './Resultado.css'

class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {            
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg",
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg"
        };
       
        this.masHandleMouseOver = this.masHandleMouseOver.bind(this);
        this.masHandleMouseOut = this.masHandleMouseOut.bind(this);        
        this.conocerHandleMouseOver = this.conocerHandleMouseOver.bind(this);
        this.conocerHandleMouseOut = this.conocerHandleMouseOut.bind(this);
    }

    masHandleMouseOver() {
        this.setState({
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-hover-btn.svg"
        });
    }

    masHandleMouseOut() {
        this.setState({
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg"
        });
    }
    conocerHandleMouseOver() {
        this.setState({
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-hover-btn.svg"
        });
    }

    conocerHandleMouseOut() {
        this.setState({
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg"
        });
    }
    render() {

        return (
            <div id="contenedor-resultado">
                <div className="row">
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                        <h1 id="titulo-res" className="flow-text">Resultado</h1>
                        <h6 id="subtitulo-res" className="center-align ">Tiene un riesgo de desarrollar cancer de cuello uterino</h6>
                        <h1 id="contenido-res" className="flow-text"><span className="label-res">RESULTADO: </span>Bajo</h1>
                    </div>
                </div>
                <div className="cont-btn-result">
                    <div>                        
                    </div>
                    <div>                        
                        <img id="btn_mas_detalles" onMouseOver={this.masHandleMouseOver} onMouseOut={this.masHandleMouseOut} src={this.state.btn_mas_detalles} className="right boton-res"></img>
                    </div>
                    <div></div>
                    <div>                        
                        <img id="btn_conocer_mas" onMouseOver={this.conocerHandleMouseOver} onMouseOut={this.conocerHandleMouseOut} src={this.state.btn_conocer_mas} className="left boton-res"></img>                        
                    </div>
                    <div></div>
                </div>
            </div >

        );

    }
}

export default Resultado; // Don’t forget to use export default!