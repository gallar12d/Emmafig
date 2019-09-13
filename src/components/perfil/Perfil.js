import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";

let tableData;


class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            primer_nombre: '',
            segundo_nombre: '',
            primer_apellido: '',
            segundo_apellido: '',
            fecha_nacimiento: '',
            no_identificacion: ''
        }
    }


    componentDidMount() {
        M.Tabs.init(this.Tabs);
        const userData = new FormData();
        //axios.post('http://localhost/api1/rest-api-authentication-example/api/getIdentyById.php', {
        axios.post('https://emmafig.com/api1/rest-authentication/api/getIdentyById.php', {
            "id": localStorage.getItem('id')
        }
        )
            .then(res => {
                this.setState({
                    primer_nombre: res.data.primer_nombre,
                    segundo_nombre: res.data.segundo_nombre,
                    primer_apellido: res.data.primer_apellido,
                    segundo_apellido: res.data.segundo_apellido,
                    fecha_nacimiento: res.data.fecha_nacimiento,
                    no_identificacion: res.data.no_identificacion
                })
                userData.append("identificacion", res.data.no_identificacion)
                axios
                    .post("https://emmafig.com/api1/searchHistorialCitas", userData)
                    .then(res => {
                        let result = res.data;

                        //actualizar estado 
                        //result = JSON.parse(result)
                        console.log(result.resultados_atl)
                        if (result.code == 200) {

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
                        } else {
                            document.getElementById("msj_error").innerHTML = "no se encontraron resultados"
                        }
                        if (tableData != null || result.code == 400) {

                            var elem = document.getElementById("loader")
                            elem.parentNode.removeChild(elem)
                            return false


                        }


                    })

            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });

        //cambiar localhost



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
                                        Cambiar Foto
                                <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="col md6">
                                <div className="profile-head">
                                    <h5>
                                        {this.state.primer_nombre+' '+this.state.segundo_nombre+' '+this.state.primer_apellido+' '+this.state.segundo_apellido}
                                    </h5>
                                    <h6>
                                        N° identificacion: {this.state.no_identificacion}
                                    </h6>
                                    <p className="proile-rating">Fecha de nacimiento : <span>{this.state.fecha_nacimiento}</span></p>


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