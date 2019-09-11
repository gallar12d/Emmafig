import React, { Component } from 'react';
import './Modal.css';
import M from 'materialize-css'
import FormRegistro from '../formulario/FormRegistro';
import $ from 'jquery';
class Modal extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;

    }
    componentDidMount() {
        
        var elems = document.getElementById(this.props.id);
        var instances = M.Modal.init(elems, {dismissible: false});
        
    }
    render() {

        return (

            <div id={this.props.id} className="modal">
                <div className="modal-content">
                    <FormRegistro changeComponente={this.props.changeComponente} modal={this.modal} changeLogin={this.props.changeLogin} viewPerfil={this.props.viewPerfil}/>
                </div>
            </div>


        );

    }
}

export default Modal; // Don’t forget to use export default!