import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoFacebook: process.env.PUBLIC_URL + "/img/iconFacebook.png",
            hide: 0
        }
    }
    render() {
        return (
            <footer id="footer" class="page-footer">
                <div id="footer_container" class="container">
                    <div class="row">
                        <div class="col s6 m6 l3">
                            <div className="row">
                                <div className="col ">
                                    <h5 className="titulo_footer">FUNDACIÓN INNOVAGEN </h5>


                                </div>
                                <div className="col">

                                    <p id="little_text_footer" class="grey-text text-lighten-4">
                                        Somos una entidad privada, dedicada a la gestión del conocimiento para la busqueda de soluciones
                                        reales e innovadoras que contribuyan a promover la salud, la calidad de la vida y el bienestar social.
                                </p>
                                </div>

                            </div>

                        </div>
                        <div class="col s6 m6 l3">
                            <div className="row">
                                <div className="col s12 m12 l12">

                                    <h5 class="titulo_footer">PRUEBAS MOLECULARES</h5>
                                </div>
                                <div className="col s12 m12 l12 ">


                                    <div class="row" id="listPruebas" >


                                        <div className="col s2 m2 l1">
                                            <i class="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                        </div>
                                        <div className="col s10">
                                            <span>Estudio de biopsias</span>

                                        </div>
                                    </div>
                                    <div class="row" id="listPruebas">


                                        <div className="col s2 m2 l1">
                                            <i class="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                        </div>
                                        <div className="col s10">
                                            <span>Citologia en base liquida ginecológica</span>

                                        </div>
                                   </div>
                                    <div class="row" id="listPruebas">


                                        <div className="col s2 m2 l1">
                                            <i class="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                        </div>
                                        <div className="col s10">
                                            <span>Citologia en base liquida no-ginecológica</span>

                                        </div>
                                    </div>
                                    <div class="row" id="listPruebas">


                                        <div className="col s2 m2 l1">
                                            <i class="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                        </div>
                                        <div className="col s10">
                                            <span>Estudios de inmunohistoquimica</span>

                                        </div>
                                   </div>
                                    <div class="row" id="listPruebas">
                                        <div className="col s2 m2 l1">
                                            <i class="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                        </div>
                                        <div className="col s10">
                                            <span>Marcadores pronósticos Ki-67/p16</span>

                                        </div>
                                    </div>
                                    <div class="row" id="listPruebas">
                                        <div className="col s2 m2 l1">
                                            <i class="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                        </div>
                                        <div className="col s10">
                                            <span>Prueba ADN para el virus del papiloma humano</span>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col s4 m4 l4">
                            <div className="row">
                                <div className="col">
                                    <h5 className="titulo_footer">SOCIAL MEDIA</h5>
                                    <p className="grey-text text-lighten-4">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="https://www.facebook.com/fundacioninnovagen/" target="_blank">
                                        <i className="fa fa-facebook fa-lg"></i>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://instagram.com/funinnovagen?igshid=1i9a8bm9m2kck" target="_blank">
                                        <i className="fa fa-instagram fa-lg"></i>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://api.whatsapp.com/send?phone=573174412170" target="_blank">
                                        <i className="fa fa-whatsapp fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div id="footer_copyright" class="footer-copyright">
                    <div class="container">
                        <p >Con cariño para las mujeres del mundo; FUNDACION INNOVAGEN y SENA SECCIONAL - POPAYÁN 2019</p>

                    </div>
                </div>
            </footer>

        );
    }
}
export default Footer;