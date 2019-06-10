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
            <nav className=" fixed-top  navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#0f9b9b'}}>
                <a className="navbar-brand " href="google.com">
                    <img className=" " src={this.state.logo} alt=""></img>
                </a>   
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="  navbar-toggler-icon "></span>
                </button>            

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-auto ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Calculadora <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">VPH</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link " href="#">Citas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Contacto</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>

        );

    }
}

export default Menu; // Don’t forget to use export default!