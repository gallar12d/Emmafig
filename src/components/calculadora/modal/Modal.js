import React, { Component } from 'react';
import './Modal.css';
import FormRegistro from '../formulario/FormRegistro';

class Modal extends Component {

    constructor(props) {
        super(props);

    }
    render() {

        return (

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <FormRegistro changeComponente={this.props.changeComponente}/>
                </div>
            </div>


        );

    }
}

export default Modal; // Don’t forget to use export default!