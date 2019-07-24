import React, { Component } from 'react';


import M from 'materialize-css'
import Cuestionario from './cuestionario/Cuestionario';
import Detalle from './detalle/Detalle';
import Inicio from './inicio/Inicio';
import Inscripcion from './inscripcion/Inscripcion';
import Resultado from './resultado/Resultado';
import './Calculadora.css';

import { Transition, animated } from 'react-spring/renderprops';

class Calculadora extends Component {
    
    constructor(props) {
        super(props);
        this.modal = 1;
        this.state = {            
            componente : 1           
        } 
        this.showComponente = this.showComponente.bind(this);
        this.changeComponente = this.changeComponente.bind(this);
    }    
    changeComponente = e => this.setState({componente: this.state.componente + 1});    
    componentDidMount(){
        var elems = document.getElementById('modal1');
            var instances = M.Modal.init(elems, {});
            this.modal = M.Modal.getInstance(elems);
        
    }
    showComponente = () => {
        switch(this.state.componente){
            case 1: return <Inicio changeComponente={this.changeComponente} />                     
            case 2: return <Cuestionario changeComponente={this.changeComponente}/>
            case 3: return <Resultado />
            case 4: this.modal.close()                    
                    return <Inscripcion changeComponente={this.changeComponente} />
            case 5: return <Detalle />
        }
    }
    render() {

        return (
            <div id="contenedor-calculadora">
                <div id="modal1" className="modal col s10 l4">
                    <div className="modal-content">
                        <form action="#">
                            <p className="center titulo-registro">Registrate</p>
                            <p className="center">Para recibir mas detalles de tu resultado <br />totalmente gratis</p>
                            <div className="row">
                                <a className="waves-effect waves-light btn social facebook" onClick={this.changeComponente}>
                                    <i className="fa fa-facebook"></i> Sign in with facebook</a>
                            </div>
                            <div className="row">
                                <a className="waves-effect waves-light btn social google" onClick={this.changeComponente}>
                                    <i className="fa fa-google"></i> Sign in with google</a>
                            </div>
                        </form>
                    </div>
                </div>
                {this.showComponente()}
                             
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!