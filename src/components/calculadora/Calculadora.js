import React, { Component } from 'react';



import Cuestionario from './cuestionario/Cuestionario';
import Detalle from './detalle/Detalle';
import Inicio from './inicio/Inicio';
import Inscripcion from './inscripcion/Inscripcion';
import Resultado from './resultado/Resultado';
import Modal from './modal/Modal';
import './Calculadora.css';



import { Transition, animated } from 'react-spring/renderprops';

class Calculadora extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;
        this.state = {
            componente: 1,
            email: '',
            mensaje_registro: 'Se ha realizado exitosamente tu inscripción',
            fin_resultado : 0
        }
        this.showComponente = this.showComponente.bind(this);
       
        this.changeMensaje = this.changeComponente.bind(this);
        this.backComponente = this.backComponente.bind(this);
    }
    

    changeComponente(result = -1 ){        
        console.log('Resultado que llego a la funcion '+this.state.fin_resultado);       
        this.setState({ componente: this.state.componente + 1 }); 
        
        if(result != -1){
            if(result == 0){
                this.setState({
                    fin_resultado: 'Bajo'
                })
            }else if(result == 1){
                this.setState({
                    fin_resultado: 'Alto'
                })
            }
            
        }

    }
    backComponente = e => this.setState({ componente: this.state.componente - 1 });
    componentDidMount() {
               
    }
    showComponente = () => {
        switch (this.state.componente) {
            case 1: return <Inicio changeComponente={this.changeComponente.bind(this)} />
            case 2: return <Cuestionario changeComponente={this.changeComponente.bind(this)} />
            case 3: return <Resultado backComponente={this.backComponente} result={this.state.fin_resultado}/>
            case 4: return <Inscripcion changeComponente={this.changeComponente.bind(this)} />
            case 5: return <Detalle />
        }
    }
    render() {

        return (
            <div id="contenedor-calculadora">
                <Modal changeComponente={this.changeComponente} />
                {this.showComponente()}
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!