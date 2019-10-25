import React, { Component } from 'react';
import './ModalInscrip.css';
import M from 'materialize-css';
import $ from 'jquery';
class ModalInscrip extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;

    }
    componentDidMount() {
        var elems = document.getElementById('modal2');

    }
    render() {

        return (

            <div id='modal2' className="modal">
                <div className="modal-content">                    
                    <h5 className='titulo_reg'>¡Felicitaciones!</h5>
                    <h6 className="subtitulo_reg">Registro exitoso</h6>
                    <p className="center info-codigo">Podrás participar de promociones en nuestros servicios, además recibirás noticias de eventos <br />totalmente gratis</p>
                    <a className="waves-light btn col s10 offset-s1 btn_ok">Aceptar</a>                    
                </div>
                {/*<div id="encabezado">
                    <img src="images/arribasoporte_1-100.jpg" class="encabezado" />
                </div>
                    <div id="contenido">
                        <img src="images/marcadeaguaconguias-100.jpg" class="grilla" alt=""/>
                            <div id='resultado'>
                                Riesgo : {{ $data['riesgo'] }} %
                            </div>
                            <div id="table-result">
                                <div id="celda1" class="celda">
                                    <p class="pregunta">
                                        {{ $data['p1'] }}
                                    </p>
                                    <p class="respuesta">
                                        Tu respuesta fue : {{ $data['r1'] }}
                                    </p>
                                    <p class="texto">
                                        {{ $data['text1'] }}
                                    </p>
                                </div>
                                <div id="celda2" class="celda" style="left: 45% top: 0%; width: 35%">
                                    <p class="pregunta">
                                        {{ $data['p2'] }}
                                    </p>
                                    <p class="respuesta">
                                        Tu respuesta fue : {{ $data['r2'] }}
                                    </p>
                                    <p class="texto">
                                        {{ $data['text2'] }}
                                    </p>
                                </div>
                                <div id="celda3" class="celda" style="left: 0%; top: 24%; width: 35%">
                                    <p class="pregunta">
                                        {{ $data['p3'] }}
                                    </p>
                                    <p class="respuesta">
                                        Tu respuesta fue : {{ $data['r3'] }}
                                    </p>
                                    <p class="texto">
                                        {{ $data['text3'] }}
                                    </p>
                                </div>
                                <div id="celda4" class="celda" style="left: 45%; top: 24%; width: 35%">
                                    <p class="pregunta">
                                        {{ $data['p4'] }}
                                    </p>
                                    <p class="respuesta">
                                        Tu respuesta fue : {{ $data['r4'] }}
                                    </p>
                                    <p class="texto">
                                        {{ $data['text4'] }}
                                    </p>
                                </div>
                                <div id="celda5" class="celda" style="left: 0%; top: 53%; width: 35%">
                                    <p class="pregunta">
                                        {{ $data['p5'] }}
                                    </p>
                                    <p class="respuesta">
                                        Tu respuesta fue : {{ $data['r5'] }}
                                    </p>
                                    <p class="texto">
                                        {{ $data['text5'] }}
                                    </p>
                                </div>
                                <div id="celda6" class="celda" style="left: 45%; top: 53%; width: 35%">
                                    <p class="pregunta">
                                        {{ $data['p6'] }}
                                    </p>
                                    <p class="respuesta">
                                        Tu respuesta fue : {{ $data['r6'] }}
                                    </p>
                                    <p class="texto">
                                        {{ $data['text6'] }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="footer">
                            <img src="images/Soporte-Abajo-100.jpg" class="footer"/>
                        </div>*/}
                    </div>

                        );
                
                    }
                }
                
export default ModalInscrip; // Don’t forget to use export default!