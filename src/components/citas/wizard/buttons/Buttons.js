import React, { Component } from 'react';
import './Buttons.css'
//import M from 'materialize-css';
//import $ from 'jquery';




class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {


    }

    validate_and_continue(){

        var validate = this.props.validar(this.props.step);
        if(validate){
            this.props.activate_step(this.props.step + 1);
            this.props.actualizar(this.props.step + 1);

        }
        
    }
    validate_and_return(){
        this.props.activate_step(this.props.step - 1 );
        this.props.actualizar(this.props.step - 1 )
    }

    render() {

        let mostrar  = '';

        if(this.props.step != 5){
            mostrar = <button className="btn" onClick={ this.validate_and_continue.bind(this) } type="button" >Siguiente</button>
        }

        return (
            

            <div className="btn_align left-align">
                <button className="btn " onClick={this.validate_and_return.bind(this)} type="button" >Anterior</button>
                {mostrar}
            </div>


        );

    }
}

export default Buttons; // Don’t forget to use export default!

