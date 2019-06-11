import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo:  process.env.PUBLIC_URL +"/img/logo-Emmafig1.png"

        };
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="  brand-logo hide-on-med-and-down">
                            <img className="" alt="logo" src={this.state.logo}>
                            
                            </img>

                        </a>
                        <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        
                        <ul className=" menuItems right hide-on-med-and-down">
                            <li><a href="sass.html">Calculadora</a></li>
                            <li><a href="badges.html">VPH</a></li>
                            <li><a href="collapsible.html">Citas</a></li>
                            <li><a href="mobile.html">Blog</a></li>
                            <li><a href="mobile.html">FAQ</a></li>
                            <li><a href="mobile.html">Contacto</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Calculadora</a></li>
                    <li><a href="badges.html">VPH</a></li>
                    <li><a href="collapsible.html">Citas</a></li>
                    <li><a href="mobile.html">Blog</a></li>
                    <li><a href="mobile.html">FAQ</a></li>
                    <li><a href="mobile.html">Contacto</a></li>
                </ul>
                

            </div>

        );

    }
}

export default Menu; // Don’t forget to use export default!