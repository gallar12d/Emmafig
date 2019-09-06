import React, { Component } from 'react';
import './Citas.css'
import Paquetes from './paquetes/Paquetes'
import Wizard from './wizard/Wizard'
import Step4 from './wizard/steps/Step4'

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textItem: '',
            iditem: '', 
            step_activated: 0,
            id_sede: '', 
            sede: '', 
            fecha_cita: '', 
            id_profesional: '', 
            profesional: '',
            todos_profesionales: false,
            id_turno: '',
            turno: ''




        };
        this.itemSelected = this.itemSelected.bind(this)
    }

   

    set_state(nombre, valor){
        
        this.setState({[nombre]: valor});
    }
    


    itemSelected(id, nombre){
        this.setState({iditem: id, textItem: nombre, step_activated: 1});
    }
    activate_step(num){
        this.setState({step_activated: num});

    }

    render() {

        let seccion;
        
        if(this.state.step_activated == 0){
            seccion = ( 
            <div>
                <Paquetes   item ={this.itemSelected}>                
                </Paquetes>
                <div className="moreServices">
                    <a alt='' target="_blank" href="http://www.fig.org.co">Conoce más servicios</a>
                </div>       
        
            </div>
             );
        }
        else{
            seccion = ( <Wizard   {...this.state} set_state = {this.set_state.bind(this)}  step = {this.state.step_activated}  activate_step = {this.activate_step.bind(this)} id_servicio={this.state.iditem} nombre_servicio={this.state.textItem} ></Wizard> );

        }


        return (
            <div id="citas" >
                <div className="container headcitas">
                    <div className="row ">
                        <h4 className="titulocitas">
                            Agenda tu cita
                        </h4>
                        <h5 className="subtitleCitas">En la fundación InnovaGen contamos con la mejor tecnología para la detección temprana de Cáncer de Cuello Uterino, no dejes pasar esta oportunidad, ven separa tu cita</h5>                       
                    </div>                    
                </div>
               {seccion}   
               


                            
                
               

            </div>

        );

    }
}

export default Citas; // Don’t forget to use export default!