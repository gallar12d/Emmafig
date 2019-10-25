import React, { Component } from 'react';
import './ModalInscrip.css';
import M from 'materialize-css';
import $ from 'jquery';
class ModalInscrip extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;

    }
    componentDidMount() {
        var elems = document.getElementById('modal2');
        
    }
    render() {

        return (

            <div id='modal2' className="modal">
                <div className="modal-content">
                    <h5 className='titulo_reg'>¡Felicitaciones!</h5>
                    <h6 className="subtitulo_reg">Registro exitoso</h6>
                    <p className="center info-codigo">Podrás participar de promociones en nuestros servicios, además recibirás noticias de eventos <br />totalmente gratis</p>
                    <a className="waves-light btn col s10 offset-s1 btn_ok">Aceptar</a>                    
                </div>
            </div>


        );

    }
}

export default ModalInscrip; // Don’t forget to use export default!