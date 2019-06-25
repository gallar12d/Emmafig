import React, { Component } from 'react';
import './Detalle.css'

class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_enviar: process.env.PUBLIC_URL + "/img/enviar-a-btn.svg",
            btn_saber: process.env.PUBLIC_URL + "/img/saber-on-btn.svg",
            btn_cita: process.env.PUBLIC_URL + "/img/pedircita-btn.svg",
            img_emma: process.env.PUBLIC_URL + "/img/emma-ok.svg"
        };

        this.okHandleMouseOver = this.okHandleMouseOver.bind(this);
        this.okHandleMouseOut = this.okHandleMouseOut.bind(this);

    }

    okHandleMouseOver() {
        this.setState({
            btn_ok: process.env.PUBLIC_URL + "/img/ok-hover-btn.svg"
        });
    }

    okHandleMouseOut() {
        this.setState({
            btn_ok: process.env.PUBLIC_URL + "/img/ok-btn.svg"
        });
    }

    render() {

        return (
            <div id="contenedor-detalles" className="row">
                <div id="contenedor-emma" className="col s4 m4 l4 offset-s4">
                    <img id="img-emma" src={this.state.img_emma} />
                </div>
                <div className="col s10 m8 l6 offset-s1">
                    <div id="contenedor-titulo-ins" className="right-align">
                        <span id="titulo-res">Detalles de tu resultado</span>
                        <p id="detalle-res">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                    <div id="contenedor-opciones" className="row">
                        <div className="col s4 m4 l4">
                            <img id="btn_enviar" onMouseOver={this.okHandleMouseOver} onMouseOut={this.okHandleMouseOut} src={this.state.btn_enviar} className="center btn_op" />
                        </div>
                        <div className="col s4 m4 l4">
                            <img id="btn_saber" onMouseOver={this.okHandleMouseOver} onMouseOut={this.okHandleMouseOut} src={this.state.btn_saber} className="center btn_op" />
                        </div>
                        <div className="col s4 m4 l4">
                            <img id="btn_cita" onMouseOver={this.okHandleMouseOver} onMouseOut={this.okHandleMouseOut} src={this.state.btn_cita} className="center btn_op" />
                        </div>
                    </div>
                </div>
            </div >

        );

    }
}

export default Detalle; // Don’t forget to use export default!