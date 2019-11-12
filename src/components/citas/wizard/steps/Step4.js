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
            imagen: process.env.PUBLIC_URL + "/img/logo-mariposa1.png",
            profesionales: [],
            user: {},
            cupon: ''

        };
    }

    componentDidMount() {

        //traer data de usuario


        Axios.get("https://emmafig.com/api1/getUser/" + this.props.id_usuario)
            .then(res => {
                let result = res.data;
                this.setState({ user: res.data.user })
                this.setState({
                    paciente_primer_nombre: res.data.user.primer_nombre,
                    paciente_segundo_nombre: res.data.user.segundo_nombre,
                    paciente_primer_apellido: res.data.user.primer_apellido,
                    paciente_segundo_apellido: res.data.user.segundo_apellido,
                    paciente_numero_identificacion: res.data.user.no_identificacion,
                    paciente_tipo_identificacion: res.data.user.tipo_identificacion,
                    paciente_numero1: res.data.user.telefono1,
                    paciente_numero2: res.data.user.telefono2,
                    paciente_email: res.data.user.correo
                })
                if (res.data.user.primer_nombre) {
                    this.props.set_state('paciente_primer_nombre', res.data.user.primer_nombre)

                }
                else {
                    this.props.set_state('paciente_primer_nombre', '')

                }
                if (res.data.user.segundo_nombre) {
                    this.props.set_state('paciente_segundo_nombre', res.data.user.segundo_nombre)

                }
                else {
                    this.props.set_state('paciente_segundo_nombre', '')

                }
                if (res.data.user.primer_apellido) {
                    this.props.set_state('paciente_primer_apellido', res.data.user.primer_apellido)


                }
                else {
                    this.props.set_state('paciente_primer_apellido', '')


                }
                if (res.data.user.segundo_apellido) {
                    this.props.set_state('paciente_segundo_apellido', res.data.user.segundo_apellido)


                }
                else {
                    this.props.set_state('paciente_segundo_apellido', '')


                }
                if (res.data.user.no_identificacion) {
                    this.props.set_state('paciente_numero_identificacion', res.data.user.no_identificacion)


                }
                else {
                    this.props.set_state('paciente_numero_identificacion', '')


                }
                if (res.data.user.tipo_identificacion) {
                    this.props.set_state('paciente_tipo_identificacion', res.data.user.tipo_identificacion)


                }
                else {
                    this.props.set_state('paciente_tipo_identificacion', '')


                }
                if (res.data.user.telefono1) {
                    this.props.set_state('paciente_numero1', res.data.user.telefono1)


                }
                else {
                    this.props.set_state('paciente_numero1', '')


                }
                if (res.data.user.telefono2) {
                    this.props.set_state('paciente_numero2', res.data.user.telefono2)


                }
                else {
                    this.props.set_state('paciente_numero2', '')


                }
                if (res.data.user.correo) {
                    this.props.set_state('paciente_email', res.data.user.correo)


                }
                else {
                    this.props.set_state('paciente_email', '')


                }


            });


        var elems = $('.mySelect');

        M.FormSelect.init(elems, {});
        elems = $('select');

        M.FormSelect.init(elems, {});

        elems = $('#modal_cita')
        M.Modal.init(elems, {});
        $('#modal_cita').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');

        $('form').on('focus', 'input[type=number]', function (e) {
            $(this).on('mousewheel.disableScroll', function (e) {
                e.preventDefault()
            })
        })
        $('form').on('blur', 'input[type=number]', function (e) {
            $(this).off('mousewheel.disableScroll')
        })

        this.open_modal()

    }
    open_modal() {

        var elem = $('#modal_cita')
        var instance = M.Modal.getInstance(elem);
        instance.open();


    }

    validate_cupon(e) {
        e.preventDefault();
        let cupon = $('#cupon').val();
        let id_user = this.props.id_usuario;
        const dataForm = new FormData();
        dataForm.append("cupon", cupon);
        dataForm.append("id_usuario", id_user);
        this.setState({ cupon: 'loading' })

        Axios
            .post("https://fig.org.co/atlanticv2/usuarios/validate_cupon", dataForm)
            .then(res => {
                let result = res.data;

                if (result) {
                    this.setState({ cupon: 'valido' })
                    alert('Felicitaciones, su cupón ha sido validado!')

                    this.props.set_state('id_bono', result);
                }
                else {
                    this.setState({ cupon: 'invalido' })
                    alert('Cupón no válido para este usuario! ')

                }


            });

    }

    validate_form_user(e) {
        e.preventDefault();
        var next = $('.btn_next')
        console.log(next)
        var validity = $('#form_user')[0].checkValidity()
        if (validity) {

            if (this.props.paciente_primer_nombre == 'User' || this.props.paciente_primer_nombre == 'Usuario') {
                alert('Debes ingresar un primer nombre válido!')

                return false;
            }
            if (this.props.paciente_segundo_nombre == 'User' || this.props.paciente_segundo_nombre == 'Usuario') {
                alert('Debes ingresar un segundo nombre válido o dejar el campo vacío')
                return false;
            }
            if (this.props.paciente_primer_apellido == 'User' || this.props.paciente_primer_apellido == 'Usuario') {
                alert('Debes ingresar un primer apellido válido!')
                return false;
            }
            if (this.props.paciente_segundo_apellido == 'User' || this.props.paciente_segundo_apellido == 'Usuario') {
                alert('Debes ingresar un segundo apellido válido o dejar el campo vacío')
                return false;
            }

            if (!window.confirm('Está seguro que los anteriores datos son válidos?')) {
                return false;
            }

            var elem = $('#modal_cita')
            var instance = M.Modal.getInstance(elem);
            this.props.set_state('informacion_paciente', true)
            instance.close();
            this.props.activate_step(this.props.step + 1);
            this.props.actualizar(this.props.step + 1);
        }
        else {
            $('#form_user')[0].reportValidity()
        }

    }




    render() {

        let btn_loading = (
            <button onClick={this.validate_cupon.bind(this)} class="btn btn_validate_cupon waves-light" name="action">validar
                                    <i class="material-icons right">send</i>
            </button>
        )

        if(this.state.cupon == 'loading'){
            btn_loading = (
                <div class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            )

        }
        else{
            btn_loading = (
                <button onClick={this.validate_cupon.bind(this)} class="btn btn_validate_cupon waves-light" name="action">validar
                                        <i class="material-icons right">send</i>
                </button>
            )

        }

        let validar_boton = '';
        if (this.state.cupon == '') {
            validar_boton = '';
        }

        else if (this.state.cupon == 'valido') {
            validar_boton = (
                <h5>Cupón confirmado</h5>

            )
        }
        else if (this.state.cupon == 'invalido') {
            validar_boton = (
                <h5>Cupón inválido para este usuario</h5>
            )
        }
        else {
            validar_boton = (
                <div class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            )
        }



        return (
            <div className="row step4">

                <div className="col s12 m4 offset-m2 ">
                    <div className="icon_input">
                        <div className='floting'>
                            <MdLocationOn color={'#0ba7ad'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0ba7ad' }}>Punto de atención:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.sede} </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdEvent color={'#0ba7ad'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0ba7ad' }}>Fecha de la cita:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.fecha_cita}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <FaUserNurse color={'#0ba7ad'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0ba7ad' }}>Profesional:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.profesional}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdAccessAlarms color={'#0ba7ad'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0ba7ad' }}>Hora de la cita:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.turno}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <IoIosPerson color={'#0ba7ad'} size={35} />

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
                                <h5 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#492c51' }}>
                                    Completa y/o modifica tus datos para la reserva de cita!
                              </h5>
                                <span>Campos con un asterisco (*) son obligatorios</span>
                            </div>

                        </div>
                        <div className="row">
                            <div className="input-field col s6 m6">
                                <input id="cupon" type="text" className="validate"></input>
                                <label htmlFor="first_name">Tienes un cupon?</label>

                            </div>
                            <div className="input-field col s6 m6">
                                {btn_loading}

                            </div>

                        </div>
                        <div className="row">
                            <div className="col m12">



                                <hr></hr>

                            </div>

                        </div>

                        <div className="row">
                            <form id="form_user">

                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_primer_nombre', e.target.value)} defaultValue={this.state.user.primer_nombre} required id="primer_nombre" type="text" className="validate"></input>
                                    <label className={(this.state.user.primer_nombre) ? 'active' : ''} htmlFor="first_name">Primer nombre *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_segundo_nombre', e.target.value)} defaultValue={this.state.user.segundo_nombre} id="segundo_nombre" type="text" className="validate"></input>
                                    <label className={(this.state.user.segundo_nombre) ? 'active' : ''} htmlFor="first_name">Segundo nombre</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_primer_apellido', e.target.value)} defaultValue={this.state.user.primer_apellido} required id="primer_apellido" type="text" className="validate"></input>
                                    <label className={(this.state.user.primer_apellido) ? 'active' : ''} htmlFor="first_name">Primer apellido *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_segundo_apellido', e.target.value)} defaultValue={this.state.user.segundo_apellido} id="segundo_apellido" type="text" className="validate"></input>
                                    <label className={(this.state.user.segundo_apellido) ? 'active' : ''} htmlFor="first_name">Segundo apellido </label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <select onChange={(e) => this.props.set_state('paciente_tipo_identificacion', e.target.value)} id="tipo_id" name="tipo-id" required value={this.state.user.tipo_identificacion}>
                                        <option value='-1' disabled >Tipo de identificación *</option>

                                        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                        <option value="Cédula extrangera">Cédula extrangera</option>
                                        <option value="Nit">Nit</option>
                                        <option value="Registro civil">Registro civil</option>

                                    </select>
                                    <label className="select_label" htmlFor="tipo_id">Tipo de identificación </label>

                                </div>

                                <div className="input-field col s12 m6">
                                    <input disabled onChange={(e) => this.props.set_state('paciente_numero_identificacion', e.target.value)} defaultValue={this.state.user.no_identificacion} required id="numero_identificacion" type="number" className="validate"></input>
                                    <label className={(this.state.user.no_identificacion) ? 'active' : ''} htmlFor="first_name">Número de identificación *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_numero1', e.target.value)} defaultValue={this.state.user.telefono1} required id="telefono1" type="number" className="validate"></input>
                                    <label className={(this.state.user.telefono1) ? 'active' : ''} htmlFor="first_name">Teléfono de contacto 1 *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_numero2', e.target.value)} defaultValue={this.state.user.telefono2} id="telefono2" type="number" className="validate"></input>
                                    <label className={(this.state.user.telefono2) ? 'active' : ''} htmlFor="first_name">Teléfono de contacto 2</label>
                                </div>
                                <div className="input-field col s12 m12">
                                    <input onChange={(e) => this.props.set_state('paciente_email', e.target.value)} defaultValue={this.state.user.correo} id="email" type="email" className="validate"></input>
                                    <label className={(this.state.user.correo) ? 'active' : ''} htmlFor="first_name">Correo electrónico</label>
                                </div>

                                
                            </form>



                        </div>



                    </div>
                    <div className="modal-footer">
                        <button onClick={this.validate_form_user.bind(this)} className="btn  btn_confirm ">Confirmar</button>
                    </div>
                </div>


            </div>



        );

    }
}

export default Step4; // Don’t forget to use export default!