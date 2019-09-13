import React, { Component } from 'react';
import './Resultado.css'
import M from 'materialize-css'
import '../../../../node_modules/materialize-social/css/materialize.css'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
/*import './materialize-social.css'*/

class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg",
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg",
            displayModal: false,
            textResultado: '',
            style: {
                opacity: 0,
                transform: 'translate3d(100%,0,0)'
            },
            img_emma: process.env.PUBLIC_URL + "/img/emma-ok.svg"
        };

        this.masHandleMouseOver = this.masHandleMouseOver.bind(this);
        this.masHandleMouseOut = this.masHandleMouseOut.bind(this);
        this.conocerHandleMouseOver = this.conocerHandleMouseOver.bind(this);
        this.conocerHandleMouseOut = this.conocerHandleMouseOut.bind(this);
        this.masHandleClick = this.masHandleClick.bind(this);
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 10) //call the into animiation
    }

    masHandleClick() {
        this.setState({
            displayModal: !this.state.displayModal
        })
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
    mountStyle() {

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

    showa = () => {
        alert('hola form');
    }
    render() {

        return (

            <div style={this.state.style} id="contenedor-resultado">
                <div className="row">
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                        <h1 id="titulo-res" className="flow-text">Resultado</h1>
                        <h6 id="subtitulo-res" className="center-align ">Tiene un riesgo de desarrollar cancer de cuello uterino</h6>
                        <h1 id="contenido-res" className="flow-text"><span className="label-res">RESULTADO: </span>{this.props.result}</h1>
                    </div>
                </div>
                <div id="cont-btn-result" className="row">
                    <div className="col s12 l3 offset-l3">
                        {/*<img id="btn_conocer_mas" onMouseOver={this.conocerHandleMouseOver} onMouseOut={this.conocerHandleMouseOut} src={this.state.btn_conocer_mas} className="left boton-res"></img>*/}
                        <a id="btn_reiniciar" className="boton-res waves-effect waves-light" onClick={this.props.backComponente}>Reiniciar cuestionario</a>
                    </div>
                    <div className="col s12 l3">
                        {/*<img id="btn_mas_detalles" onMouseOver={this.masHandleMouseOver} onMouseOut={this.masHandleMouseOut} src={this.state.btn_mas_detalles} className="right boton-res waves-effect waves-light modal-trigger" href="#modal1" />*/}
                        <a id="btn_mas_detalles" className="boton-res waves-effect waves-light modal-trigger" href='#modal1' onClick={this.props.changeLoginCalculadora}>Más detalles de tu resultado</a>
                    </div>
                    {/*<div className="col s12 l2">
                        <img id="btn_conocer_mas" onMouseOver={this.conocerHandleMouseOver} onMouseOut={this.conocerHandleMouseOut} src={this.state.btn_conocer_mas} className="left boton-res"></img>
                        <a id="btn_conocer_mas" className="boton-res waves-effect waves-light">Conocer más</a>
                    </div>*/}
                </div>
                <div id="contenedor-detalles" className="row">
                    <div id="contenedor-emma" className="col s4 m4 l3 offset-s4 offset-l1">
                        <img id="img-emma" src={this.state.img_emma} />
                    </div>
                    <div className="col s10 m8 l6 offset-s1 offset-l1">
                        <div id="contenedor-titulo-ins" className="right-align">
                            <span id="titulo-detalle">Detalles de tu resultado</span>
                            <p id="detalle-res">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                        <div id="contenedor-opciones" className="row">
                            <div className="col s4 m4 l4">
                                <img id="btn_enviar" onMouseOver={this.enviarHandleMouseOver} onMouseOut={this.enviarHandleMouseOut} src={this.state.btn_enviar} className="center btn_op" />
                            </div>
                            <div className="col s4 m4 l4">
                                <img id="btn_saber" onMouseOver={this.saberHandleMouseOver} onMouseOut={this.saberHandleMouseOut} src={this.state.btn_saber} className="center btn_op" />
                            </div>
                            <div className="col s4 m4 l4">
                                <img id="btn_cita" onMouseOver={this.citaHandleMouseOver} onMouseOut={this.citaHandleMouseOut} src={this.state.btn_cita} className="center btn_op" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Resultado; // Don’t forget to use export default!