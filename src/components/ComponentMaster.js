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
import $ from "jquery";
import { thisTypeAnnotation } from '@babel/types';

let elementMenu;
class ComponentMaster extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;
        this.state = {
            changeCompt: 0,
            componentScroll: "",
            login: 0
        }

    }
    changeComponente(state) {

        this.setState({
            changeCompt: state
        })

    }
    scroolComponent(element1) {
        /*
        this.setState({
            componentScroll: state,
         
            
        })
        */
        elementMenu = element1;



    }
    shouldComponentUpdate(nextProps, nextState){
        var checkState;
        console.log(this.state.changeCompt);
        console.log(nextState['changeCompt']);
        if(this.state.changeCompt != nextState['changeCompt']){ 
            return true;
        }else{      
           return false;
        }
        
    }
    showPerfil(){
        console.log('Entro a perfil');
        console.log('Estado en showPERFIL '+this.state.login);
        if(this.state.login == 0){
            return (<h1>hola</h1>)
        }else{
            return (<h1>hola mundo</h1>)
        }
    }
    changeLogin(){
       
        this.setState({login: 1})
        alert('entra')
        console.log('Estado actual '+this.state.login);
        //this.showPerfil();
    }

    componentDidUpdate(prevProps, prevState) {
          console.log('Actualizado...');
           
            
            
    
    
               
    
    
            
           
      
    }
    showComponent = () => {
        switch (this.state.changeCompt) {
            case 0:
                return (
                    <div className="mainpage">
                        <Seccion1 />
                        <Calculadora changeLogin={this.changeLogin.bind(this)}/>
                        <Citas />
                        <Testimonios />
                        <Contacto />
                        <Footer />

                    </div>

                );
            case 1:
                return <Perfil />
            case 2:
                return <EditPerfil></EditPerfil>


        }

    }

    render() {

        let mostrar = '';

        if(this.state.login == 0){
            mostrar = <h1>Hola</h1>

        }
        else{
            mostrar = <h1>Hola mundo</h1>

        }

        return (
            <div className="mainComponent">
            {mostrar}

                {/*<Menu login={this.state.login} changeComptStateMain={this.state.changeCompt} scroolComponent={this.scroolComponent.bind(this)} updateStateComponent={this.changeComponente.bind(this)}></Menu>*/}
                {this.showComponent()}
            </div>



        );

    }


}
export default ComponentMaster;