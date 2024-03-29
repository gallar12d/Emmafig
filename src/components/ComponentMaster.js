import React, { Component } from 'react';
import Menu from './menu/Menu';
import Seccion1 from './seccion1/Seccion1';
import Calculadora from './calculadora/Calculadora';
import Testimonios from './testimonios/Testimonios';
import Footer from './footer/Footer';
import Citas from './citas/Citas';
import Contacto from './contacto/Contacto';
import Perfil from './perfil/Perfil';
import EditPerfil from './perfil/Editprofile';
import Somos from './quienes_somos/Somos';
import $ from "jquery";
import { thisTypeAnnotation } from '@babel/types';
import M from 'materialize-css';
import axios from "axios";
import swal from 'sweetalert2';
import Terminos from './terminos_condiciones/Terminos';

let elementMenu;
var btnMenu;
let ancla;
class ComponentMaster extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;
        this.state = {
            changeCompt: 0,
            componentScroll: "",
            login: 0,
            prevLogin: 1,
            loginCalculadora: 0,
            ancla: null,
            prevAncla: "",
            primer_nombre: "",
            id: "",
            loginCitas: 0,
            riesgo: 0,
            respuestas: [],
            origen: 'initial',
            preloader: process.env.PUBLIC_URL + "/img/basicloader.gif"

        }
        //this.clickLogin = this.clickLogin.bind(this);

    }

    resultadoGotoCita() {
        console.log('click goto cita')
        let simulateClick = elem => {
            let evt = new MouseEvent('click', {
                bubbles: true,
                view: window
            });
            elem.dispatchEvent(evt)
        };
        let anclaCitas = document.getElementById('citas_section');
        simulateClick(anclaCitas);
    }
    activateScrollCalculadora() {

        let simulateClick = elem => {
            let evt = new MouseEvent('click', {
                bubbles: true,
                view: window
            });
            elem.dispatchEvent(evt)
        };
        let anclaCalculadora = document.getElementById('calculadora_section');
        simulateClick(anclaCalculadora);
    }

    clickInicio(){
        alert();       
    }

    componentDidMount() {

        

        ancla = this.props.ancla;
        console.log('jwt ' + localStorage.getItem('jwt'));
        if (localStorage.getItem('jwt') !== null) {

            this.changeLogin()
        }

        /*document.getElementById('btn_conocer_mas').addEventListener('click',function(){
            let simulateClick = elem => {
                let evt = new MouseEvent('click', {
                    bubbles: true,
                    view: window
                });
                elem.dispatchEvent(evt)
            };
            simulateClick('citas_section');
        });*/

        if (ancla == "login") {
            if (localStorage.getItem('jwt') == null) {

                //setTimeout(function () {
                    let simulateClick = elem => {
                        let evt = new MouseEvent('click', {
                            bubbles: true,
                            view: window
                        });
                        elem.dispatchEvent(evt)
                    };

                    M.Modal.getInstance(document.getElementById('modal1')).open();
                    var btnIngresar = document.getElementById("btn_ingresar_a");

                    simulateClick(btnIngresar);

                //}, 3000);
            }




        } else {
            this.setState({

                ancla: ancla
            })
        }
    }





    changeComponente(state) {


        this.setState({
            changeCompt: state
        })

    }
    scroolComponent(element1) {
        elementMenu = element1;
    }
    shouldComponentUpdate(nextProps, nextState) {

        var checkState;
        console.log(this.state.changeCompt);
        console.log(nextState['changeCompt']);
        if ((this.state.changeCompt != nextState['changeCompt']) || (this.state.prevLogin != this.state.login) || (this.state.ancla != nextState['ancla'])) {
            return true;
        } else {
            return false;
        }
    }
    /*showPerfil = () => { 
        alert('entraaaa')
        console.log('emtra')       
        if(this.state.login == 0){
            return (<h1>hola</h1>)
        }else{
            return (<h1>hola mundo</h1>)
        }
    }*/
    changeLogin = () => {

        this.setState({
            login: this.state.prevLogin,
            prevLogin: this.state.login,
            primer_nombre: localStorage.getItem('primer_nombre'),
            id: localStorage.getItem('id')
        });

        /*if(this.state.loginCalculadora == 1 && this.state.login == 1){
            this.setState({
                changeCompt: 1
            })
            this.saveResult();
            this.showComponent();
        }*/
        if (this.state.login == 1) {
            switch (this.state.origen) {
                case 'calculadora': 
                        this.saveResult();
                        this.setState({
                            changeCompt: 1
                        });
                        this.showComponent();
                        break;
                case 'menu': 
                        this.setState({
                            changeCompt: 1
                        });
                        this.showComponent();
                        break;
                default:
                    break;
            }            
        }
    }

    toPerfil = () => {
        this.setState({
            changeCompt: 1
        });
        this.showComponent();
    }

    changeLoginCalculadora = () => {
        this.setState({
            loginCalculadora: 1,
            origen: 'calculadora'
        });
    }

    changeLoginCitas = () => {
        this.setState({
            loginCitas: 1
        });
    }

    changeOrigen = (origen = 'initial') => {
        this.setState({
            origen: origen
        });
    }

    saveRespuestas = (respuestas, riesgo) => {
        console.log('respuestas master' + respuestas);
        this.setState({
            respuestas: respuestas,
            riesgo: riesgo
        })

    }

    saveResult = () => {
        console.log('respuestas master setstate 1' + this.state.respuestas[0]);
        axios.post('https://emmafig.com/api1/saveEstimacion', {
            //axios.post('http://localhost/api1/saveEstimacion', {           
            "valor_respuesta1": this.state.respuestas[0],
            "valor_respuesta2": this.state.respuestas[1],
            "valor_respuesta3": this.state.respuestas[2],
            "valor_respuesta4": this.state.respuestas[3],
            "valor_respuesta5": this.state.respuestas[4],
            "valor_respuesta6": this.state.respuestas[5],
            "riesgo": this.state.riesgo,
            "id_atl_usuario": localStorage.getItem('id')

        }).then(res => {
            console.log('Estimacion guardad');
            //this.props.changeComponente(res.data.riesgo, this.state.selectedValues);
        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    showPreloader = () => {
        swal.fire({
            title: 'Calculando...',
            text: 'Por favor espere',
            imageUrl: this.state.preloader,
            allowOutsideClick: false,
            showConfirmButton: false
          })
    }

    hidePreloader(){
        swal.close();
    }
    componentDidUpdate() {
        ancla = this.props.ancla;
        if (this.state.login == 0) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('id');
            localStorage.removeItem('primer_nombre');


        }
        if (this.state.changeCompt != 1 && this.state.changeCompt != 2) {

            console.log(elementMenu);
            if (elementMenu != undefined || elementMenu != null) {
                let simulateClick = elem => {
                    let evt = new MouseEvent('click', {
                        bubbles: true,
                        view: window
                    });
                    elem.dispatchEvent(evt)
                };
                btnMenu = document.getElementById(elementMenu);
                setTimeout(function () {
                    simulateClick(btnMenu);
                }, 1500);


            } else {
                if (this.state.ancla != null) {
                    let simulateClick = elem => {
                        let evt = new MouseEvent('click', {
                            bubbles: true,
                            view: window
                        });
                        elem.dispatchEvent(evt)
                    };

                    btnMenu = document.getElementById(this.state.ancla);
                    setTimeout(function () {
                        simulateClick(btnMenu);
                    }, 3500);

                } else if (ancla == 'login') {
                    this.changeComponente(1)

                }
            }
            elementMenu = null;
        }
    }

    showComponent = () => {
        switch (this.state.changeCompt) {
            case 0:
                return (
                    <div className="mainpage">
                        <Seccion1 activateScrollCalculadora={this.activateScrollCalculadora.bind(this)} />


                        <Calculadora
                            login={this.state.login}
                            res={this.state.respuestas}
                            saveRespuestas={this.saveRespuestas.bind(this)}
                            changeLogin={this.changeLogin.bind(this)}
                            changeLoginCalculadora={this.changeLoginCalculadora.bind(this)}
                            resultadoGotoCita={this.resultadoGotoCita.bind(this)}
                            showPreloader={this.showPreloader}
                            hidePreloader={this.hidePreloader}
                            toPerfil={this.toPerfil.bind(this)}                            
                        />
                        <Citas  origen =  {this.state.origen} changeOrigen = {this.changeOrigen.bind(this)} id_usuario = {this.state.id} logCitas = {this.state.loginCitas} loginCitas={this.changeLoginCitas.bind(this)} changeLogin={this.changeLogin.bind(this)} login={this.state.login} />

                        <Testimonios />
                        <Contacto />
                        <Footer />

                    </div>

                );
            case 1:
                return <Perfil resultadoGotoCita={this.resultadoGotoCita.bind(this)} scroolComponent={this.scroolComponent.bind(this)} updateStateComponent={this.changeComponente.bind(this)}/>
            case 2:
                return <EditPerfil></EditPerfil>
            case 3: 
                return <Somos />                           
            default:
                return false


        }

    }


    render() {

        return (
            <div className="mainComponent">
                {<Menu clickInicio={this.clickInicio} changeOrigen={this.changeOrigen} setModalIsOpen={this.setModalIsOpen} login={this.state.login} primer_nombre={this.state.primer_nombre} changeComptStateMain={this.state.changeCompt} scroolComponent={this.scroolComponent.bind(this)} updateStateComponent={this.changeComponente.bind(this)} changeLogin={this.changeLogin.bind(this)}></Menu>}
                {this.showComponent()}

            </div>
        );

    }
}

export default ComponentMaster;