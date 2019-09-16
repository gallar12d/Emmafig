import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";
import $ from 'jquery';

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
            no_identificacion: '',
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



    }
    /*
    onchangeFile(e){
        let file = e.target.files;
        console.log(file)

        let reader = new FileReader;
        reader.readAsDataURL(file[0]);
        reader.onload =(e)=>{
            console.log(e.target.result);
        }
    }

    handleChange(event) {
        console.log(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    */
    changePictureProfile() {

        let pictureFile = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];

        pictureFile.append("imgFile", imagedata);
        

        axios.post("https://localhost/atlanticv3/usuarios/updateProfilePicture", pictureFile).then(res => {
            let result = res.data;

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

                    <div className="row">
                        <div className="col m5">
                            <div className="profile-img">
                                <img id="profile_picture" src={this.state.file} alt="" />
                                <div className="file btn btn-lg btn-primary">
                                    Cambiar Foto
                                        <form id="form_img_profile"   >

                                        <input onChange={() => this.changePictureProfile()} type="file" id="foto_perfil" name="userProfile" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col md6">
                            <div className="profile-head">
                                <h5>
                                    {this.state.primer_nombre + ' ' + this.state.segundo_nombre + ' ' + this.state.primer_apellido + ' ' + this.state.segundo_apellido}
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

                </div>

            </div>

        );
    }
}
export default Perfil;