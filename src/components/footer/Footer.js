import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <footer id="footer" class="page-footer">
                <div id="footer_container" class="container">
                    <div class="row">
                        <div class="col s4 m4 l4">
                            <div className="row">
                                <div className="col ">
                                    <h5 class="titulo_footer">FUNDACIÓN INNOVAGEN </h5>


                                </div>
                                <div className="col">

                                    <p id="little_text_footer" class="grey-text text-lighten-4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat
                                </p>
                                </div>

                            </div>

                        </div>
                        <div class="col s4 m4 l4">
                            <div className="row">
                                <div className="col s12 m12 l12">

                                    <h5 class="titulo_footer">INFORMATE</h5>
                                </div>
                                <div className="col s12 m12 l12 ">


                                    <div class="row" id="pading_txt_row">
                                        <div class="col s12 l2" >

                                            <span id="txt_bold_footer">Address:</span>
                                        </div>
                                        <div class="col s12 l10 " >
                                            <span id="txt_slim_footer">
                                                66 South Timbío
                                        </span><br></br>
                                            <span id="txt_slim_footer">
                                                Window 6 Wonderland
                                        </span>
                                        </div>
                                    </div>

                                    <div class="row" id="pading_txt_row">
                                        <div class="col s12 l2" >

                                            <span id="txt_bold_footer">Phone:</span>
                                        </div>
                                        <div class="col s12 l10 " >
                                            <span id="txt_slim_footer">
                                                +440 875369208 - Office
                                        </span><br></br>
                                            <span id="txt_slim_footer">
                                                +440 353363114 - Fax
                                        </span>
                                        </div>
                                    </div>


                                    <div class="row" id="pading_txt_row">
                                        <div class="col s12 l2">
                                            <span id="txt_bold_footer">Email:</span>
                                        </div>
                                        <div class="col s12 l10">
                                            example@gmail.com
                                    </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col s4 m4 l4">
                            <div className="row">
                                <div className="col">
                                    <h5 class="titulo_footer">SOCIAL MEDIA</h5>
                                    <p class="grey-text text-lighten-4">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry
                                </p>

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