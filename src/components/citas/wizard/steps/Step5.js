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
            cargando: false,
            cita: false


        };
    }

    componentDidMount() {

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
        dataForm.append("id_paquete", this.props.iditem);
        dataForm.append("nombre_paquete", this.props.textItem);


        if(!this.props.cita){
            axios
            .post("https://emmafig.com/api1/cita", dataForm)
            .then(res => {
                let result = res.data;
                this.setState({ cargando: false })

                this.props.set_state('cita', true)

            });

        }
        


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
            mostrar = <div class="row">
                <div class="col s12 m6 offset-m3">
                    <div class="card ">
                        <div class="card-content white-text">
                            <span class="card-title">Resumen de reserva</span>
                            <p>Señor(a): {this.props.paciente_primer_nombre + ' ' + this.props.paciente_primer_apellido} se ha agendado una cita en la
                                Fundación Innovagen. Te esperamos el {this.props.fecha_cita} a las {this.props.turno}, igualmente hemos enviado
                                un correo electrónico y un mensaje de texto a tu celular recordando esta información</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        }


        return (
            <div id="step5">
                {mostrar}

            </div>



        );

    }
}

export default Step5; // Don’t forget to use export default!