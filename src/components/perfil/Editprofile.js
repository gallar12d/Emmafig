import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";

//cronometro entre tareas
var endTask;
var ss;
var mm;
var hh;
var time;
var cc;
var acumularTime2;



class Editprofile extends Component {
    constructor(props) {
        
        super(props);
        this.timer = null;
        this.startedOn = 0;
        this.state = {
            elapsed: 0,
        }
        this.start = this.start.bind( this );
        this.stop = this.stop.bind( this );
    }
    componentDidMount() {
        M.Collapsible.init(this.Collapsible);
    }
    
  
    start() {
        this.startedOn = new Date().getTime();
        this.timer = window.setInterval( this.updateTime.bind( this ), 10 );
        
    }
    updateTime() {
        this.setState( {elapsed: new Date().getTime() - this.startedOn } );
        time = this.state.elapsed;
        acumularTime2 = new Date;
        acumularTime2.setTime(time);
        cc = Math.round(acumularTime2.getMilliseconds()/10);
        ss = acumularTime2.getSeconds();
        mm = acumularTime2.getMinutes();
        hh = acumularTime2.getHours()-19;
        if (cc < 10) {cc = "0"+cc;}
        if (ss < 10) {ss = "0"+ss;} 
        if (mm < 10) {mm = "0"+mm;}
        if (hh < 10) {hh = "0"+hh;}
        endTask = hh+" : "+mm+" : "+ss+" : "+cc;
       
      
    }
    stop() {
        window.clearInterval( this.timer );
        alert("El usuario ha tardado "+endTask+" en completar la tarea");
        
    }
   
    





    render() {

        return (

            <div className="EditProfile">

                <div className="container emp-profile">
                    <h4 className="headTitle">Configuracion general de la cuenta</h4>
                    <ul ref={Collapsible => { this.Collapsible = Collapsible }} class="collapsible">
                        <li>
                            <div class="collapsible-header resetBorder" id="UserName"><i class="large material-icons">person</i>Nombre de usuario</div>
                            <div class="collapsible-body">
                                <div class="row">
                                    <div class="input-field col s6 ">
                                        <input id="first_name2" type="text" class="validate" />
                                        <label class="active" for="first_name2">Nombre de usuario</label>
                                    </div>

                                </div>

                                <a class="waves-effect waves-light btn" onClick={this.start}>Guardar cambios</a>
                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header resetBorder"><i class="large material-icons">email</i>Correo</div>
                            <div class="collapsible-body">
                                <div class="row">
                                    <div class="input-field col s6 ">
                                        <input id="email" type="email" class="validate" />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <a class="waves-effect waves-light btn">Guardar cambios</a>

                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header resetBorder"><i class="large material-icons">fingerprint</i>Contraseña</div>
                            <div class="collapsible-body">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="password" type="password" class="validate" />
                                        <label for="password">Contraseña actual</label>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="password" type="password" class="validate" />
                                            <label for="password">Nueva contraseña</label>
                                        </div>
                                    </div>
                                </div>
                                <a class="waves-effect waves-light btn">Guardar cambios</a>

                            </div>
                        </li>
                        <li>
                            <div class="collapsible-header resetBorder"><i class="large material-icons">phone_android</i>Numero de telefono</div>
                            <div class="collapsible-body">
                                <div class="row">
                                    <div class="input-field col s6 ">
                                        <input id="numeroTelefono" type="number" class="validate" />
                                        <label for="numeroTelefono">Numero de telefono</label>
                                    </div>

                                </div>
                                <a class="waves-effect waves-light btn" onClick={this.stop} >Guardar cambios</a>

                            </div>
                        </li>
                    </ul>





                </div>


            </div>
        );
    }
}
export default Editprofile;