import React, { Component } from 'react';
import './Step2.css'
import M from 'materialize-css';
import $ from 'jquery';
import { FaUserNurse, FaLinkedin } from 'react-icons/fa';
import Buttons from '../buttons/Buttons'
import Axios from 'axios';
class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/citas_step1.svg",
            profesionales: [],
            turnos: 0,
            htmlProfesionales: [],
            id_selected: 1

        };
    }

    componentDidMount() {
        var elems = $('.mySelect');
        M.FormSelect.init(elems, {});
        Axios.get(`https://emmafig.com/api1/profesionales/` + this.props.id_sede + '/' + this.props.fecha_cita)
            .then(res => {
                const profesionales = res.data.profesionales;
                const turnos = res.data.turnos;
                if (!res.data.profesionales.length) {
                    this.props.set_state('todos_profesionales', false)
                    this.props.set_state('id_profesional', '')
                }
                else {
                    this.props.set_state('todos_profesionales', true)
                }

                this.setState({ profesionales });
                this.setState({ turnos });
                var elems = document.querySelectorAll('.modal');
                M.Modal.init(elems, {});
                $('.modal').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');
            })

            

    }

    ucword(word) {
        var lsCadena = word.toLowerCase();
        lsCadena = lsCadena.charAt(0).toUpperCase() + lsCadena.slice(1);

        return lsCadena;
    }

    showprof = (id) => {
        this.setState({id_selected: id})

    }
    render() {



        let prof = '';
        let index2 = 0;

        if (this.state.turnos > 0) {



            prof = this.state.profesionales.map((profesional, index) => {
                let requi = '';
                if (index == 0) {
                    requi = true;
                }
                else {
                    requi = false;
                }
                let nombre2 = '';
                if (profesional.segundo_nombre)
                    nombre2 = profesional.segundo_nombre
                let apellido2 = '';
                if (profesional.segundo_apellido)
                    apellido2 = profesional.segundo_apellido

                let check = false;
                if (this.props.id_profesional == profesional.id_usuario) {
                    check = true;
                }


                if(profesional.descripcion){
                    
                    return (
                        <div key={profesional.id_usuario}>
                            <div className="input-field ">
                                <div className="icon_input" >
                                    <label>
                                        <input checked={check} onChange={() => { this.props.set_state('id_profesional', profesional.id_usuario); this.props.set_state('profesional', this.ucword(profesional.primer_nombre) + ' ' + this.ucword(nombre2) + ' ' + this.ucword(profesional.primer_apellido) + ' ' + this.ucword(apellido2)); this.showprof(index)  }} className="with-gap" name="id_profesional" value={profesional.id_usuario} type="radio" />
                                        <span style={{ color: 'black' }}>{this.ucword(profesional.primer_nombre) + ' ' + this.ucword(nombre2) + ' ' + this.ucword(profesional.primer_apellido) + ' ' + this.ucword(apellido2)}</span>
                                    </label>
                                    <a onClick={()=> {  this.showprof(index) }} className=" modal-trigger" href={'#/'}>
                                        <FaUserNurse className="icon" size={25} />
    
                                    </a>
    
                                </div>
                            </div>
    
    
                        </div>
                    )
                    index2 = index

                }

                

                
            })
            

        }




        let todos_check = '';
        if (this.props.id_profesional) {
            let todos_check = false;

        }

        let todos_show = '';



        if (this.state.profesionales.length && this.state.turnos > 0) {

            todos_show = (
                <label>
                    <input checked={(this.props.id_profesional) ? false : true} onChange={() => { this.props.set_state('id_profesional', ''); this.props.set_state('profesional', ''); this.props.set_state('todos_profesionales', true) }} className="with-gap" name="id_profesional" value="0" type="radio" />
                    <span style={{ color: 'black' }} >Todas las agendas</span>
                </label>
            )

        }
        else {

            if (this.state.turnos == 0) {
                todos_show = (
                    <label>
                        <span style={{ color: 'black' }} >No existen turnos disponibles para la fecha seleccionada</span>
                    </label>
                )

            }
            else {
                todos_show = (
                    <label>
                        <span style={{ color: 'black' }} >No existen profesionales para esta sede</span>
                    </label>
                )

            }


        }

        let htmlProfesionales = '';
        if (this.state.profesionales.length) {

            let  nombre2 = '';
            let apellido2 = '';

            if(this.state.profesionales[this.state.id_selected].segundo_nombre){
                nombre2 = this.state.profesionales[this.state.id_selected].segundo_nombre
            }
            if(this.state.profesionales[this.state.id_selected].segundo_apellido){
                apellido2 = this.state.profesionales[this.state.id_selected].segundo_apellido
            }
            htmlProfesionales = (

                <div className="row">
                    <div style={{ marginTop: '15px'}} className="col s6 m6 l6">
                        <img alt='' style={{ width: '100%' }} src={'http://emmafig.com/api1/public/images/' + this.state.profesionales[this.state.id_selected].avatar}>
                        </img>
                    </div>
                    <div className="col s6 m6 l6">
                        <h5 style={{ color: '#492c51', fontWeight: 'bolder', fontFamily: 'lato' }} className="title_modal_profesionales">Nuestros profesionales</h5>
                        <hr></hr>
                        <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato' }} >{this.state.profesionales[this.state.id_selected].primer_nombre + ' ' + nombre2 + ' ' + this.state.profesionales[this.state.id_selected].primer_apellido + ' ' + apellido2}</h6>
                        <h6 style={{ color: '#5ea4aa', fontWeight: 'bolder', fontFamily: 'lato' }} className="title_modal_profesionales">{this.state.profesionales[this.state.id_selected].especialidad}</h6>
                        <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato' }} >Registro Médico Número: {this.state.profesionales[this.state.id_selected].registro_medico_numero}</h6>
                        <p>{this.state.profesionales[this.state.id_selected].descripcion}</p>
                        <br></br>

                        <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato' }} >Sigue a este profesional en linkedin: <a target="_blank" href={this.state.profesionales[this.state.id_selected].red_linkedin}><FaLinkedin></FaLinkedin></a></h6>
                    </div>

                </div>
            )

        }




        return (
            <div className="row step2">
                <div className="col s12 m4 offset-m2 scrollable_profesionals ">
                    <h6 className="left-align step2_subtitle">Selecciona el profesional que desees</h6>
                    {prof}
                    <div className="input-field ">
                        <div className="icon_input" >
                            {todos_show}
                            <br></br>
                            <br></br>
                        </div>
                    </div>



                </div>
                
                <div className="col s12 m4 img_step1  scrollable_profesionals">

                {htmlProfesionales}

                </div>

            </div>



        );

    }
}

export default Step2; // Don’t forget to use export default!