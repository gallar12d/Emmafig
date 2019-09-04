import React, { Component } from 'react';
import M from 'materialize-css';
import './materialize-social.css';
import '../../../../node_modules/materialize-social/css/materialize.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import './FormRegistro.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import Axios from 'axios';
class FormRegistro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSocialButtons: 0,
            showConfirmation: 0,
            celularError: 0,
            codigo: 0,
            correo: '',
            celular: '',
            primer_nombre: '',
            password: '',
            avatar: '',
            id_social: '',
            canal_registro: ''
        }
        this.showSocialButtons = this.showSocialButtons.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.validarCelular = this.validarCelular.bind(this);
        this.showConfirmation = this.showConfirmation.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    btnOnclick = () => {
        let nombre = document.getElementById('name');
        let nombreError = document.getElementById('nombre-error');
        let email = document.getElementById('email');
        console.log(email.value);
        let emailError = document.getElementById('correo-error');
        if (nombre.value == "") {
            nombreError.style.display = "block";
            nombreError.classList.remove("celular-animation");
            void nombreError.offsetWidth;
            nombreError.classList.add("celular-animation");
        } else if (this.validarEmail(email.value)) {
            this.nombre = nombre.value;
            this.email = email.value;
            this.closeModal();
        } else {
            emailError.style.display = "block";
            emailError.classList.remove("celular-animation");
            void emailError.offsetWidth;
            emailError.classList.add("celular-animation");
        }

    }
    closeModal = () => {
        M.Modal.getInstance(document.getElementById('modal1')).close();
        this.props.changeComponente();
    }
    responseFacebook = (response) => {
        console.log(response);
        this.nombre = response.name;
        this.email = response.email;
        this.closeModal();
        window.FB.logout();
    }

    responseGoogle = (response) => {
        this.setState({
            primer_nombre: response.profileObj.name,
            correo: response.profileObj.email,
            celular: this.state.celular,
            avatar: response.profileObj.imageUrl,
            canal_registro: 'Google',
            id_social: response.profileObj.googleId
        });

        console.log(response.profileObj);
        Axios.post('http://localhost:8080/api1/rest-api-authentication-example/api/create_user.php', {
            "primer_nombre": this.state.primer_nombre,
            "correo": this.state.correo,
            "password": this.state.password,
            "celular": this.state.celular,
            "avatar": this.state.avatar,
            "canal_registro": this.state.canal_registro,
            "id_social": this.state.id_social
        }
        )
            .then(res => {
                console.log(res.data.message);                
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
        this.closeModal();
    }
    validarCodigo = () => {
        let codigo = document.getElementById('codigo');
        let codigoError = document.getElementById('codigo-error');
        let btn_confirm = document.getElementById('btn_confirm');
        let cont_celular = document.getElementById('cont_celular');
        let cont_confirm = document.getElementById('cont_confirm');
        if (codigo.value == this.state.codigo) {
            cont_celular.style.display = 'none';
            cont_confirm.style.display = 'none';
            btn_confirm.style.display = 'none';
            codigo.setAttribute("disabled", "true");
            this.setState({
                showSocialButtons: 1
            });
        } else {
            codigoError.style.display = "block";
            codigoError.classList.remove("celular-animation");
            void codigoError.offsetWidth;
            codigoError.classList.add("celular-animation");
        }
    }
    validarCelular = () => {
        let errortext = "Por favor digite un numero de celular para continuar";
        let celular = document.getElementById('celular');
        let celularError = document.getElementById('celular-error');
        let btn_celular = document.getElementById('btn_celular');
        if (celular.value === "" || celular.value.length < 10) {
            console.log("value cel " + celular.value);
            if (celular.value.length < 10 && celular.value !== "") {
                errortext = "El Número de celular debe ser de 10 digitos";
            }
            celularError.innerHTML = errortext;
            celularError.style.display = "block";
            celularError.classList.remove("celular-animation");
            void celularError.offsetWidth;
            celularError.classList.add("celular-animation");
        } else {
            if (celular.value.length == 10) {
                let prefijo = celular.value.substr(0, 3);
                switch (prefijo) {
                    case '300':
                    case '301':
                    case '302':
                    case '304':
                    case '305':
                    case '310':
                    case '311':
                    case '312':
                    case '313':
                    case '314':
                    case '320':
                    case '321':
                    case '322':
                    case '323':
                    case '315':
                    case '316':
                    case '317':
                    case '318':
                    case '319':
                    case '350':
                    case '351':
                        this.celular = celular.value;
                        celular.setAttribute("disabled", "true");
                        btn_celular.style.display = "none";
                        celularError.style.display = "none";
                        this.setState({
                            showConfirmation: 1,
                            celular: celular.value
                        });
                        this.showConfirmation();
                        //fetch("http://localhost/api1/sendKey.php?celular="+celular.value)
                        fetch("https://emmafig.com/api1/sendKey.php?celular=" + celular.value)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    console.log(result);
                                    if (result.estado == 'sent') {
                                        console.log(result.codigo)
                                        this.setState({
                                            codigo: result.codigo
                                        });
                                        this.setState({
                                            showConfirmation: 1
                                        });
                                        this.showConfirmation();
                                    }
                                },
                                (error) => {
                                    alert('Error');
                                }
                            )
                        break;
                    default: errortext = "Numero de celular no valido";
                        celularError.innerHTML = errortext;
                        celularError.style.display = "block";
                        celularError.classList.remove("celular-animation");
                        void celularError.offsetWidth;
                        celularError.classList.add("celular-animation");
                        break;
                }

            }
        }
        //this.props.changeComponente
    }
    validarEmail = (valor) => {
        console.log(valor);
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(valor)) {

            return true;
        } else {

            return false;
        }
    }
    showConfirmation = () => {
        if (this.state.showConfirmation == 1) {
            return (
                <div id='cont_confirm'>
                    <p id="info-confirm" className="center info-codigo">Por favor ingresa el código de confirmación que se envío a tu celular</p>
                    <div id="cod-confirm" className="row">
                        <div className="input-field col s12 l10 offset-l1">
                            <i className="material-icons prefix">confirmation_number</i>
                            <input id="codigo" type="number" className="validate" require="" aria-required="true" />
                            <label htmlFor="codigo">Código</label>
                            <p id="codigo-error" className="center cel-error">Por favor digite el código de confirmación correctamente</p>
                        </div>
                    </div>
                    <div id="btn_confirm" className="row">
                        <a className="waves-effect waves-light btn col s10 offset-s1" onClick={this.validarCodigo}>Confirmar Código</a>
                    </div>
                </div>

            );
        } else {
            return null;
        }

    }
    showSocialButtons = () => {
        if (this.state.showSocialButtons == 1) {
            return (
                <div>
                    <p className="center info-codigo">¡Felicitaciones! tu código ha sido confirmado</p>
                    <p className="center info-codigo">Para continuar con el registro puedes escoger una de las siguientes opciones</p>
                    <FacebookLogin
                        autoLoad={true}
                        reauthenticate={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        render={renderProps => (
                            <button className="waves-effect waves-light btn social facebook" onClick={renderProps.onClick}><i className="fa fa-facebook"></i> Registro con facebook</button>
                        )}
                    />
                    <GoogleLogin
                        clientId="561278280469-2log5p766o9f84ednmr84mstiotqsdir.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                        buttonText="Registro con Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        render={renderProps => (
                            <button className="waves-effect waves-light btn social google" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google"></i> Registro con google</button>
                        )}
                    />
                    <p className="center">O<br />Con tu correo personal</p>
                    <div className="row">
                        <div className="input-field col s12 l10 offset-l1">
                            <i className="small material-icons prefix">person</i>
                            <input id="name" type="text" className="validate" required="" aria-required="true" />
                            <label htmlFor="name">Nombre *</label>
                            <p id="nombre-error" className="center cel-error">Por favor digite su nombre</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 l10 offset-l1">
                            <i className="small material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" required="" aria-required="true" />
                            <label htmlFor="email">Correo Personal *</label>
                            <p id="correo-error" className="center cel-error">Correo no válido</p>
                        </div>
                    </div>
                    <div className="row">
                        <a className="waves-effect waves-light btn col s10 offset-s1" onClick={this.btnOnclick}>Registrarse</a>
                    </div>
                    <div className="row">
                        <a className="waves-effect waves-light btn col s10 offset-s1" onClick={this.props.changeComponente}>Cancelar</a>
                    </div>
                </div>
            );

        }
    }
    render() {

        return (

            <form /*onSubmit={this.props.changeComponente}*/>
                <p className="center titulo-registro">Registrate</p>
                <p className="center subtitulo-registro">Para recibir mas detalles de tu resultado <br />totalmente gratis</p>
                <div id="cont_celular" className="row">
                    <div className="input-field col s12 l10 offset-l1">
                        <i className="material-icons prefix">phone</i>
                        <input id="celular" type="number" className="validate" require="" aria-required="true" />
                        <label htmlFor="celular">Celular</label>
                        <p id="celular-error" className="center cel-error">Por favor digite un numero de celular para continuar</p>

                    </div>
                </div>
                <div id="btn_celular" className="row">
                    <a className="waves-effect waves-light btn col s10 offset-s1" onClick={this.validarCelular}>Aceptar</a>
                </div>
                {
                    this.showConfirmation()
                }
                {
                    this.showSocialButtons()
                }
            </form>
        );

    }
}

export default FormRegistro; // Don’t forget to use export default!