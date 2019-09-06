import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Menu.css'
import M from "materialize-css";
import { element } from 'prop-types';

let elementInicio;

let elementTestimonios;
let elementContacto;
let elementCitas


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png",
            gblState: 0,
            element: "",
            componentChange: 0

        };
    }
    componentDidMount() {
        M.Dropdown.init(this.Dropdown);
        M.Collapsible.init(this.Collapsible);


    }
    /*
    componentDidUpdate() {
        console.log("componente menu: " + this.state.componentChange)
       
        if (this.state.componentChange != 1 && this.state.componentChange != 2) {
        
            //var element1 = document.getElementById("scroolCitas");
            //$(element1).trigger('click');
            //this.eventFire(element1,'click')
    
            alert("main page")
    
        }
    
    }
    */
    GenerateClick(state, elementMenu) {
        /*
        this.setState({
            gblState: this.props.globalStateComponent,
        })
        */
        this.setState({
            componentChange: state
        })
        this.props.scroolComponent(elementMenu)

        //console.log(element);
        //console.log(this.props.changeComptStateMain);
        //$("#"+context).trigger("click");
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href="#" onClick={() => { this.props.updateStateComponent(1); this.GenerateClick(1) }} >Perfil</a></li>
                        <li><a href="#" onClick={() => { this.props.updateStateComponent(2); this.GenerateClick(2) }}>Configuracion</a></li>
                        <li className="divider"></li>
                        <li><a href="#/logout">Cerrar sesion</a></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper">
                            <Link
                                id="inicio"
                                activateclass="activate"
                                to="seccion1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >

                            </Link>
                            <Link

                                onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "inicio") }}
                                activateclass="activate"
                                to="seccion1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <img className="brand-logo hide-on-med-and-down logo" alt="logo" src={this.state.logo}>
                                </img>

                            </Link>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className=" menuItems right hide-on-med-and-down">


                                <li>
                                    <Link
                                        id="scroolCalculadora"
                                        activateclass="activate"
                                        to="contenedor-calculadora"
                                        spy={true}
                                        smooth={true}
                                        offset={-55}
                                        duration={500}
                                        delay={1000}
                                    >
                                    </Link>


                                    <Link
                                        onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolCalculadora") }}

                                        activateclass="activate"
                                        to="contenedor-calculadora"
                                        spy={true}
                                        smooth={true}
                                        offset={-55}
                                        duration={500}
                                    >
                                        Calculadora
                                </Link>
                                </li>

                                <li >

                                    <Link
                                        id="scroolCitas"
                                        activateclass="activate"
                                        to="citas"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        delay={1000}
                                    >
                                    </Link>


                                    <Link

                                        onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolCitas") }}
                                        activateclass="activate"
                                        to="citas"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        Citas
                                    </Link>

                                </li>
                                <li>
                                    <Link
                                        id="scroolTestimonios"
                                        activateclass="activate"
                                        to="testimonios"
                                        spy={true}
                                        smooth={true}
                                        offset={283}
                                        duration={500}
                                        delay={1000}
                                    >
                                    </Link>

                                    <Link
                                        onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolTestimonios") }}
                                        activateclass="activate"
                                        to="testimonios"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                    >
                                        Testimonios
                                </Link>
                                </li>
                                <li>
                                    <Link
                                        id="scroolContacto"
                                        activateclass="activate"
                                        to="contacto"
                                        spy={true}
                                        smooth={true}
                                        offset={283}
                                        duration={500}
                                        delay={1000}
                                    >

                                    </Link>

                                    <Link

                                        ref={e => (elementContacto = e)}
                                        onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolContacto") }}
                                        activateclass="activate"
                                        to="contacto"
                                        spy={true}
                                        smooth={true}
                                        offset={-63}
                                        duration={500}
                                    >
                                        Contacto
                                </Link>
                                </li>
                                <li>


                                    <a href="#!"> Blog </a>

                                </li>

                                <li>
                                    <a id="perfil" className="dropdown-trigger" ref={Dropdown => { this.Dropdown = Dropdown; }} data-target="dropdown1">

                                        Usuario <i className="material-icons right">arrow_drop_down</i>

                                    </a>


                                </li>
                            </ul>

                        </div>
                    </nav>


                </div>


                <Link
                            id="scroolCalculadora_sm"
                            activateclass="activate"
                            to="contenedor-calculadora"
                            spy={true}
                            smooth={true}
                            offset={-55}
                            duration={500}
                            delay={1000}
                        >
                        </Link>
                        <Link
                            id="scroolCitas_sm"
                            activateclass="activate"
                            to="citas"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            delay={1000}
                        >
                        </Link>
                        <Link
                            id="scroolTestimonios_sm"
                            activateclass="activate"
                            to="testimonios"
                            spy={true}
                            smooth={true}
                            offset={1430}
                            duration={500}
                            delay={1000}
                        >
                        </Link>
                        <Link
                            id="scroolContacto_sm"
                            activateclass="activate"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={1423}
                            duration={500}
                            delay={1000}
                        >
                        </Link>
                <ul className="sidenav" id="mobile-demo">

                    <li><a href="#" onClick={() => { this.props.updateStateComponent(1); this.GenerateClick(1) }} >Perfil</a></li>
                    <li><a href="#" onClick={() => { this.props.updateStateComponent(2); this.GenerateClick(2) }}>Configuracion</a></li>




                    <li>
                  
                        

                        <Link
                            onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolCalculadora_sm") }}

                            activateclass="activate"
                            to="contenedor-calculadora"
                            spy={true}
                            smooth={true}
                            offset={-55}
                            duration={500}
                        >
                            Calculadora
                                </Link>
                        
                               

                    </li>

                    <li >

                        


                        <Link

                            onClick={() => {this.props.updateStateComponent(0); this.GenerateClick(0, "scroolCitas_sm") }}
                            activateclass="activate"
                            to="citas"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                        >
                            Citas
                        </Link>

                    </li>
                    <li>
                        
                        <Link
                            onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolTestimonios_sm") }}
                            activateclass="activate"
                            to="testimonios"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            Testimonios
                                </Link>
                    </li>
                    <li>
                      

                        <Link

                            onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "scroolContacto_sm") }}
                            activateclass="activate"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-63}
                            duration={500}
                        >
                            Contacto
                                </Link>
                    </li>
                    <li>
                        <a href="#!"> FAQ</a>



                    </li>
                    <li>


                        <a href="#!"> Blog </a>

                    </li>

                    <li>


                        <a href="#!"> Cerrar Sesion </a>

                    </li>

                </ul>

            </div>



        );


    }



}

export default Menu; // Don’t forget to use export default!