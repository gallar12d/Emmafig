import React, { Component } from 'react';


import M from 'materialize-css'
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
            componente: 1
        }
        this.showComponente = this.showComponente.bind(this);
        this.changeComponente = this.changeComponente.bind(this);
        this.backComponente = this.backComponente.bind(this);
    }
    changeComponente = e => {
        this.setState({ componente: this.state.componente + 1 });        
    };
    backComponente = e => this.setState({ componente: this.state.componente - 1 });
    componentDidMount() {
        var elems = document.getElementById('modal1');
        var instances = M.Modal.init(elems, {});
        this.modal = document.getElementById('modal1');

    }
    showComponente = () => {
        switch (this.state.componente) {
            case 1: return <Inicio changeComponente={this.changeComponente} />
            case 2: return <Cuestionario changeComponente={this.changeComponente} />
            case 3: return <Resultado backComponente={this.backComponente} />
            case 4: this.modal.close()
                return <Inscripcion changeComponente={this.changeComponente} />
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