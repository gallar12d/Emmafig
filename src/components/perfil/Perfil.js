import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";

let tableData;


class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []

        }
    }


    componentDidMount() {
        M.Tabs.init(this.Tabs);
        const userData = new FormData();
        //asignar a no_identificacion el numero de cedula del usuario logeado
        var no_identificacion = 112323123;
        userData.append("identificacion", no_identificacion)
        axios
            .post("http://localhost/api1/searchHistorialCitas", userData)
            .then(res => {
                let result = res.data;

                //actualizar estado 
                //result = JSON.parse(result)
                console.log(result)
                
                this.setState({ resultados: result })
                tableData = result.map(function (e) {

                    return <tr>
                        <td>
                            {e.fecha_atencion}
                        </td>
                        <td>
                            {e.id_atencion}
                        </td>
                    </tr>
                })
                if(tableData != null){
                    var elem = document.getElementById("loader")
                    elem.parentNode.removeChild(elem)
                    return false

                }


            })



    }

    render() {

        let tableData = this.state.resultados.map(function (e) {
            var strUrl = "http://localhost/atlanticv3/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion;

            return <tr>
                <td>
                    {e.fecha_atencion}
                </td>
                <td>
                    <a target="_blank" href={strUrl}>Ver </a>
                </td>
            </tr>
        })

        return (

            <div className="Perfil">


                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col m5">
                                <div className="profile-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="col md6">
                                <div className="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        N° identificacion: 1002846988
                                    </h6>
                                    <p className="proile-rating">Fecha de nacimiento : <span>8/10</span></p>


                                </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col m12">
                                <h6>REGISTRO DE ACTIVIDAD</h6>
                                <table className="striped" id="tableResult">
                                    <thead>
                                        <tr>
                                            <th>Fecha resultado</th>
                                            <th>Resultado</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        <div class="preloader-wrapper small active" id="loader">
                                            <div class="spinner-layer spinner-green-only">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {tableData}

                                    </tbody>
                                </table>




                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}
export default Perfil;