import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Menu.css'
import M from "materialize-css";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png"

        };
    }
    componentDidMount() {

        M.Dropdown.init(this.Dropdown);
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href="#/perfil">Perfil</a></li>
                        <li><a href="#/Editperfil">Configuracion</a></li>
                        <li className="divider"></li>
                        <li><a href="#/logout">Cerrar sesion</a></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper">
                            <Link
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
                                <li>

                                    <Link
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
                                    <a href="#/faq"> FAQ</a>



                                </li>
                                <li>


                                    <a href="#!"> Blog </a>

                                </li>

                                <li>



                                    <a className="dropdown-trigger" ref={Dropdown => { this.Dropdown = Dropdown; }} data-target="dropdown1">
                                    
                                        Usuario <i className="material-icons right">arrow_drop_down</i>

                                    </a>


                                </li>
                                {/*
                                
                                <li>

                                    <a href="https://www.facebook.com/fundacioninnovagen/" target="_blank">
                                        <i className="fa fa-facebook fa-lg"></i>
                                    </a>
                                </li>
                                <li>

                                    <a href="https://instagram.com/funinnovagen?igshid=1i9a8bm9m2kck" target="_blank">
                                        <i className="fa fa-instagram fa-lg"></i>
                                    </a>
                                </li>
                                <li>

                                    <a id="iconWSP" href="https://api.whatsapp.com/send?phone=573174412170" target="_blank">
                                        <i className="fa fa-whatsapp fa-lg"></i>
                                    </a>
                                </li>
                                */}

                            </ul>

                        </div>
                    </nav>


                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li>

                        <Link
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
                    <li>

                        <Link
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

                </ul>

            </div>



        );

    }
}

export default Menu; // Don’t forget to use export default!