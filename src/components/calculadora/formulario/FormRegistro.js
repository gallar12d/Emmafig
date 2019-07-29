import React, { Component } from 'react';

class FormRegistro extends Component {

    constructor(props) {
        super(props);

    }
    render() {

        return (

            <form onSubmit={this.props.changeComponente}>
                <p className="center titulo-registro">Registrate</p>
                <p className="center">Para recibir mas detalles de tu resultado <br />totalmente gratis</p>
                <div className="row">
                    <a className="waves-effect waves-light btn social facebook" onClick={this.props.changeComponente}>
                        <i className="fa fa-facebook"></i> Registro con facebook</a>
                </div>
                <div className="row">
                    <a className="waves-effect waves-light btn social google" onClick={this.props.changeComponente}>
                        <i className="fa fa-google"></i> Registro con google</a>
                </div>
                <p className="center">O<br />Con tu correo personal</p>
                <div className="row">
                    <div className="input-field col s12 l10 offset-l1">
                        <i className="small material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" require="" aria-required="true" />
                        <label htmlFor="email">Correo Personal</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 l10 offset-l1">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="number" className="validate" require="" aria-required="true" />
                        <label htmlFor="icon_telephone">Celular</label>
                    </div>
                </div>
                <div className="row">
                    <a className="waves-effect waves-light btn col s10 offset-s1" onClick={this.props.changeComponente}>Registrarse</a>
                </div>
                <div className="row">
                    <a className="waves-effect waves-light btn col s10 offset-s1" onClick={this.props.changeComponente}>Cancelar</a>
                </div>
            </form>
        );

    }
}

export default FormRegistro; // Don’t forget to use export default!