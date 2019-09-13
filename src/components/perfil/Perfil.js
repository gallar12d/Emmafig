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
        var no_identificacion = "1061699966";
        userData.append("identificacion", no_identificacion)
        //cambiar localhost
        axios
            .post("https://emmafig.com/api1/searchHistorialCitas", userData)
            .then(res => {
                let result = res.data;

                //actualizar estado 
                //result = JSON.parse(result)
                console.log(result.resultados_atl)
                if(result.code == 200){

                    this.setState({ resultados: result.resultados_atl })
                    tableData = result.resultados_atl.map(function (e) {
    
                        return <tr>
                            <td>
                                {e.fecha_atencion}
                            </td>
                            <td>
                                {e.id_atencion}
                            </td>
                        </tr>
                    })
                }else{
                    document.getElementById("msj_error").innerHTML = "no se encontraron resultados"
                }
                if(tableData != null || result.code == 400){
                 
                    var elem = document.getElementById("loader")
                    elem.parentNode.removeChild(elem)
                    return false
                  

                }


            })



    }

    render() {

        let tableData = this.state.resultados.map(function (e) {
            var strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion;

            return <tr>
                <td>
                    {e.nombre_servicio}
                </td>
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
                                            <th>Prueba</th>
                                            <th>Fecha resultado</th>
                                            <th>Resultado</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {tableData}
                                    </tbody>
                                    
                                </table>
                                        <p id="msj_error"></p>
                                        <div className="preloader-wrapper small active" id="loader">
                                            <div className="spinner-layer spinner-green-only">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div><div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div><div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>
                                        </div>




                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}
export default Perfil;