import React, { Component } from 'react';
import './Paquete.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Paquete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: ''
        };
    }

    componentDidMount(){        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
          });
    }
   

    

    render() {
        return (
            <div>
                <div className="col s12 m6 l3">
                    <div className="card ">
                        <div className="card-title white-text">
                            
                            <h4 className="center-align tituloServicio">{this.props.titulo}</h4>
                        </div>
                        <div className="card-content white-text">
                            <h4>$ 190.000</h4>
                            <p>Si separas tu cita por este medio</p>
                        </div>
                        <div className="card-action">
                            <button type="button">Conoce más</button>
                            <br></br>
                            <button type="button" className="btn btn-secondary">Separa tu cita</button>                            
                        </div>
                    </div>
                </div>
                
                <div id="modalPaquete" className="modal">
                    <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                    <button  className="modal-close waves-effect waves-green btn-flat">Agree</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default Paquete; // Don’t forget to use export default!