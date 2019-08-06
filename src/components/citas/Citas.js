import React, { Component } from 'react';
import './Citas.css'
import Paquetes from './paquetes/Paquetes'

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="citas">
                <div className="container headcitas">
                    <div className="row ">
                        <h4 className="titulocitas">
                            Consigue información personalizada
                        </h4>
                        <h5 className="subtitleCitas">En la fundación InnovaGen contamos con la mejor tecnología para la detección temprana de Cáncer de Cuello Uterino, no dejes pasar esta oportunidad, ven separa tu cita</h5>                       
                    </div>                    
                </div>
                <Paquetes></Paquetes> 
                <div className="moreServices">
                <a  target="_blank" href="http://www.fig.org.co">Conoce más servicios</a>
                    </div>               
                
               

            </div>

        );

    }
}

export default Citas; // Don’t forget to use export default!