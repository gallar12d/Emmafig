import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";
import $ from 'jquery';


let tableDataAtl;
let tableDataEmf
let Datagbl;

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_resultados: [],
            resultados: [],
            resultados_emf: [],
            primer_nombre: '',
            segundo_nombre: '',
            primer_apellido: '',
            segundo_apellido: '',
            fecha_nacimiento: '',
            no_identificacion: '',
            tipo_identificacion: '',
            file: ''


        }

        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)


    }



    onChange(e) {


        var elem = document.getElementById("loaderphoto")
        elem.style.display = "inline-block"
        var imagen = document.getElementById("profile_picture")
        imagen.style.display = "none"

        this.fileUpload(e.target.files[0]).then((response) => {


            var result = response.data;


            if (result.code == 1) {


                //traer id de usuario desde el local storage
                //console.log(localStorage.getItem('id'))
                var srcProfileImg = "https://fig.org.co/atlanticv2/public/userAvatar/" + localStorage.getItem('id') + "/" + result.file_name

                this.setState({
                    file: srcProfileImg,

                })
                elem.style.display = "none"
                imagen.style.display = "inline-block"



            } else {
                alert("error al cambiar la foto de perfil");
            }
        })

        //this.setState({ file: e.target.files[0] })
    }
    fileUpload(file) {
        const url = 'https://fig.org.co/atlanticv2/usuarios/updateProfilePicture';
        const formData = new FormData();
        formData.append('file', file)
        //traer id de usuario desde el local storage
        //console.log(localStorage.getItem('id'))
        formData.append('id_usuario', localStorage.getItem('id'))
        formData.append("file_name", file.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
    }
    capitalize(s) {
        var capitalize;

        if (s.length > 0) {

            capitalize = s[0].toUpperCase() + s.slice(1);
        } else {
            capitalize = "";

        }
        return capitalize;

    }
    formatNumber(n) {
        n = String(n).replace(/\D/g, "");
        return n === '' ? n : Number(n).toLocaleString();
    }



    componentDidMount() {
        M.AutoInit();
        var loaderTabla = document.getElementById("loader")
        loaderTabla.style.display = "inline-block"

        const userData = new FormData();
        //axios.post('http://localhost/api1/rest-api-authentication-example/api/getIdentyById.php', {
        axios.post('https://emmafig.com/api1/rest-authentication/api/getIdentyById.php', {
            "id": localStorage.getItem('id')
        }
        )
            .then(res => {

                var nombre1 = res.data.primer_nombre.toLowerCase();
                var apellido1 = res.data.primer_apellido.toLowerCase();
                var nombre2;
                var apellido2;
                var tipo_id = res.data.tipo_identificacion;
                switch (tipo_id){
                    case 'Cédula de ciudadanía':
                                    this.setState({
                                        tipo_identificacion: "C.C:"
                                    })
                        break;
                    case 'Tarjeta de identidad':
                        this.setState({
                            tipo_identificacion: "T.I:"
                        })
                        break;
                    case 'Registro civil':
                        this.setState({
                            tipo_identificacion: "R.C:"
                        })
                        break;
                    case 'Cédula extrangera':
                        this.setState({
                            tipo_identificacion: "C.E:"
                        })
                        break;
                    case 'NIT':
                        this.setState({
                            tipo_identificacion: "NIT:"
                        })
                        break;

                }
               
                console.log(res.data);
                if (res.data.segundo_nombre) {

                    nombre2 = res.data.segundo_nombre.toLowerCase();
                } else {
                    nombre2 = ""
                }
                if (res.data.segundo_apellido) {

                    apellido2 = res.data.segundo_apellido.toLowerCase();
                } else {
                    apellido2 = ""
                }






                this.setState({
                    primer_nombre: this.capitalize(nombre1),
                    segundo_nombre: this.capitalize(nombre2),

                    primer_apellido: this.capitalize(apellido1),
                    segundo_apellido: this.capitalize(apellido2),

                    no_identificacion: this.formatNumber(res.data.no_identificacion)

                })

                //userData.append("identificacion", res.data.no_identificacion)

                //consultar si hay foto de perfil
                let id_user = new FormData();
                //traer id de usuario desde el local storage
                //console.log(localStorage.getItem('id'))
                var id_usuario = localStorage.getItem('id');
                id_user.append('id_usuario', id_usuario);
                id_user.append('filtro', 'todos');
                axios
                    .post("https://emmafig.com/api1/searchProfilePicture", id_user)
                    .then(res => {
                        let result = res.data;
                        console.log(result);

                        var srcProfile;
                        var srcProfileImg;
                        if (result.filename[0].avatar != null) {

                            //console.log(result.filename[0].avatar);
                            srcProfile = result.filename[0].avatar
                            srcProfileImg = "https://fig.org.co/atlanticv2/public/userAvatar/" + id_usuario + "/" + srcProfile

                        } else {

                            srcProfileImg = process.env.PUBLIC_URL + "/img/default-profile.png"
                        }
                        this.setState({
                            file: srcProfileImg
                        })

                        var elem = document.getElementById("loaderphoto")
                        elem.style.display = "none"







                    })
                    

                axios
                    .post("https://emmafig.com/api1/searchHistorialCitas", id_user)
                    .then(res => {
                        let result = res.data;

                        //actualizar estado 
                        //result = JSON.parse(result)



                        if (result.code == 200) {
                            this.setState({
                                resultados: result.resultados_atl,
                                resultados_emf: result.resultados_emf
                            })
                        } else {
                            document.getElementById("msj_error").innerHTML = "no se encontraron resultados";
                        }
                        if (this.state.resultados != null || result.code == 400 || this.state.resultados_emf != null) {

                           
                            loaderTabla.style.display = "none"




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



    changePictureProfile(e) {
        const url = 'https://fig.org.co/atlanticv2/usuarios/updateProfilePicture';
        const pictureFile = new FormData();

        pictureFile.append('imgFile', e.target.files[0].name)

        //traer id de usuario desde el local storage
        //console.log(localStorage.getItem('id'))
        pictureFile.append("id_usuario", localStorage.getItem('id'))
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(url, pictureFile, config).then(res => {
            let result = res.data;
            console.log(result)

        })


    }

    serchResultadosFiltro(){
        document.getElementById("msj_error").innerHTML = "";
        var e = document.getElementById("selectResult")
        this.setState({
            resultados:[],
            resultados_emf: []
        })
        var loaderTabla = document.getElementById("loader")
        var tbody = document.getElementById("tbodyResult");
        tbody.style.display = "none"
        loaderTabla.style.display = "inline-block"
        var selectValue = e.options[e.selectedIndex].value;
        var dataForm = new FormData();
        dataForm.append("id_usuario", localStorage.getItem("id"));
        dataForm.append("filtro", selectValue);
        axios
        .post("https://emmafig.com/api1/searchHistorialCitas", dataForm)
        .then(res => {
            let result = res.data;

            //actualizar estado 
            //result = JSON.parse(result)



            if (result.code == 200) {
                this.setState({
                    resultados: result.resultados_atl,
                    resultados_emf: result.resultados_emf
                })
                
            } else {
                document.getElementById("msj_error").innerHTML = "no se encontraron resultados";
            }
            if (this.state.resultados != null || result.code == 400 || this.state.resultados_emf != null) {

                loaderTabla.style.display = "none"
                tbody.style.display = "inline-block"
                




                return false


            }
        })

    }

    render() {
        var strUrl;
        let tableData;
        let tableDataEmf;

        if (this.state.resultados != null && this.state.resultados_emf != null) {

            tableData = this.state.resultados.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";

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

            tableDataEmf = this.state.resultados_emf.map(function (e) {
                strUrl = "https://emmafig.com/api1/pdf?id=" + e.id_estimacion;
                return <tr>

                    <td>
                        ESTIMACION DE RIESGO
            </td>
                    <td>
                        {e.fecha_estimacion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                </tr>
            })
        } else if (this.state.resultados != null && this.state.resultados_emf == null) {

            tableData = this.state.resultados.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";

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
        } else if (this.state.resultados == null && this.state.resultados_emf != null) {
            tableDataEmf = this.state.resultados_emf.map(function (e) {
                /*strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";*/
                strUrl = "https://emmafig.com/api1/pdf?id=" + e.id_estimacion;
                return <tr>

                    <td>
                        ESTIMACION DE RIESGO
                </td>
                    <td>
                        {e.fecha_estimacion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                </tr>
            })
        }


        return (

            <div className="Perfil">


                <div className="container emp-profile">

                    <div className="row">
                        <div className="col l5 m5">


                            <div id="loaderphoto" className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-green-only" >
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-img">
                                <div className="row">
                                    <div className="col l12 m12 s12">
                                        <img id="profile_picture" src={this.state.file} alt="" />

                                    </div>

                                </div>
                                <div className="file btn btn-lg btn-primary">
                                    Cambiar Foto
                                        <form id="form_img_profile" onChange={this.onChange} >

                                        <input type="file" id="foto_perfil" name="file" />
                                    </form>
                                </div>


                            </div>
                        </div>
                        <div className="col l6 m6 s12">
                            <div className="profile-head">
                                <h5 id="textCapitalize">

                                    {this.state.primer_nombre + ' ' + this.state.segundo_nombre + ' ' + this.state.primer_apellido + ' ' + this.state.segundo_apellido}


                                </h5>
                                
                                <h6>
                                    {this.state.tipo_identificacion} {this.state.no_identificacion}
                                </h6>


                            </div>
                        </div>

                    </div>
                    <div className="row">
                        

                        <div className="col l12 m12 s12">
                            <h3>HISTORIAL DE RESULTADOS</h3>
                            <div className="filtroGroup">
                            <div className="row rowFiltroGroup">

                                <div className="col s12 m4 l4">
                                    <h6 className="alig">¿Qué tipo de resultados deseas ver?</h6>
                                </div>
                                <div class="col s12 m4 l4">
                                    <select id="selectResult">

                                        <option value="todos">Todos</option>
                                        <option value="atl">Resultados medicos</option>
                                        <option value="emf">Estimacion de riesgo</option>

                                    </select>

                                </div>
                                <div className="col s12 m4 l4 buttonContent">

                                    <a class="waves-light btn-small" onClick={() => this.serchResultadosFiltro()}>Buscar</a>

                                </div>
                            </div>

                        </div>
                            <table className="striped" id="tableResultados" >
                                <thead>
                                    <tr>
                                        <th>Resultado</th>
                                        <th>Fecha </th>
                                        <th>Informe</th>

                                    </tr>
                                </thead>

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
                                <tbody id="tbodyResult">
                                    

                                    {tableData}
                                    {tableDataEmf}
                                   
                                    
                                    

                                </tbody>

                            </table>




                        </div>


                    </div>



                </div>

            </div>

        );
    }
}
export default Perfil;