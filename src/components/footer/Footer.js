import React, { Component } from 'react';
import './Footer.css'
import $ from 'jquery'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoFacebook: process.env.PUBLIC_URL + "/img/iconFacebook.png",
            logoInnovagen: process.env.PUBLIC_URL + "/img/logo-innova-blanco.png",
            logoSena: process.env.PUBLIC_URL + "/img/sena.png",
            hide: 0
        }
    }

    componentDidMount() {
        $('.page-footer').on('mouseenter', function (e) {
            $(this).find('.btn_hover_footer').addClass('pulse');
        })

        $('.page-footer').on('mouseleave', function (e) {
            $(this).find('.btn_hover_footer').removeClass('pulse');
        })
    }

    render() {
        return (
            <footer id="footer" className="page-footer">

                <div id="footer_container" className="container">

                </div>
                <div className="rowFooter">
                <div className="row">

                    <div className="col s6 m6 l3">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <h5 className="titulo_footer"><a target="_blank" href = "http://www.fig.org.co/" >NUESTROS SERVICIOS</a></h5>
                            </div>
                            <div className="col s12 m12 l12 ">
                                <div className="row" id="listPruebas" >
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>
                                    <div className="col s10">
                                        <span>Estudio de biopsias</span>
                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>
                                    <div className="col s10">
                                        <span>Citología en base líquida ginecológica</span>
                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>
                                    <div className="col s10">
                                        <span>Citología en base líquida no-ginecológica</span>
                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>
                                    <div className="col s10">
                                        <span>Estudios de inmunohistoquímica</span>
                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>
                                    <div className="col s10">
                                        <span>Marcadores pronósticos Ki-67/p16</span>
                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>
                                    <div className="col s10">
                                        <span>Prueba ADN para el virus del papiloma humano</span>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col s6 m6 l3">
                        <div className="row">
                            <div className="col">
                                <h5 className="titulo_footer">REDES SOCIALES</h5>
                                <p className="grey-text text-lighten-4">
                                    Has parte de nuestra comunidad
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a className="btn-floating btn_hover_footer" href="https://www.facebook.com/fundacioninnovagen/" target="_blank">
                                    <i className="fa fa-facebook fa-lg"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn-floating btn_hover_footer" href="https://instagram.com/funinnovagen?igshid=1i9a8bm9m2kck" target="_blank">
                                    <i className="fa fa-instagram fa-lg"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn-floating btn_hover_footer" id="iconWSP" href="https://api.whatsapp.com/send?phone=573174412170" target="_blank">
                                    <i className="fa fa-whatsapp fa-lg"></i>
                                </a>
                            </div>
                        </div>                       
                    </div>

                    <div className="col s5 m6 l3 ">
                        <div className="row">
                            <div className="col">
                                <h5 className="titulo_footer">DESARROLLADO POR</h5>                                                      
                                <div id="cont_logos" className="row">
                                    <a target="_blank" href = "http://www.fig.org.co/"><img id="logoInnovagen"  src={this.state.logoInnovagen} className="col l8 s11"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s5 m6 l3">
                        <div className="row">
                            <div className="col">
                                <h5 className="titulo_footer">CON EL APOYO DE</h5>                                                     
                                <div id="cont_logos" className="row">
                                <img id="logoSena" src={this.state.logoSena} className="col l4 s6"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div id="footer_copyright" className="footer-copyright">
                    <div className="container center-align">
                        <p className="center-align">Con cariño para las mujeres del mundo; FUNDACION INNOVAGEN y SENA SECCIONAL - POPAYÁN 2019</p>

                    </div>
                </div>
            </footer>


        );
    }
}
export default Footer;