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
        var elems = $('select');

        M.FormSelect.init(elems, {});

        Axios.get(`https://emmafig.com/api1/profesionales`)
            .then(res => {
                const profesionales = res.data;
                this.setState({ profesionales });
            })

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
                            <div style={{ margin: '0px', color: 'black' }} className="input-field ">
                                <select defaultValue={{ label: "Selecciona un turno disponible para esta fecha", value: 0 }}>
                                    <option  >Completa tus datos básicos para la cita</option>

                                </select>

                            </div>

                        </div>

                    </div>



                    <br></br>


                </div>
                <div className="col s12 m4 offset-m1  img_step4 ">
                    <img alt="" src={this.state.imagen} />

                </div>

            </div>



        );

    }
}

export default Step4; // Don’t forget to use export default!