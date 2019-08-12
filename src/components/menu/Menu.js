import React, { Component } from 'react';
import { Link} from "react-scroll";
import './Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png"

        };
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                        <Link
                                activateclass = "activate"
                                to ="seccion1"
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
                                activateclass = "activate"
                                to ="contenedor-calculadora"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                Calculadora
                                </Link>
                                </li>
                                <li>

                                <Link
                                activateclass = "activate"
                                to ="citas"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                Citas
                                </Link>
                                </li>
                                <li>

                                <Link
                                activateclass = "activate"
                                to ="testimonios"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                Testimonios
                                </Link>
                                </li>
                                <li>

                                <Link
                                activateclass = "activate"
                                to ="contacto"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                    Contacto
                                </Link>
                                </li>

                                <li>
                                <a href="#!"> FAQ</a>
                               
                               
                               
                                </li>
                                <li>

                               
                                <a href="#!"> BLOG</a>
                                
                                </li>
                            </ul>

                        </div>
                    </nav>


                </div>
                <ul className="sidenav" id="mobile-demo">
                <li>
                                
                                <Link
                                activateclass = "activate"
                                to ="contenedor-calculadora"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                Calculadora
                                </Link>
                                </li>
                                <li>

                                <Link
                                activateclass = "activate"
                                to ="citas"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                Citas
                                </Link>
                                </li>
                                <li>

                                <Link
                                activateclass = "activate"
                                to ="testimonios"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                Testimonios
                                </Link>
                                </li>
                                <li>

                                <Link
                                activateclass = "activate"
                                to ="contacto"
                                spy={true}
                                smooth={true}
                                offset={-46}
                                duration={500}
                                >
                                    Contacto
                                </Link>
                                </li>

                                <li>
                                <a href="#!"> FAQ</a>
                               
                               
                               
                                </li>
                                <li>

                               
                                <a href="#!"> BLOG</a>
                                
                                </li>
                </ul>

            </div>



        );

    }
}

export default Menu; // Don’t forget to use export default!