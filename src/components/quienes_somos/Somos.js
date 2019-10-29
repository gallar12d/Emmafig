import React, { Component } from 'react';
import { Link } from "react-scroll";

import Footer from '../footer/Footer';


import '../menu/Menu.css'
import './Somos.css';

class Somos extends Component {
    constructor(props) {

        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png"

        }

    }
    componentDidMount() {


    }

    render() {
       let link_inicio = '/'
        return (

            <div className="terminos_condiciones">
                <div className="navbar-fixed">

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


                </div>





                <div  className="container justi">
                    <h4>QUIENES SOMOS</h4>
                    <div className="row">
                        <div className=" col m12">
                            En la Fundación InnovaGen con más de 8 años en el mercado del cauca y vale del cauca, buscamos contribuir a la generación de nuevo conocimiento científico y tecnológico a través de la gestión y ejecución de investigación básica y aplicada en biología molecular, medicina y ciencias afines; así como promover, desarrollar y prestar servicios de salud a la población, soportados en tecnologías de punta para el mejoramiento de la calidad de vida y la salud pública de la región y el país. Por tal razón, queremos seguir comunicándonos con Usted para informarle sobre las novedades de nuestros productos y servicios, así como de las promociones y/o campañas sobre los mismos, realizar encuestas de satisfacción y fortalecer nuestros canales de servicio al cliente.
                        </div> 
                        
                        
                    </div>
                    
                    <div className="row">
                        <div className=" col m12">
                            La recolección de datos personales y el tratamiento de éstos, que realiza <b>FUNDACIÓN INNOVAGEN</b> se hace de forma responsable y legal en cumplimiento del derecho a la intimidad, el habeas data y la protección de datos personales, conforme con las normas, procedimientos e instructivos adoptados por <b>FUNDACIÓN INNOVAGEN</b> así como también conforme al mandato de la Constitución Política de Colombia, ley 1581 de 2012, decreto 1377 de 2013 y demás normas vigentes sobre la materia. <b>FUNDACIÓN INNOVAGEN</b> por varios años ha recolectado, almacenado y utilizado información con datos personales y por su naturaleza desea continuar con dicho tratamiento a futuro. Para ello y para realizar el manejo adecuado que dispone la ley la fundación ha definido la siguiente política, disponible para toda la comunidad interna y externa. Para ello, <b>FUNDACIÓN INNOVAGEN</b> requiere obtener la autorización para que de manera libre, previa, expresa, voluntaria, y debidamente informada, los usuarios, clientes y cualquier persona permitan a la institución recolectar, recaudar, almacenar, usar, procesar, compilar, dar tratamiento, actualizar y disponer de los datos generales, particulares y/o sensibles, que han sido suministrados y que se han incorporado en distintas bases o bancos de datos, o en repositorios electrónicos de todo tipo con que cuenta la fundacion. Esta información es y será utilizada en el desarrollo de las funciones propias de la <b>FUNDACIÓN INNOVAGEN</b>, para fines administrativos, comerciales, de promoción y contacto frente a los titulares de los mismos.
                        </div> 
                        
                        
                    </div>
                    <div className="row">
                        <div className=" col m12">
                            Para ejercer su derecho como titular de los datos, Usted podrá acceder a la verificación, rectificación, actualización, cancelación y oposición del procesamiento de los mismos, comunicándose al correo electrónico contacto@fundacioninnovagen.org, a las líneas de atención al usuario 8372935 – 8382135 – 3174412170 o dirigiéndose a las instalaciones de la Fundación ubicada en la Calle 11N # 7-12 de la ciudad de Popayán. Si en el término de treinta (30) días hábiles contados a partir de ésta comunicación, no hemos recibido alguna sugerencia para el tratamiento de sus datos, la Fundación podrá seguir haciendo realizando el uso de los mismos para los fines antes descritos.
                        </div> 
                        
                        
                    </div>

                </div>
                <Footer />




            </div>
        );
    }


}
export default Somos;