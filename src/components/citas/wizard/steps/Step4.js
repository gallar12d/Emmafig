import React, { Component } from 'react';
import './Step4.css'
import M from 'materialize-css';
import $ from 'jquery';
import { FaUserNurse } from 'react-icons/fa';
import { MdLocationOn, MdEvent, MdAccessAlarms } from 'react-icons/md'
import { IoIosPerson } from 'react-icons/io';

import Buttons from '../buttons/Buttons'
import Axios from 'axios';





class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/citas_step2.svg",
            profesionales: []

        };
    }

    componentDidMount() {
        var elems = $('.mySelect');

        M.FormSelect.init(elems, {});
        elems = $('select');

        M.FormSelect.init(elems, {});

        elems = $('#modal_cita')
        M.Modal.init(elems, {});
        $('#modal_cita').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');

        Axios.get(`https://emmafig.com/api1/profesionales`)
            .then(res => {
                const profesionales = res.data;
                this.setState({ profesionales });
            })

    }
    open_modal() {

        var elem = $('#modal_cita')
        var instance = M.Modal.getInstance(elem);
        instance.open();


    }




    render() {

        let prof = this.state.profesionales.map(profesional =>
            <div className="input-field ">
                <div className="icon_input">
                    <label>
                        <input className="with-gap" name="group1" type="radio" />
                        <span>{profesional.primer_nombre + ' ' + profesional.segundo_nombre + ' ' + profesional.primer_apellido + ' ' + profesional.segundo_apellido}</span>
                    </label>
                    <FaUserNurse className="icon" size={25} />
                </div>
            </div>

        )



        return (
            <div className="row step4">
                <div className="col s12 m4 offset-m2 ">
                    <div className="icon_input">
                        <div className='floting'>
                            <MdLocationOn color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Punto de atención:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.sede} </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdEvent color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Fecha de la cita:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.fecha_cita}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <FaUserNurse color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Profesional:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.profesional}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdAccessAlarms color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Hora de la cita:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.turno}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <IoIosPerson color={'#0f9b9b'} size={35} />

                        </div>
                        <div style={{ width: '100%' }} className='floting'>
                            <div onClick={this.open_modal.bind(this)} style={{ margin: '0px', color: 'black' }} className="input-field ">
                                <select disabled value={'Completa tus datos básicos para la cita'} >
                                    <option disabled  >Completa tus datos básicos para la cita</option>

                                </select>

                            </div>

                        </div>

                    </div>



                    <br></br>


                </div>
                <div className="col s12 m4 offset-m1  img_step4 ">
                    <img alt="" src={this.state.imagen} />

                </div>

                <div id="modal_cita" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <div className="col m12 left-align">
                                <h5 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#c83b8d' }}>
                                    Datos necesarios para tu cita
                              </h5>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col m12">
                            <hr></hr>

                            </div>
                           
                        </div>

                        <div className="row">

                            <div className="input-field col s6 m6">
                                <input placeholder="" id="primer_nombre" type="text" className="validate"></input>
                                <label htmlFor="first_name">Primer nombre *</label>
                            </div>
                            <div className="input-field col s6 m6">
                                <input placeholder="" id="segundo_nombre" type="text" className="validate"></input>
                                <label htmlFor="first_name">Segundo nombre</label>
                            </div>
                            <div className="input-field col s6 m6">
                                <input placeholder="" id="primer_apellido" type="text" className="validate"></input>
                                <label htmlFor="first_name">Primer apellido *</label>
                            </div>
                            <div className="input-field col s6 m6">
                                <input placeholder="" id="segundo_apellido" type="text" className="validate"></input>
                                <label htmlFor="first_name">Segundo apellido </label>
                            </div>
                            <div className="input-field col s6 m6">
                                <select>
                                    <option disabled value="">Tipo de identificación *</option>
                                    <option value="1">Cédula de ciudadanía</option>
                                    <option value="2">Tarjeta de identidad</option>
                                    <option value="3">Cédula extrangera</option>
                                </select>

                            </div>
                            <div className="input-field col s6 m6">
                                <input placeholder="" id="numero_identificacion" type="text" className="validate"></input>
                                <label htmlFor="first_name">Número de identificación *</label>
                            </div>
                            <div className="input-field col s6 m6">
                                <input placeholder="" id="telefono1" type="text" className="validate"></input>
                                <label htmlFor="first_name">Teléfono de contacto 1 *</label>
                            </div>
                            <div className="input-field col s6 m6">
                                <input placeholder="" id="telefono2" type="text" className="validate"></input>
                                <label htmlFor="first_name">Teléfono de contacto 2</label>
                            </div>
                            <div className="input-field col s12 m12">
                                <input placeholder="" id="email" type="text" className="validate"></input>
                                <label htmlFor="first_name">Correo electrónico</label>
                            </div>



                        </div>



                    </div>
                    <div className="modal-footer">
                        <button  className="btn modal-close  ">Confirmar</button>
                    </div>
                </div>


            </div>



        );

    }
}

export default Step4; // Don’t forget to use export default!