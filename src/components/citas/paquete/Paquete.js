import React, { Component } from 'react';
import './Paquete.css'

class Paquete extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <div className="col s12 m3 l3">
                    <div className="card ">
                        <div className="card-title white-text">
                            
                            <h4 className="tituloServicio">Citología en Base Líquida</h4>
                        </div>
                        <div className="card-content white-text">
                            <h4>$ 190.000</h4>
                            <p>Si separas tu cita por este medio</p>
                        </div>
                        <div className="card-action">
                            <button type="button">Conoce más</button>
                            <br></br>
                            <button type="button">Separa tu cita</button>
                        </div>
                    </div>
                </div>



            </div>
        );

    }
}

export default Paquete; // Don’t forget to use export default!