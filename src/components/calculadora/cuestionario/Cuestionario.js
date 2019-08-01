import React, { Component } from 'react';
import './Cuestionario.css'


class Cuestionario extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            value: '',
            btn_next: process.env.PUBLIC_URL + "/img/next-btn.svg",
            btn_prev: process.env.PUBLIC_URL + "/img/prev-btn.svg",
            item: 1,
            selectedOptions: [0, 0, 0, 0, 0, 0],
            style: {
                opacity: 0,
                transform: 'translate3d(50%,0,0)'
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.nextHandleMouseOver = this.nextHandleMouseOver.bind(this);
        this.nextHandleMouseOut = this.nextHandleMouseOut.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.prevHandleMouseOver = this.prevHandleMouseOver.bind(this);
        this.prevHandleMouseOut = this.prevHandleMouseOut.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
        this.countOptSelecteds = this.countOptSelecteds.bind(this);
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    countOptSelecteds(args){                   
        const arrSum = args.reduce((total, num) => total + num);
        return arrSum;
    }

    handleOptionChange(event) {
        let circuloOk;
        let textoOk;
        let op = event.target.id.substr(2, 1);
        let opts = this.state.selectedOptions;
        opts[op - 1] = 1;
        if(this.countOptSelecteds(opts) == 6){
            this.props.changeComponente();
        }
        this.setState({
            selectedOptions: opts
        });        
        circuloOk = document.getElementById("circulo" + op);
        textoOk = document.getElementById("texto" + op);
        circuloOk.classList.remove("circulo");
        circuloOk.classList.remove("circulo-actual");
        circuloOk.classList.add("circulo-ok");
        textoOk.classList.remove("texto");
        textoOk.classList.add("texto-ok");
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    nextHandleMouseOver() {
        this.setState({
            btn_next: process.env.PUBLIC_URL + "/img/next-btn-hover.svg"
        });
    }

    nextHandleMouseOut() {
        this.setState({
            btn_next: process.env.PUBLIC_URL + "/img/next-btn.svg"
        });
    }
    nextClick() {
        let next = this.state.item;
        if (this.state.item < 6) {
            next = next + 1;
            this.setState({
                item: next
            })
            let opts = this.state.selectedOptions;
            const circuloPrev = document.getElementById("circulo" + (next - 1));
            const circuloActual = document.getElementById("circulo" + next);
            const lineaOk = document.getElementById("linea" + (next - 1));
            const preguntaOk = document.getElementById("cont-pregunta" + (next - 1));
            const preguntaActual = document.getElementById("cont-pregunta" + next);
            const opcRespOK = document.getElementById("opc-respuesta-pregunta" + (next - 1));
            const opcRespActual = document.getElementById("opc-respuesta-pregunta" + next);
            if (opts[next - 1] == 0) {
                circuloActual.classList.remove("circulo");
                circuloActual.classList.remove("circulo-ok");
                circuloActual.classList.add("circulo-actual");
            }
            circuloPrev.classList.remove("circulo-actual");
            circuloPrev.classList.add("circulo");
            lineaOk.classList.toggle("linea-ok");
            preguntaOk.style.display = "none";
            opcRespOK.style.display = "none";
            opcRespActual.style.display = "block";
            preguntaActual.style.display = "block";
        }
    }

    
    prevHandleMouseOver() {
        this.setState({
            btn_prev: process.env.PUBLIC_URL + "/img/prev-btn-hover.svg"
        });
    }

    prevHandleMouseOut() {
        this.setState({
            btn_prev: process.env.PUBLIC_URL + "/img/prev-btn.svg"
        });
    }

    prevClick() {
        let next = this.state.item;
        if (this.state.item > 1) {
            next = next - 1;

            this.setState({
                item: next
            })
            let opts = this.state.selectedOptions;
            const circuloPrev = document.getElementById("circulo" + (next + 1));
            const circuloActual = document.getElementById("circulo" + next);
            const lineaOk = document.getElementById("linea" + (next));
            const preguntaOk = document.getElementById("cont-pregunta" + (next + 1));
            const preguntaActual = document.getElementById("cont-pregunta" + next);
            const opcRespOK = document.getElementById("opc-respuesta-pregunta" + (next + 1));
            const opcRespActual = document.getElementById("opc-respuesta-pregunta" + next);
            if (opts[next - 1] == 0) {
                circuloActual.classList.remove("circulo");
                circuloActual.classList.remove("circulo-ok");
                circuloActual.classList.add("circulo-actual");
            }
            circuloPrev.classList.remove("circulo-actual");
            circuloPrev.classList.add("circulo");
            lineaOk.classList.remove("linea-ok");
            lineaOk.classList.add("linea");
            preguntaOk.style.display = "none";
            opcRespOK.style.display = "none";
            opcRespActual.style.display = "block";
            preguntaActual.style.display = "block";
        }
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 1) //call the into animiation
    }

    

    mountStyle() {
        console.log('mount');
        this.setState({
            style: {
                opacity: 1,                
                transitionProperty: 'translate3d(100%,0,0)',
                transitionDuration: '1s'
            }
        });
    }
    unMountStyle() {
        this.setState({
            style: {
                opacity: 0,                
                transitionProperty: 'translate3d(-50%,0,0)',
                transitionDuration: '1s'
            }
        });
    }

    
    
    render() {

        return (

            <div style={this.state.style} id="contenedor-cuestionario">
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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle id="circulo1" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo-actual" />
                            <text id="texto1" x="27" y="44" className="texto-actual">1</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea1" className="linea" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo2" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto2" x="27" y="44" className="texto">2</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea2" className="linea" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo3" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto3" x="27" y="44" className="texto">3</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea3" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" className="linea" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo4" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto4" x="27" y="44" className="texto">4</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea4" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" className="linea" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo5" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto5" x="27" y="44" className="texto">5</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea5" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" className="linea" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo6" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto6" x="27" y="44" className="texto">6</text>
                        </svg>
                    </div>
                    <div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div id="cont-pregunta1" className="row" pgindex="1">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta1" className="center-align contenido-pregunta">1. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta1" className="row" oprindex="1">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op11" className="with-gap" name="group1" type="radio" value="si" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op12" className="with-gap" name="group1" type="radio" value="no" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta2" className="row" pgindex="2">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta2" className="center-align contenido-pregunta">2. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta2" className="row" oprindex="2">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op21" className="with-gap" name="group2" type="radio" value="si" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op22" className="with-gap" name="group2" type="radio" value="no" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta3" className="row" pgindex="3">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta3" className="center-align contenido-pregunta">3. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta3" className="row" oprindex="3">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op31" className="with-gap" name="group3" type="radio" value="si" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op31" className="with-gap" name="group3" type="radio" value="no" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta4" className="row" pgindex="4">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta4" className="center-align contenido-pregunta">4. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta4" className="row" oprindex="4">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op41" className="with-gap" name="group4" type="radio" value="si" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op42" className="with-gap" name="group4" type="radio" value="no" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta5" className="row" pgindex="5">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta5" className="center-align contenido-pregunta">5. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta5" className="row" oprindex="5">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op51" className="with-gap" name="group5" type="radio" value="si" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op52" className="with-gap" name="group5" type="radio" value="no" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta6" className="row" pgindex="6">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta6" className="center-align contenido-pregunta">6. ¿Te haz realizado una citologia en el ultimo año?</h4>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta6" className="row" oprindex="6">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op61" className="with-gap" name="group6" type="radio" value="si" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Si</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op62" className="with-gap" name="group6" type="radio" value="no" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                </form>
                <div id="contenedor-botones" className="row">
                    <div className="col s3 m3 l2 offset-s3 offset-m3 offset-l4">
                        <img id="btn_prev" onMouseOver={this.prevHandleMouseOver} onMouseOut={this.prevHandleMouseOut} onClick={this.prevClick} src={this.state.btn_prev} className="boton right"></img>
                    </div>
                    <div className="col s3 m3 l2">
                        <img id="btn_next" onMouseOver={this.nextHandleMouseOver} onMouseOut={this.nextHandleMouseOut} onClick={this.nextClick} src={this.state.btn_next} className="boton left"></img>
                    </div>
                </div>
            </div>


        );

    }
}

export default Cuestionario; // Don’t forget to use export default!