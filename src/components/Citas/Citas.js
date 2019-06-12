import React, { Component } from 'react';
import axios from 'axios';
import './Citas.css'

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <section className=" layoutSeccion" id="citas">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h4 className="tituloCitas">Consigue información personalizada</h4>
                            <h6 className="subtituloCitas">Si te es necesario, separa tu cita yá</h6>

                        </div>
                    </div>


                </div>
                <div className="row">
                    <div className="col s12 m12 l6">
                        <h6 className="parrafoCitas center-align flow-text">
                            En la Fundación innovaGen contamos con la mejor
                            tecnologia para la detección temprana de Cáncer de
                            Cuello Uterino, no dejes pasar esta oportunidad,
                            ven separa tu cita...
                        </h6>
                        <div className="selectCitas">
                            <form className="col s12">
                                <div className="row">
                                <div className="input-field col s12">
                                    <i className="prefixIcon material-icons prefix">location_on</i>
                                        <select>
                                            <option defaultValue  disabled >Seleccione el punto de atención</option>
                                            <option value="1">Popayán</option>
                                            <option value="2">Santander de Quilichao</option>
                                            <option value="3">Cali</option>
                                        </select> 
                                        
                                    </div>
                                    <div className="input-field col s12">
                                        <i className=" prefixIcon material-icons prefix">event</i>
                                        <input id="icon_prefix" type="text" className="validate"></input>
                                        
                                    </div>
                                    
                                    
                                    <div className="input-field col s12">
                                        <i className=" prefixIcon material-icons prefix">alarm</i>
                                        <input  id="icon_prefix" type="submit" value="Buscar turnos disponibles" className=" botonBuscarCitas"></input>
                                        
                                    </div>
                                    
                                    
                                </div>
                            </form>

                        </div>



                    </div>
                    <div className="col s6">
                    </div>
                </div>

                



            </section>
        );

    }
}

export default Citas; // Don’t forget to use export default!