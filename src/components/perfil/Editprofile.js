import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";

//import { ValidatorComponent,ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



class Editprofile extends Component {
    constructor(props) {

        super(props);
        this.timer = null;
        this.startedOn = 0;
        this.state = {
            primer_nombre: '',

        }

        /*
        this.start = this.start.bind( this );
        this.stop = this.stop.bind( this );
        */
    }

    componentDidMount() {
        M.Collapsible.init(this.Collapsible);
        document.querySelector('#btnSetUserInfo').addEventListener('click', function () {
            document.querySelector('#formPersonalInfo').reportValidity();

        });
        document.querySelector('#btnSetEmail').addEventListener('click', function () {
            document.querySelector('#formSetEmail').reportValidity();

        });
    }



    render() {



        return (

            <div className="EditProfile">



                <div className="container emp-profile">
                    <h4 className="headTitle">Configuracion general de la cuenta</h4>

                    <ul ref={Collapsible => { this.Collapsible = Collapsible }} className="collapsible">
                        <li>
                            <div className="collapsible-header resetBorder" id="UserName"><i className="large material-icons">person</i>Informacion personal</div>
                            <div className="collapsible-body">

                                <form id="formPersonalInfo" method="post">

                                    <div className="row">



                                        <div className="input-field col s6 ">

                                            <input id="primer_nombre" type="text" className="validate" name="primer_nombre" required maxLength="10" />
                                            <label className="active" for="primer_nombre">Primer nombre</label>


                                        </div>

                                        <div className="input-field col s6 ">
                                            <input id="segundo_apellido" type="text" className="validate" required maxLength="10" />
                                            <label className="active" for="segundo_apellido">Segundo nombre</label>
                                        </div>
                                        <div className="input-field col s6 ">
                                            <input id="first_apellido" type="text" className="validate" required maxLength="10" />
                                            <label className="active" for="first_apellido">Primer apellido</label>
                                        </div>
                                        <div className="input-field col s6 ">
                                            <input id="segundo_apellido" type="text" className="validate" required maxLength="10" />
                                            <label className="active" for="segundo_apellido">Segundo apellido</label>
                                        </div>





                                    </div>
                                    <button className="waves-light btn" id="btnSetUserInfo" >Guardar cambios</button>
                                </form>



                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header resetBorder"><i className="large material-icons">email</i>Correo</div>
                            <div className="collapsible-body">
                                <form id="formSetEmail">
                                    <div className="row">


                                        <div className="input-field col s6 ">
                                            <input id="email" type="email" className="validate" required />
                                            <label for="email">Email</label>
                                        </div>


                                    </div>
                                    <a className="waves-light btn" id="btnSetEmail" >Guardar cambios</a>
                                </form>

                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header resetBorder"><i className="large material-icons">fingerprint</i>Contraseña</div>
                            <div className="collapsible-body">
                                <form id="formContraseña">

                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="password" type="password" className="validate" maxLength="10" required />
                                        <label for="password">Contraseña actual</label>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <p>Ingrese una contraseña de maximo 10 caracteres.</p>
                                        </div>
                                        <div className="input-field col s6"    >
                                            <input id="password" type="password" className="validate" maxLength="10" required />
                                            <label for="password">Nueva contraseña</label>

                                        </div>
                                        <div className="input-field col s6"    >
                                            <input id="password" type="password" className="validate" maxLength="10" required />
                                            <label for="password">Confirmar contraseña</label>

                                        </div>
                                    </div>
                                </div>
                                <a className="waves-light btn" id="btnSetContraseña">Guardar cambios</a>
                                </form>

                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header resetBorder"><i className="large material-icons">phone_android</i>Numero de telefono</div>
                            <div className="collapsible-body">
                                <div className="row">
                                    <div className="input-field col s6 ">
                                        <input id="numeroTelefono" type="number" className="validate" />
                                        <label for="numeroTelefono">Numero de telefono</label>
                                    </div>

                                </div>
                                <a className="waves-light btn" >Guardar cambios</a>

                            </div>
                        </li>
                    </ul>





                </div>


            </div>
        );
    }


}
export default Editprofile;