import React, { Component } from 'react';
import './Resultado.css'
import M from 'materialize-css'
import '../../../../node_modules/materialize-social/css/materialize.css'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import axios from 'axios';
/*import './materialize-social.css'*/
let formatos = [0, 0, 0, 0, 0, 0];
let riesgo;
class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg",
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg",
            displayModal: false,
            textResultado: '',
            style: {
                opacity: 0,
                transform: 'translate3d(100%,0,0)'
            },
            img_emma: process.env.PUBLIC_URL + "/img/emmasection1espejo.svg",
            logo_emma: process.env.PUBLIC_URL + "/img/logortv.png",
            logo_emma_movil: process.env.PUBLIC_URL + "/img/logo-mariposa1.png",
            porcentaje: 0
        };

        this.masHandleMouseOver = this.masHandleMouseOver.bind(this);
        this.masHandleMouseOut = this.masHandleMouseOut.bind(this);
        this.conocerHandleMouseOver = this.conocerHandleMouseOver.bind(this);
        this.conocerHandleMouseOut = this.conocerHandleMouseOut.bind(this);
        this.masHandleClick = this.masHandleClick.bind(this);
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
        this.changeDecimal = this.changeDecimal.bind(this);
    }

    componentDidMount() {
        let porcentaje = this.props.result * 100;
        let riesgo = porcentaje.toFixed(2);
        console.log(riesgo);
        this.props.saveRespuestas(this.props.respuestas, this.props.result);
        axios.post(' https://emmafig.com/api1/updateResultSeguimiento', {
            //axios.post('http://localhost/api1/updateResultSeguimiento',{
            "id_seguimiento": localStorage.getItem('id_seguimiento'),
            "obtuvo_resultado": "Sí"
        }).then(res => {

        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
        this.formatRespuestas();
        this.changeDecimal();
        setTimeout(this.mountStyle, 10) //call the into animiation
        //this.showIndicador();
    }

    masHandleClick() {
        this.setState({
            displayModal: !this.state.displayModal
        })
    }
    masHandleMouseOver() {
        this.setState({
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-hover-btn.svg"
        });
    }

    masHandleMouseOut() {
        this.setState({
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg"
        });
    }
    conocerHandleMouseOver() {
        this.setState({
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-hover-btn.svg"
        });
    }

    conocerHandleMouseOut() {
        this.setState({
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg"
        });
    }
    mountStyle() {

        this.setState({
            style: {
                opacity: 1,
                transitionProperty: 'translate3d(100%,0,0)',
                transitionDuration: '1s'
            }
        });
    }
    unMountStyle() {
        this.setState({
            style: {
                opacity: 0,
                transitionProperty: 'translate3d(-50%,0,0)',
                transitionDuration: '1s'
            }
        });
    }

    showa = () => {
        alert('hola form');
    }

    showOpcion = () => {
        let opcion = '';
        /*if (this.props.login) {
            opcion = <div className="col s4 m4 l4">
                <a id="btn_mas_detalles" className="boton-res waves-light col s12 m12 l12" href='http://blog.emmafig.com/' target="_blank">Saber más</a>
            </div>
        } else {
            opcion = <div className="col s4 m4 l4">
                <a id="btn_mas_detalles" className="boton-res waves-light modal-trigger col s12 m12 l12" href='#modal1' onClick={this.props.changeLoginCalculadora}>Más detalles</a>
            </div>
        }*/
        if (this.props.login) {
            opcion = <a id="btn_mas_detalles" onClick={this.props.toPerfil}>presiona aquí</a>
        } else {
            opcion = <a id="btn_mas_detalles" className="modal-trigger" href='#modal1' onClick={this.props.changeLoginCalculadora}>Presiona aquí</a>
        }
        return opcion;
    }
    formatRespuestas = () => {
        switch (this.props.respuestas[0]) {
            case '1': formatos[0] = 'Menor de 25 años';
                break;
            case '2': formatos[0] = 'Entre 25 y 29 años';
                break;
            case '3': formatos[0] = 'Entre 30 y 34 años';
                console.log('caso 3');
                break;
            case '4': formatos[0] = 'Entre 35 y 39 años';
                console.log('caso 4');
                break;
            case '5': formatos[0] = 'Entre 40 y 44 años';
                console.log('caso 5');
                break;
            case '6': formatos[0] = 'Entre 45 y 49 años';
                console.log('caso 6');
                break;
            case '7': formatos[0] = 'Entre 50 y 54 años';
                console.log('caso 7');
                break;
            case '8': formatos[0] = 'Entre 55 y 59 años';
                console.log('caso 8');
                break;
            case '9': formatos[0] = 'Entre 60 y 64 años';
                console.log('caso 9');
                break;
            default: formatos[0] = '65 años o más';
                console.log('caso 10');
                break;
        }

        for (var i = 3; i <= 5; i++) {
            if (this.props.respuestas[i] == 1) {
                formatos[i] = 'Sí'
            } else {
                formatos[i] = 'No'
            }
        }
        switch (this.props.respuestas[1]) {
            case '1': formatos[1] = 'Sí';
                break;
            case '0': formatos[1] = 'No';
                break;
        }
        switch (this.props.respuestas[2]) {
            case '0': formatos[2] = 'Afro';
                break;
            case '1': formatos[2] = 'Indígena';
                break;
            case '2': formatos[2] = 'Mestizo';
                break;
        }
        console.log(formatos);
    }
    changeDecimal() {
        let num = this.props.result * 100;
        // this.showIndicador(parseFloat(num).toFixed(2));
        //return parseFloat(num).toFixed(2);
        this.setState({
            porcentaje: parseFloat(num).toFixed(2)
        });
    }

    /*function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
          <li key={number.toString()}>
            {number}
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }*/

    showIndicador() {
        let porcentaje = parseFloat(this.props.result * 100).toFixed(2);
        const indicador_full = <div class="cont_indicador">
            <h6 id="r1" className="porcentaje">{parseFloat(this.props.result * 100).toFixed(2)}%</h6>
            <div id="ind1" className='indicador irojo'></div>
        </div>
        const indicador_empty = <div className="cont_indicador"></div>
        const items_indicadores = [indicador_empty, indicador_empty, indicador_empty, indicador_empty, indicador_empty];
        if (porcentaje < 20) {
            items_indicadores[4] = indicador_full;
        } else if (porcentaje > 20 && porcentaje < 40) {
            items_indicadores[3] = indicador_full;
        } else if (porcentaje > 40 && porcentaje < 60) {
            items_indicadores[2] = indicador_full;
        } else if (porcentaje > 60 && porcentaje < 80) {
            items_indicadores[1] = indicador_full;
        } else {
            items_indicadores[0] = indicador_full;
        }
        const barra = <div>
            {items_indicadores}
        </div>;
        return barra;
    }

    render() {

        return (

            <div style={this.state.style} id="contenedor-resultado" >
                <div id="contenedor-detalles" className="row">
                    {/*<div id="contenedor-emma" className="hide-on-small-only">
                        <img id="img-emma" src={this.state.img_emma} />
                    </div>*/}
                    <div id="cont-info-detalles" className="col s12 m9 l10 offset-l1">
                        {/*<div id="cont-info-detalles" className="col s12 m9 l8">
                        <div id="contenedor-titulo-ins" className="right-align">
                            <h1 id="titulo-res" className="flow-text right-align">Estimación</h1>
                            <h6 id="subtitulo-res" className="flow-text right-align">Tu nivel de riesgo es </h6>
                            <h1 id="contenido-res" className="flow-text right-align">{this.changeDecimal()} %</h1>
                            <p id="detalle-res" className="left-align detalles">Sed ut perspiciatis unde omnis iste natus error . . . {this.showOpcion()}</p>
                        </div>*/}
                        <div className="col l6 s6">
                            <img id="logo_emmafig_res" src={this.state.logo_emma} className="hide-on-small-only"/>
                            <img id="logo_emmafig_res" src={this.state.logo_emma_movil} className="show-on-small hide-on-med-and-up"/>
                        </div>
                        <div id="contenedor-titulo-ins" className="right-align col l4 col s6">
                            <h1 id="titulo-res" className="flow-text right-align">Estimación</h1>
                            <h6 id="subtitulo-res" className="flow-text right-align">Tu nivel de riesgo es </h6>
                            {/*<h1 id="contenido-res" className="flow-text right-align">this.changeDecimal()</h1>*/}

                            <div id="barra_colores" class="right">
                                {this.showIndicador()}
                                <div>
                                    <div id="cont_rojo_dark" class="cont_color">                                        
                                        <div id='rojo_dark' class="color">
                                            50%                                           
                                    </div>
                                    </div>
                                    <div id="cont_rojo" class="cont_color">                                        
                                        <div id='rojo' class="color">
                                            40%                                            
                                   </div>
                                    </div>
                                    <div id="cont_naranja" class="cont_color">                                        
                                        <div id='naranja' class="color">    
                                          30%                                        
                                    </div>
                                    </div>
                                    <div id="cont_amarillo" class="cont_color">                                        
                                        <div id='amarillo' class="color">   
                                        20%                                         
                                    </div>
                                    </div>
                                    <div id="cont_verde" class="cont_color">                                       
                                        <div id='verde' class="color">   
                                        10%                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-resultado">
                            <div className="col l12">
                                <p id="detalle-res" className="left-align detalles">Si deseas conocer mas detalles de tu resultado. . . {this.showOpcion()}</p>
                                <table className="centered" className="hide-on-small-only">
                                    <thead>
                                        <tr>
                                            <th>¿Cuántos años tienes?</th>
                                            <th>¿Vives en una zona urbana?</th>
                                            <th>¿A qué grupo étnico pertences?</th>
                                            <th>¿Has tenido 3 o más compañeros sexuales en los últimos 5 años?</th>
                                            <th>¿Tienes 5 o más hijos?</th>
                                            <th>¿Tienes cónyuge o pareja estable?</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            {formatos.map((item, index) => <td key={index}>{item}</td>)}
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="centered" className="show-on-small hide-on-med-and-up">
                                    <thead>
                                        <tr>
                                            <th>Pregunta</th>
                                            <th>Respuesta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                ¿Cuántos años tienes?
                                                </td>
                                            <td>
                                                {formatos[0]}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ¿Vives en una zona urbana?
                                                </td>
                                            <td>
                                                {formatos[1]}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ¿A qué grupo étnico pertences?
                                                </td>
                                            <td>
                                                {formatos[2]}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ¿Has tenido 3 o más compañeros sexuales en los últimos 5 años?
                                                </td>
                                            <td>
                                                {formatos[3]}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ¿Tienes 5 o más hijos?
                                                </td>
                                            <td>
                                                {formatos[4]}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ¿Tienes cónyuge o pareja estable?
                                                </td>
                                            <td>
                                                {formatos[5]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row row-resultado">
                            <div className="col s6 m6 l6">
                                <a id="btn_reiniciar" className="boton-res waves-light col s12 m12 l12" onClick={this.props.backComponente}>Recalcular</a>
                            </div>
                            {
                                /*this.showOpcion()*/
                            }
                            <div className="col s6 m6 l6">
                                <a id="btn_conocer_mas" className="boton-res waves-light col s12 m12 l12" onClick={this.props.resultadoGotoCita}>Agenda tu cita</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );

    }
}

export default Resultado; // Don’t forget to use export default!