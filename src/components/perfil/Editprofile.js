import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";

//import { ValidatorComponent,ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



class Editprofile extends Component {
    constructor(props) {

        super(props);
        this.state = {
            
        }

    }

    componentDidMount() {
        M.Collapsible.init(this.Collapsible);
        M.Tabs.init(this.Tabs);
        
    }
    validarFormulario(form,e){
        e.preventDefault()
        var formTap = document.querySelector("#"+form+"");
        if(form == 'formPassword'){
            //valifar que los valores de las contraseñas sea iguales
            var password = document.getElementById("newPassword").value;
            var passwordRepeat = document.getElementById("passwordRepeat").value;
            if(password != passwordRepeat){
                alert("las contraseñas no coinciden");

            }

        }else{

            if(formTap.checkValidity()){
               
                //continuar con el proceso de actualizar la informacion en la base de datos
            }else{
                    formTap.reportValidity();
            }
        }


    }

    render() {
        return (

            <div className="EditProfile ">


                <div className="row">
                    <div className="col m4">
                    
                        <ul className="tabs" ref={Tabs => {
                            this.Tabs = Tabs;
                        }}>
                            <li className="tab "><a href="#infoUser" className="active"><i className="small material-icons floatElement">person</i>Informacion personal</a></li>
                            <li className="tab "><a href="#emailContent"><i className="small material-icons floatElement">email</i>Correo</a></li>
                            <li className="tab  "><a href="#passwordContent"><i className="small material-icons floatElement">fingerprint</i>Contraseña</a></li>
                            <li className="tab "><a href="#numeroContent"><i className="small material-icons floatElement">phone_android</i>Numero de telefono</a></li>
                        </ul>
                        
                    </div>
                    <div className="col m8 ">
                      

                            <div id="infoUser" className="col tab-content">

                                <form id="formPersonalInfo" className="form-content">

                                    <div className="input-field col s12 ">

                                        <input id="primer_nombre" type="text" className="validate" name="primer_nombre" required maxLength="10" />
                                        <label className="active" htmlFor="primer_nombre">Primer nombre</label>


                                    </div>

                                    <div className="input-field col s12 ">
                                        <input id="segundo_nombre" type="text" className="validate" maxLength="10" />
                                        <label className="active" htmlFor="segundo_nombre">Segundo nombre</label>
                                    </div>
                                    <div className="input-field col s12 ">
                                        <input id="first_apellido" type="text" className="validate" required maxLength="10" />
                                        <label className="active" htmlFor="first_apellido">Primer apellido</label>
                                    </div>
                                    <div className="input-field col s12 ">
                                        <input id="segundo_apellido" type="text" className="validate" maxLength="10" />
                                        <label className="active" htmlFor="segundo_apellido">Segundo apellido</label>
                                    </div>
                                    <button className="waves-light btn" id="btnSetUserInfo" onClick={(e)=> this.validarFormulario("formPersonalInfo", e)} >Guardar cambios</button>

                                </form>

                            </div>

                            <div id="emailContent" className="col tab-content">

                                <form className="form-content" id="emailForm">
                                    <div className="input-field col s12 ">
                                        <input id="email" type="email" className="validate" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <button className="waves-light btn" id="btnSetEmail" onClick={(e)=> this.validarFormulario("emailForm",e)} >Guardar cambios</button>

                                </form>
                            </div>

                            <div id="passwordContent" className="col tab-content">
                                <form className="form-content" id="formPassword">

                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="password" type="password" className="validate" maxLength="10" required />
                                            <label htmlFor="password">Contraseña actual</label>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <p>Ingrese una contraseña de maximo 10 caracteres.</p>
                                            </div>
                                            <div className="input-field col s6"    >
                                                <input id="newPassword" type="password" className="validate" maxLength="10" required />
                                                <label htmlFor="password">Nueva contraseña</label>

                                            </div>
                                            <div className="input-field col s6"    >
                                                <input id="passwordRepeat" type="password" className="validate" maxLength="10" required />
                                                <label htmlFor="password">Confirmar contraseña</label>

                                            </div>
                                        </div>
                                        <button className="waves-light btn" id="btnSetPass" onClick={(e)=> this.validarFormulario("formPassword",e)} >Guardar cambios</button>
                                    </div>

                                </form>


                            </div>

                            <div id="numeroContent" className="col tab-content">
                                <form className="form-content" id="formTel">

                                    <div className="input-field col s12 ">
                                        <input id="numeroTelefono" type="number" className="validate" maxLength="9" />
                                        <label htmlFor="numeroTelefono">Numero de telefono</label>
                                    </div>
                                    <button className="waves-light btn" id="btnSetTelefono" onClick={(e)=> this.validarFormulario("formTel",e)} >Guardar cambios</button>


                                </form>
                            </div>
                        



                    </div>
                </div>
            </div>
        );
    }


}
export default Editprofile;