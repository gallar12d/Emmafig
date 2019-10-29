import React, { Component } from 'react';
import './Step5.css'
import M from 'materialize-css';
import $ from 'jquery';

import Buttons from '../buttons/Buttons'
import axios from 'axios';

class Step5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/preload.gif",
            avatar: process.env.PUBLIC_URL + "/img/avatar-section5.svg",
            water_mark: process.env.PUBLIC_URL + "/img/water_mark.svg",
            cargando: false,
            cita: false


        };
    }

    ucword(word) {
        var lsCadena = word.toLowerCase();
        lsCadena = lsCadena.charAt(0).toUpperCase() + lsCadena.slice(1);

        return lsCadena;
    }

    formatdate(date = '2019-09-06') {

        var meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']


        var midate = date
        midate = midate.split('-')
        midate = new Date(midate[0], midate[1] - 1, midate[2])

        midate = midate.getDate() + '/' + meses[midate.getMonth()] + '/' + midate.getFullYear();

        return midate;


    }

    service(text = '') {

        text = text.replace('|', '');
        return text;

    }

    componentDidMount() {

        let elems = $('#modal_sms')
        M.Modal.init(elems, {});
        $('#modal_sms').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');



        const dataForm = new FormData();
        dataForm.append("primer_nombre", this.props.paciente_primer_nombre);
        dataForm.append("segundo_nombre", this.props.paciente_segundo_nombre);
        dataForm.append("primer_apellido", this.props.paciente_primer_apellido);
        dataForm.append("segundo_apellido", this.props.paciente_segundo_apellido);
        dataForm.append("tipo_identificacion", this.props.paciente_tipo_identificacion);
        dataForm.append("numero_identificacion", this.props.paciente_numero_identificacion);
        dataForm.append("telefono1", this.props.paciente_numero1);
        dataForm.append("telefono2", this.props.paciente_numero2)
        dataForm.append("email", this.props.paciente_email)
        dataForm.append("id_turno", this.props.id_turno);
        let new_turno = this.props.turno;
        new_turno = new_turno.replace(" ", "");
        dataForm.append("turno", new_turno);
        dataForm.append("fecha_modificada", this.formatdate(this.props.fecha_cita));
        dataForm.append("id_paquete", this.props.iditem);
        dataForm.append("nombre_paquete", this.props.textItem);
        dataForm.append("sede", this.props.sede);

        if(this.props.id_bono){
            dataForm.append("id_bono", this.props.id_bono);
        }


        if (!this.props.cita) {
            axios
                .post("https://emmafig.com/api1/cita", dataForm)
                .then(res => {
                    let result = res.data;
                    this.setState({ cargando: false })
                    this.props.set_state('cita', true)
                    this.open_modal();

                });

        }



    }
    open_modal() {
        var elem = $('#modal_sms')
        var instance = M.Modal.getInstance(elem);
        instance.open();
    }

    render() {
        let mostrar = '';

        if (this.state.cargando) {
            mostrar =
                <div>
                    <img src={this.state.imagen} />

                </div>
        }
        else {
            mostrar =
                <div className="card resume ">
                    <div className="card-content white-text">
                        <br></br>
                        <h5>{this.ucword(this.props.paciente_primer_nombre)}, hemos agendado tu cita!</h5>
                        <hr></hr>
                        <div className="align-left">
                            <h5 className="no_margin">Fecha: &nbsp; </h5>
                            <span> {this.formatdate(this.props.fecha_cita)}</span>
                        </div>
                        <hr></hr>
                        <div className="align-left">
                            <h5 className="no_margin">Hora: &nbsp;</h5>
                            <span>{this.props.turno}</span>

                        </div>
                        <hr></hr>
                        <div className="align-left ">
                            <h5>Servicio: &nbsp; </h5>
                            <span> {this.service(this.props.textItem)}</span>
                        </div>
                        <hr></hr>
                        <div className="align-left">
                            <h5>Profesional: &nbsp;</h5>
                            <span>{this.props.profesional}</span>

                        </div>
                        <hr></hr>
                        <div className="align-left">
                            <h5>Sede: &nbsp;</h5>
                            <span>{this.props.sede}</span>

                        </div>
                        <hr></hr>
                        <div className="align-left">
                            <h5>Dirección: &nbsp;</h5>
                            <span> Calle 11N # 7-12, Popayán </span>

                        </div>
                        <hr></hr>
                        <br></br>



                    </div>

                </div>


        }


        return (
            <div id="step5">

                <div className="row">
                    <div className="col s12 m8 offset-m2    ">
                        <div className="water_mark_parent">
                            <img className="water_mark" src={this.state.water_mark} />
                            {mostrar}
                        </div>


                    </div>
                    <div className="col s12 m4 ">
                        <div>

                            <img hidden className="avatar_step5" src={this.state.avatar} />
                        </div>

                    </div>
                </div>

                <div id="modal_sms" class="modal">
                    <div class="modal-content">
                        <h5>Se ha enviado un mensaje de texto a tu celular con el resumen de tu reserva!</h5>
                        
                    </div>
                    <div class="modal-footer">
                        <a  class="modal-close waves-green btn-flat">Aceptar</a>
                    </div>
                </div>
            </div>



        );

    }
}

export default Step5; // Don’t forget to use export default!