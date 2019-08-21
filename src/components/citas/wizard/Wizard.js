import React, { Component } from 'react';
import Steps from './steps/Steps';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Buttons from './buttons/Buttons';


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

    render() {
        let step;

        switch (this.props.step) {
            case 1:
                step = (<Step1 set_state = {this.props.set_state}  step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 2:
                step = (<Step2 set_state = {this.props.set_state}  step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 3:
                step = (<Step3 set_state = {this.props.set_state} {...this.props} step={this.props.step}  activate_step={this.props.activate_step} />)
                break;
            case 4:
                    step = (<Step4 set_state = {this.props.set_state} {...this.props} step={this.props.step}  activate_step={this.props.activate_step} />)
                    break;
                
            default:
                step = '';

        }



        return (
            <div className="row wizardCitas">

                <Steps />
                <h4 style={{ color: '#c73a8c', fontWeight: 'bolder' }}>{this.props.nombre_servicio}</h4>
                {step}
                <div className="row">
                <div className="col s12 m4 offset-m2 ">
                <Buttons step={this.props.step} activate_step={this.props.activate_step} />

                </div>
                </div>
                

            </div>


        );

    }
}

export default Wizard; // Don’t forget to use export default!