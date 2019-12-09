import React, { Component } from 'react';
import { Link } from "react-scroll";

import Footer from '../footer/Footer';
import Menu from '../menu/Menu';

import '../menu/Menu.css'
import './Somos.css';

class Somos extends Component {
    constructor(props) {

        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png",
            imagen: process.env.PUBLIC_URL + "/img/logoinnovagen2.png",

        }

    }
    componentDidMount() {


    }

    render() {
       let link_inicio = '/'
        return (

            <div className="terminos_condiciones">
                {/*<div className="navbar-fixed">

                    <nav>
                        <div className="nav-wrapper">

                            <a href="#/"><img className="brand-logo hide-on-med-and-down logo" alt="logo" src={this.state.logo}>
                            </img></a>

                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className=" menuItems right hide-on-med-and-down">  
                                <li id="citas_li">
                                    <a href ={link_inicio}>Quienes somos</a>

                                    
                                
                                </li>
                                 <li id="citas_li">
                                    <a href ={'http://blog.emmafig.com/'}>Blog </a>

                                    
                                
                                </li>
                            </ul>    
                            
                        </div>
                    </nav>


        </div>*/}




                
                <div  className="container justi">
                    
                <div className="row">
                        <div className=" col m12">
                        <img className="" width="250px" src={ this.state.imagen }></img>
                        </div> 
                        
                        
                    </div>

                    <h5><strong className="quienesTitle">Quiénes somos</strong></h5>
                    <div className="row">
                        <div className=" col m12">
                        La Fundación InnovaGen es una organización privada de utilidad común, que surge como iniciativa de un grupo de docentes-investigadores en ciencias biomédicas de la Universidad del Cauca, con el objeto de influir positivamente en el sector salud y contribuir a la calidad de vida y el bienestar de los individuos y la sociedad en general.
                        </div> 
                        
                        
                    </div>
                    
                    <div className="row">
                        <div className=" col m12">
                        Desde su creación, el 26 de enero del 2012, la Fundación InnovaGen se concibe como una empresa sin ánimo de lucro, de carácter permanente, independiente y autónomo, que reinvierte la totalidad de sus excedentes en el desarrollo de su talento humano y de su infraestructura física y tecnológica para garantizar el cumplimiento de su objeto social.
                        </div> 
                        
                        
                    </div>
                    <div className="row">
                        <div className=" col m12">
                        Hoy, la Fundación InnovaGen cuenta con un excelente equipo humano, quienes con un fuerte sentido de responsabilidad social asumen los retos del entorno y prestan servicios a nuestros beneficiarios con los mayores estándares de calidad humana, científica y ética.
                        </div> 
                        
                        
                    </div>
                    <div className="row">
                        <div className=" col m12">
                        Visítanos y conoce más acerca de nuestros servicios <a href="http://fig.org.co/pgnafig/" target="_blank">aquí</a> 
                        </div> 
                        
                        
                    </div>
                    <div className="row">
                        <div className=" col m12">
                        <span className="text-terminos"><a href="#/terminos_condiciones" target="_blank"> Política de Tratamiento de Datos</a></span>
                        </div> 
                        
                        
                    </div>

                </div>
                
                <Footer />




            </div>
        );
    }


}
export default Somos;