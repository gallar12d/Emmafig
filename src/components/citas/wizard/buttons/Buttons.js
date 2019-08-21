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

    render() {
        return (
            

            <div className="btn_align left-align">
                <button className="btn " onClick={() => {this.props.activate_step(this.props.step - 1); this.props.actualizar(this.props.step - 1)}} type="button" >Anterior</button>
                <button className="btn" onClick={() => {this.props.activate_step(this.props.step + 1 ) ; this.props.actualizar(this.props.step + 1 )} } type="button" >Siguiente</button>
            </div>


        );

    }
}

export default Buttons; // Don’t forget to use export default!

