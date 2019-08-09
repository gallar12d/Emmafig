import React, { Component } from 'react';
import './Paquete.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import $ from 'jquery';

class Paquete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: ''
        };
        
    }

    componentDidMount(){        
        $(document).ready(function(){
            var elems = document.querySelectorAll('.modal');            
            M.Modal.init(elems, {});             
        });
        $('.modal').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');
        
        }
    addItem(id, nombre){
        this.props.item_selected(id, nombre)   

    }
      

    formatNum(num){        
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            num = num.split('').reverse().join('').replace(/^[.]/,'');
            return num;
        }
    }

    render() {
        var whatis ;
         if(this.props.id == 1 || this.props.id == 2){
            whatis =  <h4>Qué es la {this.props.titulo}</h4>
        }
        else{
            whatis =  <h4>Qué es el {this.props.titulo}</h4>

        }
        return (
            <div>
                <div className="col s12 m6 l3">
                    <div className="card ">
                        <div className="card-title white-text">
                            
                            <h4 className="center-align tituloServicio">{this.props.titulo}</h4>
                        </div>
                        <div className="card-content white-text">
                            <h4>$ {this.formatNum(this.props.valor)}</h4>
                            <p>Si separas tu cita por este medio</p>
                        </div>
                        <div className="card-action">
                            <button type="button" className=" agendarbtn btn btn-secondary  modal-trigger" href={'#Modal'+this.props.id}>Conoce más</button>                            
                            <br></br>
                            <button type="button" onClick={this.addItem.bind(this, this.props.id, this.props.titulo )} className="btn btn-secondary">Separa tu cita</button>                            
                        </div>
                    </div>
                </div>
                
                <div id={'Modal'+this.props.id} className="modal">
                    <div className="modal-content left-align">
                       
                        {whatis}
                        <p>{this.props.descripcion}</p>
                        <hr></hr>
                        <h4>Recomendaciones</h4>
                        <p>{this.props.recomendaciones}</p>
                        <hr></hr>
                        <br></br>
                            
                        </div>
                        <div className="modal-footer">
                            <button   className="  waves-effect waves-green btn-flat">Agendar cita</button>
                        </div>
                </div>
            </div>
        );

    }
}

export default Paquete; // Don’t forget to use export default!