import React, { Component } from 'react';
import './Paquetes.css'
import Paquete from '../paquete/Paquete'

class Paquetes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            
                <div className="row espacioPack">
                        <Paquete titulo={'Citología en base líquida'}></Paquete>
                        <Paquete  titulo={'Prueba de ADN-VPH'}></Paquete>
                        <Paquete  titulo={'Cotest: Citología + VPH'}></Paquete>
                        <Paquete  titulo={'Paquete preventivo'}></Paquete>
                </div>

            

        );

    }
}

export default Paquetes; // Don’t forget to use export default!