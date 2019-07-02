import React, { Component } from 'react';
import './Resultado.css'
import M from 'materialize-css'
import '../../../../node_modules/materialize-social/css/materialize.css'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import './materialize-social.css'

class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg",
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg",
            displayModal: false
        };

        this.masHandleMouseOver = this.masHandleMouseOver.bind(this);
        this.masHandleMouseOut = this.masHandleMouseOut.bind(this);
        this.conocerHandleMouseOver = this.conocerHandleMouseOver.bind(this);
        this.conocerHandleMouseOut = this.conocerHandleMouseOut.bind(this);
        this.masHandleClick = this.masHandleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
        });
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
    render() {
        let modal = null;
        if (this.state.displayModal) {
            modal = (
                <div>
                    <h1>Hola mundo</h1>
                    {/*{ this.state.questions.map((question, index) => {
                      return <Question key={question.id}
                      title={question.title} />
                 })}*/}
                </div>
            )
        }
        return (

            <div id="contenedor-resultado">
                <div id="modal1" className="modal col s10 l4">
                    <div className="modal-content">
                        <form action="#">
                            <p className="center titulo-registro">Registrate</p>
                            <p className="center">Para recibir mas detalles de tu resultado <br />totalmente gratis</p>
                            <div className="row">
                                <a className="waves-effect waves-light btn social facebook">
                                    <i className="fa fa-facebook"></i> Sign in with facebook</a>
                            </div>
                            <div className="row">
                                <a className="waves-effect waves-light btn social google">
                                    <i className="fa fa-google"></i> Sign in with google</a>
                            </div>
                        </form>
                    </div>
                    {/*<div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>*/}
                </div>
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
                        <img id="btn_mas_detalles" onMouseOver={this.masHandleMouseOver} onMouseOut={this.masHandleMouseOut} src={this.state.btn_mas_detalles} className="right boton-res waves-effect waves-light modal-trigger" href="#modal1"></img>

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