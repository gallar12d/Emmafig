import React, { Component } from 'react';
import Steps from './steps/Steps';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Buttons from './buttons/Buttons';
import $ from 'jquery';


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clases:
            {
                1: { circle: 'circulo-actual', text: 'texto-actual', line: 'linea-actual' },
                2: { circle: 'circulo', text: 'texto', line: 'linea' },
                3: { circle: 'circulo', text: 'texto', line: 'linea' },
                4: { circle: 'circulo', text: 'texto', line: 'linea' },

            }


        };
    }

    validateForm() {
        var error = true;

        var elementos = $('#formularios input');

        if (elementos) {
            $.each(elementos, function (k, v) {

                if ($(v).is(':radio')) {


                    if (!$(v).is(':checked')) {


                        error = true;
                    }

                }

                if ($(v).is('input:text')) {


                    var val = $(v).val();

                    if (!val) {

                        error = false;
                    }


                }

            })
        }


    }


    actualizar(step) {




        for (let i = 1; i <= 4; i++) {

            if (i < step) {

                this.setState(state => {
                    state.clases[i].circle = 'circulo-ok'
                    state.clases[i].text = 'texto-ok'
                    state.clases[i].line = 'linea-ok'

                    return state
                })
            }
            if (i == step) {

                this.setState(state => {
                    state.clases[i].circle = 'circulo-actual'
                    state.clases[i].text = 'texto-actual'
                    state.clases[i].line = 'linea-actual'

                    return state
                })

            }
            if (i > step) {

                this.setState(state => {
                    state.clases[i].circle = 'circulo'
                    state.clases[i].text = 'texto'
                    state.clases[i].line = 'linea'

                    return state
                })
            }
        }


    }

    render() {
        let step;

        switch (this.props.step) {
            case 1:
                step = (<Step1 set_state={this.props.set_state} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 2:
                step = (<Step2 set_state={this.props.set_state} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 3:
                step = (<Step3 set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 4:
                step = (<Step4 set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;

            default:
                step = '';

        }



        return (
            <div className="row wizardCitas">

                <Steps {...this.state} />
                <h4 onClick={this.validateForm.bind(this)} style={{ color: '#c73a8c', fontWeight: 'bolder' }}>{this.props.nombre_servicio}</h4>

                <form id="formularios">
                    {step}

                </form>

                <div className="row">
                    <div className="col s12 m4 offset-m2 ">
                        <p id="info2" className="cuestionario-info info-animation" style={{ textAlign: 'left' }}>Por favor diligencia toda la información  para continuar</p>
                        <Buttons actualizar={this.actualizar.bind(this)} step={this.props.step} activate_step={this.props.activate_step} />

                    </div>
                </div>


            </div>


        );

    }
}

export default Wizard; // Don’t forget to use export default!