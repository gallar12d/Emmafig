import React, { Component } from 'react';
import './Inicio.css'

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img_avatar: process.env.PUBLIC_URL + "/img/avatar-section1.png",
            logo_emma: process.env.PUBLIC_URL + "/img/MarcadeAguaColor.png",
            begin: process.env.PUBLIC_URL + "/img/fwdbotnempezar/btn-empezar1-c-2.svg",
            style: {
                opacity: 0,
                transform: 'translate3d(100%,0,0)'
            }

        };

        this.beginHandleMouseOver = this.beginHandleMouseOver.bind(this);
        this.beginHandleMouseOut = this.beginHandleMouseOut.bind(this);
        this.mountStyle = this.mountStyle.bind(this);        

    }

    beginHandleMouseOver() {
        this.setState({
            begin: process.env.PUBLIC_URL + "/img/fwdbotnempezar/btn-empezar1-c-2-h.svg"
        });
    }

    beginHandleMouseOut() {
        this.setState({
            begin: process.env.PUBLIC_URL + "/img/fwdbotnempezar/btn-empezar1-c-2.svg"
        });
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 10) //call the into animiation
    }

    
    mountStyle() {
        this.setState({
            style: {
                opacity: 1,                
                transitionProperty: 'translate3d(100%,0,0)',
                transitionDuration: '1s'
            }
        });
    }
    
    render() {

        return (

            <div style={this.state.style} id="contenedor-inicio">
                <div className="row">
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                        <h1 id="titulo-cal" className="flow-text">Hecho por mujeres para mujeres</h1>
                        <h6 id="subtitulo-cal" className="center-align ">Responde a las siguientes preguntas y obten un resultado verdadero</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col s5 l3 offset-l2 offset-s1">
                        <img id="logo_emmafig" src={this.state.logo_emma}></img>
                        <img id="btn_begin" onMouseOver={this.beginHandleMouseOver} onMouseOut={this.beginHandleMouseOut} onClick={this.props.changeComponente} src={this.state.begin}></img>
                    </div>
                    <div className="col s3 l2 offset-l3 offset-s1">
                        <img id="avatar_emma" src={this.state.img_avatar}></img>
                    </div>
                </div>
            </div >
        );

    }
}

export default Inicio; // Don’t forget to use export default!