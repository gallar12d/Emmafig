import React, { Component } from 'react';
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
                            <a href="#!" className="  brand-logo hide-on-med-and-down">
                                <img className="logo" alt="logo" src={this.state.logo}>

                                </img>
                            </a>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className=" menuItems right hide-on-med-and-down">
                                <li><a href="#!">Calculadora</a></li>
                                <li><a href="#!">Citas</a></li>
                                <li><a href="#!">Contacto</a></li>
                                <li><a href="#!">FAQ</a></li>
                                <li><a href="#!">Blog</a></li>


                            </ul>

                        </div>
                    </nav>


                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#!">Calculadora</a></li>
                    <li><a href="#!">Citas</a></li>
                    <li><a href="#!">Contacto</a></li>
                    <li><a href="#!">FAQ</a></li>
                    <li><a href="#!">Blog</a></li>
                </ul>

            </div>



        );

    }
}

export default Menu; // Don’t forget to use export default!