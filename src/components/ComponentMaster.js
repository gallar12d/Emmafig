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

    menuChange = () => {

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

    changeLogin(){
        console.log('cambiando estado login ');
        this.setState({
            login: 1
        })
        console.log('cambio estado login a '+this.state.login);
    }

    componentDidUpdate(prevProps, prevState) {
          
           
            if (this.state.changeCompt != 1 && this.state.changeCompt != 2) {
                let simulateClick = elem => {
                    let evt = new MouseEvent('click', {
                        bubbles: true,
                        view: window
                    });
                    elem.dispatchEvent(evt)
                };
                console.log(elementMenu);
                
                var btnMenu = document.getElementById(""+elementMenu+"");
                simulateClick(btnMenu);
              
               
                
                //elementMenu.click();
            
            
    
    
               
    
    
            }
           
      
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

        return (
            <div className="mainComponent">
                <Menu login={this.state.login} changeComptStateMain={this.state.changeCompt} scroolComponent={this.scroolComponent.bind(this)} updateStateComponent={this.changeComponente.bind(this)}></Menu>
                {this.showComponent()}
            </div>



        );

    }


}
export default ComponentMaster;