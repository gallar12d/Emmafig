import React, { Component } from 'react';
import './ModalInscrip.css';
import M from 'materialize-css';
import $ from 'jquery';
import {withRouter} from 'react-router-dom'
class ModalInscrip extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;

    }
    componentDidMount() {
        var elems = document.getElementById('modal2');

    }
    changeDecimal(){
        let num = this.props.resultado['riesgo'] * 100;
        return parseFloat(num).toFixed(2);
    }

    redirectTocita = () => {
        this.props.history.push('/citas')
    }
    render() {        
        return (

            <div id='modal2' className="modal modal-fixed-footer">
                <div className="modal-content">                    
                    <div id="encabezado" className="row">
                        <img src={process.env.PUBLIC_URL + "/img/arribasoporte_1-100.jpg"} className="encabezado" />
                    </div>
                    <div id="contenido" className="row">
                        {/*<img src={process.env.PUBLIC_URL + "/img/marcadeaguaconguias-100.jpg"} className="grilla hide-on-small-only" alt="" />*/}
                        <div id='resultado'>
                            Riesgo : {this.changeDecimal()} %
                        </div>
                        {/*<div id="table-result" className="row hide-on-small-only">
                            <div id="celda1" className="celda col s6 m6 l6">
                                <p className="pregunta">
                                    {this.props.resultado['p1']}
                                </p>
                                <p className="respuesta">
                                    Tu respuesta fue : {this.props.resultado['r1']}
                                </p>
                                <p className="texto">
                                    {this.props.resultado['text1']}
                                </p>
                            </div>
                            <div id="celda2" className="celda celda col s6 m6 l6">
                                <p className="pregunta">
                                    {this.props.resultado['p2']}
                                </p>
                                <p className="respuesta">
                                    Tu respuesta fue : {this.props.resultado['r2']}
                                </p>
                                <p className="texto">
                                    {this.props.resultado['text2']}
                                </p>
                            </div>
                            <div id="celda3" className="celda celda col s6 m6 l6">
                                <p className="pregunta">
                                    {this.props.resultado['p3']}
                                </p>
                                <p className="respuesta">
                                    Tu respuesta fue : {this.props.resultado['r3']}
                                </p>
                                <p className="texto">
                                    {this.props.resultado['text3']}
                                </p>
                            </div>
                            <div id="celda4" className="celda celda col s6 m6 l6">
                                <p className="pregunta">
                                    {this.props.resultado['p4']}
                                </p>
                                <p className="respuesta">
                                    Tu respuesta fue : {this.props.resultado['r4']}
                                </p>
                                <p className="texto">
                                    {this.props.resultado['text4']}
                                </p>
                            </div>
                            <div id="celda5" className="celda celda col s6 m6 l6">
                                <p className="pregunta">
                                    {this.props.resultado['p5']}
                                </p>
                                <p className="respuesta">
                                    Tu respuesta fue : {this.props.resultado['r5']}
                                </p>
                                <p className="texto">
                                    {this.props.resultado['text5']}
                                </p>
                            </div>
                            <div id="celda6" className="celda celda col s6 m6 l6">
                                <p className="pregunta">
                                    {this.props.resultado['p6']}
                                </p>
                                <p className="respuesta">
                                    Tu respuesta fue : {this.props.resultado['r6']}
                                </p>
                                <p className="texto">
                                    {this.props.resultado['text6']}
                                </p>
                            </div>
                        </div>*/}
                        <table className="centered">
                            <tbody>
                            <tr>
                                <td>
                                    <p className="pregunta">
                                        {this.props.resultado['p1']}
                                    </p>
                                    <p className="respuesta">
                                        Tu respuesta fue : {this.props.resultado['r1']}
                                    </p>
                                    <p className="texto">
                                        {this.props.resultado['text1']}
                                    </p>
                                </td>
                                <td>
                                    <p className="pregunta">
                                        {this.props.resultado['p2']}
                                    </p>
                                    <p className="respuesta">
                                        Tu respuesta fue : {this.props.resultado['r2']}
                                    </p>
                                    <p className="texto">
                                        {this.props.resultado['text2']}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="pregunta">
                                        {this.props.resultado['p3']}
                                    </p>
                                    <p className="respuesta">
                                        Tu respuesta fue : {this.props.resultado['r3']}
                                    </p>
                                    <p className="texto">
                                        {this.props.resultado['text3']}
                                    </p></td>
                                <td>
                                    <p className="pregunta">
                                        {this.props.resultado['p4']}
                                    </p>
                                    <p className="respuesta">
                                        Tu respuesta fue : {this.props.resultado['r4']}
                                    </p>
                                    <p className="texto">
                                        {this.props.resultado['text4']}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="pregunta">
                                        {this.props.resultado['p5']}
                                    </p>
                                    <p className="respuesta">
                                        Tu respuesta fue : {this.props.resultado['r5']}
                                    </p>
                                    <p className="texto">
                                        {this.props.resultado['text5']}
                                    </p>
                                </td>
                                <td>
                                    <p className="pregunta">
                                        {this.props.resultado['p6']}
                                    </p>
                                    <p className="respuesta">
                                        Tu respuesta fue : {this.props.resultado['r6']}
                                    </p>
                                    <p className="texto">
                                        {this.props.resultado['text6']}
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                            
                        </table>
                    </div>
                    <div id="footer">
                        <img src={process.env.PUBLIC_URL + "/img/Soporte-Abajo-100.jpg"} className="footer" />
                    </div>
                </div>
                <div id="modalFooter" class="modal-footer">
                    <div className="footer-content">
                        <a class="btn-res-cita modal-close waves-effect waves-green btn-flat" onClick={this.redirectTocita}>Agenda tu cita</a>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(ModalInscrip); // Don’t forget to use export default!